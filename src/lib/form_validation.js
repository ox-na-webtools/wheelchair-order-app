/**
 * フォーム必須項目チェックと未記入時スクロールのロジック
 * （画面構造は app.js、バリデーション・スクロールはここで実施）
 */

/**
 * 確定表示前にチェックする必須項目の未記入ラベル配列を計算する（表示順で返す）
 * @param {Object} params - フォーム状態
 * @param {Object} params.DIMENSION_LABELS - data_ui.js の寸法ラベル
 */
export function computeMissingRequiredItems(params) {
  const {
    selectedSeries,
    currentCatalog,
    selections,
    frameParts,
    jwg1Selections,
    dimensionOptsMap,
    dimensions,
    casterWheelType,
    casterWheelSize,
    gweUnitDetail,
    armrestSel,
    catalogVariant,
    armrestConfig,
    DIMENSION_LABELS,
    GWE_UNIT_DETAIL_MASTER,
  } = params;

  const missing = [];
  if (!selectedSeries || !currentCatalog) return missing;

  if (selectedSeries !== 'NEO' && currentCatalog.baseModels?.length && !selections.baseModel) missing.push('基本構成モデル');
  if ((selectedSeries === 'MX_MR' || selectedSeries === 'NEO') && !selections.package) missing.push('パッケージ');

  if (currentCatalog.frameOptions) {
    const frameLabels = { type: 'フレームタイプ', shape: selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状', length: '長さ', height: '高さ', pipe: 'フロントパイプ', size: 'サイズ', seat: 'シート' };
    Object.keys(currentCatalog.frameOptions).forEach(cat => {
      if (!frameParts[cat]) missing.push(frameLabels[cat] || cat);
    });
  }

  if (currentCatalog.jwg1Options) {
    if (!jwg1Selections?.clutchLever) missing.push('クラッチレバー位置');
    if (!jwg1Selections?.controllerPos) missing.push('コントローラー位置');
    if (!jwg1Selections?.switch) missing.push('スイッチ');
  }

  if (selectedSeries === 'GWE') {
    if (!gweUnitDetail?.unitId) missing.push('電動ユニット（GW-E）');
    else if (GWE_UNIT_DETAIL_MASTER?.[gweUnitDetail.unitId]?.groups) {
      GWE_UNIT_DETAIL_MASTER[gweUnitDetail.unitId].groups.forEach(g => {
        if (!gweUnitDetail.parts?.[g.key]) missing.push(`電動ユニット - ${g.label}`);
      });
    }
  }

  if (selectedSeries !== 'COTON') {
    if (currentCatalog.axleTypes?.length && !selections.axleType) missing.push('車軸タイプ');
    if (currentCatalog.casterForks?.length && !selections.casterFork) missing.push('キャスターフォーク');
    if (catalogVariant !== 'kids') {
      if (!casterWheelType) missing.push('キャスターホイール（種類）');
      if (casterWheelType && !casterWheelSize) missing.push('キャスターホイール（サイズ）');
    }
    if (currentCatalog.footrests?.length && !selections.footrest) missing.push('フットレスト');
    if (currentCatalog.brakes?.length && !selections.brake) missing.push('ブレーキシステム');
  }

  if (selectedSeries !== 'GWE') {
    const hasMainWheel = currentCatalog.wheels && currentCatalog.wheels.length > 0;
    if (hasMainWheel && !selections.wheel) missing.push('メインホイール（種類）');
    if (hasMainWheel && !selections.wheelSize) missing.push('メインホイール（サイズ）');
    if (currentCatalog?.tireBrand && !selections.tire && catalogVariant !== 'kids') missing.push('タイヤカラー');
    if (params.HANDRIM_OPTIONS?.length && !selections.handrim && selectedSeries !== 'MINI_NEO_A_KIDS' && selectedSeries !== 'MINI_NEO_A_JUNIOR') missing.push('ハンドリム');
  }

  const cotonSkipDims = selectedSeries === 'COTON' ? ['l8', 'w2', 'cm', 'sb'] : [];
  Object.entries(dimensionOptsMap || {}).forEach(([key, opts]) => {
    if (cotonSkipDims.includes(key)) return;
    const arr = Array.isArray(opts) ? opts : [];
    if (arr.length <= 1) return;
    if (key === 'h4Type' || key === 'h4Val') {
      if (key === 'h4Type' && !dimensions.h4Type) missing.push(DIMENSION_LABELS.h4Type);
      if (key === 'h4Val' && dimensions.h4Type && (!dimensions.h4Val || String(dimensions.h4Val).trim() === '')) missing.push(DIMENSION_LABELS.h4Val);
      return;
    }
    if (key === 'h2' && !dimensions.casterWheel) return;
    if (key === 'h3' && arr.length <= 1) return;
    const val = dimensions[key];
    if (val === undefined || val === null || String(val).trim() === '') missing.push(DIMENSION_LABELS[key] || key);
  });

  if (armrestConfig.armrestSingleHeight) {
    if (armrestSel.kind && !armrestSel.ah) missing.push('アームレスト高');
  } else {
    if (armrestSel.kind && (!armrestSel.lh || !armrestSel.ah)) missing.push('アームレスト（高低・高さ）');
  }
  if (armrestSel.kind && armrestConfig.armrestLengths?.length && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR' || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR' || selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR') && !armrestSel.al) missing.push('アームレスト長');

  return missing;
}

/**
 * 未記入の先頭項目の要素にスクロールする（data-required-label で紐付け）。
 * 未記入警告枠の下にターゲットの上端が来るようにスクロールする。
 * @param {string} label - 必須項目の表示ラベル（例: '基本構成モデル'）
 */
export function scrollToFirstMissingItem(label) {
  if (typeof document === 'undefined' || !label) return;
  const el = document.querySelector(`[data-required-label="${label}"]`);
  if (!el) return;
  const warningBar = document.querySelector('[data-missing-warning-bar]');
  const gap = 8;
  if (warningBar) {
    const warningRect = warningBar.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const targetTop = warningRect.bottom + gap;
    const currentScrollY = window.scrollY ?? window.pageYOffset;
    const desiredScrollY = currentScrollY + elRect.top - targetTop;
    window.scrollTo({ top: Math.max(0, desiredScrollY), behavior: 'smooth' });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
