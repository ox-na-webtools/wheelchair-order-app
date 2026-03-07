/**
 * 専用オプションまわりの機種条件ロジック（アームレスト設定・オプション表示条件）
 */

/**
 * アームレスト設定を機種・カタログから算出する
 * @param {object} currentCatalog
 * @param {{ height?: object }} frameParts
 * @param {string} selectedSeries
 * @param {string} [baseModelId]
 * @param {string} [catalogVariant]
 * @returns {{ arm: object|null, flip: object|null, armrestLengths?: array|null, armrestSingleHeight?: boolean }}
 */
export function getArmrestConfig(currentCatalog, frameParts, selectedSeries, baseModelId, catalogVariant) {
  if (!currentCatalog?.options) return { arm: null, flip: null };
  const dr = currentCatalog.dimensionRules;
  if (selectedSeries === 'COTON' && dr?.armrestAhByType) {
    const by = dr.armrestAhByType;
    const arm = {
      low:  { id: 'coton_arm_low',  baseId: 'coton_arm', name: 'アームレスト ロー',   no: '-', price: 0, ah: (by['ロー'] || []).map(Number) },
      mid:  { id: 'coton_arm_mid',  baseId: 'coton_arm', name: 'アームレスト ミディアム', no: '-', price: 0, ah: (by['ミディアム'] || []).map(Number) },
      high: { id: 'coton_arm_high', baseId: 'coton_arm', name: 'アームレスト ハイ',  no: '-', price: 0, ah: (by['ハイ'] || []).map(Number) },
    };
    return { arm, flip: null };
  }
  const findById = (id) => currentCatalog.options.find(o => o.id === id);
  const findByNameIncludes = (kw) => currentCatalog.options.find(o => (o.name || '').includes(kw));
  const zzrLow = findById('opt_arm_l');
  const zzrHigh = findById('opt_arm_h');
  let armBase, flipBase;
  if (catalogVariant === 'kids') {
    const isKidsOrJrSchool = (selectedSeries === 'MINI_NEO_KIDS' && (baseModelId === 'kids_school' || baseModelId === 'kids_school_less')) || (selectedSeries === 'MINI_NEO_JUNIOR' && (baseModelId === 'jr_school' || baseModelId === 'jr_school_less'));
    const isAKidsOrAJr = selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR';
    const isEKidsOrEJr = selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR';
    const isKidsOrJr = selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR';
    const isToddler = selectedSeries === 'MINI_NEO_TODDLER';
    armBase = (isKidsOrJrSchool || isAKidsOrAJr || isEKidsOrEJr || isKidsOrJr || isToddler) ? findById('opt_arm_std') : null;
    flipBase = (isAKidsOrAJr || isEKidsOrEJr) ? null : findById('opt_flip_arm');
    if (isAKidsOrAJr && armBase && Array.isArray(armBase.ah) && armBase.ah.length > 0) {
      const single = { id: armBase.id + '__single', baseId: armBase.id, name: armBase.name || 'アームレスト（標準）', no: armBase.no || '標準', price: armBase.price || 0, ah: armBase.ah };
      return { arm: { single }, flip: null, armrestLengths: dr?.armrestLengths || null, armrestSingleHeight: true };
    }
    // ミニネオEキッズ・Eジュニア: No.12 ミディアム / No.13 ハイ のみ、AH・AL ドロップダウン、0円
    if (isEKidsOrEJr && armBase && (Array.isArray(armBase.ahMid) || Array.isArray(armBase.ahHigh))) {
      const mid = (armBase.ahMid && armBase.ahMid.length > 0) ? { id: armBase.id + '__mid__armgrp', baseId: armBase.id, name: (armBase.name || 'アームレスト') + ' ミディアム', no: 'No.12', price: armBase.price ?? 0, ah: armBase.ahMid } : null;
      const high = (armBase.ahHigh && armBase.ahHigh.length > 0) ? { id: armBase.id + '__high__armgrp', baseId: armBase.id, name: (armBase.name || 'アームレスト') + ' ハイ', no: 'No.13', price: armBase.price ?? 0, ah: armBase.ahHigh } : null;
      return { arm: { mid, high }, flip: null, armrestLengths: dr?.armrestLengths || null, armrestSingleHeight: false };
    }
  } else {
    armBase = (selectedSeries === 'MX_MR') ? (baseModelId === 'mr_base' ? findById('opt_arm_mr') : null) || findById('opt_arm') || findByNameIncludes('アームレスト') : findById('opt_arm') || findById('opt_arm_ln') || findByNameIncludes('アームレスト');
    flipBase = findById('opt_flip') || findByNameIncludes('はね上げ式アームレスト');
  }
  const buildFromCombined = (obj, baseName) => {
    if (!obj) return null;
    const m = (obj.no || '').split('/');
    const no = { low: m[0]?.trim() || obj.no, mid: m[0]?.trim() || obj.no, high: m[1]?.trim() || obj.no };
    const hLabel = frameParts?.height?.label ?? frameParts?.height ?? '';
    const hs = String(hLabel);
    const hk = hs.includes('フラット') ? 'フラット' : hs.includes('ハイ') ? 'ハイ' : 'レギュラー';
    const lowAh = (obj.ahLowByHeight && obj.ahLowByHeight[hk]) || (Array.isArray(obj.ahLow) ? obj.ahLow : (Array.isArray(obj.ah) ? obj.ah : []));
    const midAh = (Array.isArray(obj.ahMid) ? obj.ahMid : []);
    const highAh = (obj.ahHighByHeight && obj.ahHighByHeight[hk]) || (Array.isArray(obj.ahHigh) ? obj.ahHigh : (Array.isArray(obj.ah) ? obj.ah : []));
    const result = {
      low:  lowAh.length  ? { id: `${obj.id}__low__armgrp`,  baseId: obj.id, name: `${baseName} ロー`,  no: no.low,  price: obj.price || 0, ah: lowAh } : null,
      mid:  midAh.length  ? { id: `${obj.id}__mid__armgrp`,  baseId: obj.id, name: `${baseName} ミディアム`, no: no.mid,  price: obj.price || 0, ah: midAh } : null,
      high: highAh.length ? { id: `${obj.id}__high__armgrp`, baseId: obj.id, name: `${baseName} ハイ`, no: no.high, price: obj.price || 0, ah: highAh } : null,
    };
    return result;
  };
  let arm, flip;
  if (zzrLow || zzrHigh) {
    arm = { low: zzrLow ? { ...zzrLow, baseId: zzrLow.id, name: 'アームレスト ロー' } : null, high: zzrHigh ? { ...zzrHigh, baseId: zzrHigh.id, name: 'アームレスト ハイ' } : null };
    flip = buildFromCombined(flipBase, 'はね上げ式アームレスト');
  } else {
    arm = buildFromCombined(armBase, 'アームレスト');
    flip = buildFromCombined(flipBase, 'はね上げ式アームレスト');
  }
  return { arm, flip, armrestLengths: dr?.armrestLengths || null };
}

/**
 * フレームタイプに連動する後輪サイズを返す（ミニネオEジュニア等: ロー→20インチ、ミディ→22インチ）
 * @param {{ label?: string, no?: string } | null} frameTypeOption - frameParts.type
 * @returns {'20インチ'|'22インチ'|null}
 */
export function getMainWheelSizeByFrameType(frameTypeOption) {
  if (!frameTypeOption) return null;
  const label = String(frameTypeOption.label ?? '');
  const no = String(frameTypeOption.no ?? '');
  const s = `${label} ${no}`;
  if (/ロー/.test(s)) return '20インチ';
  if (/ミディ/.test(s)) return '22インチ';
  return null;
}

/**
 * フレームタイプで後輪サイズが決まるカタログ用に、表示用のメインホイール一覧とサイズを返す
 * （種類Aは連動したサイズのホイールのみ表示、サイズBはその1つのみ表示）
 * @param {object} currentCatalog - 現在のカタログ
 * @param {{ label?: string, no?: string } | null} framePartsType - frameParts.type
 * @param {string} [selectedSeries]
 * @returns {{ linkedSize: string, wheels: Array, wheelSizes: Array } | null} 連動時のみオブジェクト、それ以外は null
 */
export function getMainWheelDisplayForFrameLinkedCatalog(currentCatalog, framePartsType, selectedSeries) {
  if (!currentCatalog?.wheels?.length || !currentCatalog.frameOptions?.type) return null;
  const sizes = currentCatalog.wheelSizes || [];
  const has20and22 = sizes.includes('20インチ') && sizes.includes('22インチ');
  if (!has20and22) return null;
  const linkedSize = getMainWheelSizeByFrameType(framePartsType);
  if (!linkedSize) return null;
  const wheels = currentCatalog.wheels;
  const sizeIndex = sizes.indexOf(linkedSize);
  const filteredWheels = sizeIndex >= 0 && wheels[sizeIndex] ? [wheels[sizeIndex]] : wheels.filter((w, i) => (sizes[i] === linkedSize));
  return { linkedSize, wheels: filteredWheels.length ? filteredWheels : wheels, wheelSizes: [linkedSize] };
}

/**
 * 専用オプションセクションのグリッドに表示するオプションをフィルタする
 * currentCatalog.uiRules.optionDropdownGroups がある場合はその optionIds をグリッドから除外する
 * @param {Array} options
 * @param {{ selectedSeries: string, catalogVariant: string, selections: object, currentCatalog?: object }} context
 * @returns {Array}
 */
export function filterOptionsForSpecialSection(options, context) {
  const { selectedSeries, catalogVariant, selections, currentCatalog } = context;
  const uiDropdownIds = (currentCatalog?.uiRules?.optionDropdownGroups || []).flatMap(g => g.optionIds || []);
  return (options || []).filter(opt => {
    const isArmrestGroup = ['opt_arm_l', 'opt_arm_h', 'opt_arm', 'opt_arm_mr', 'opt_arm_ln'].includes(opt.id);
    const isKidsDropdownGroup = ((selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR') && ['opt_push_fixed', 'opt_push_slide', 'opt_wheelie_fixed', 'opt_wheelie_fold', 'opt_fender_s', 'opt_fender_l', 'opt_cushion_tbl_white', 'opt_cushion_tbl_blue', 'opt_cushion_tbl_pink'].includes(opt.id)) || ((selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR') && ['opt_wheelie_fixed', 'opt_wheelie_fold', 'opt_cushion_tbl_white', 'opt_cushion_tbl_blue', 'opt_cushion_tbl_pink'].includes(opt.id));
    if (opt.id === 'opt_flip' && (Array.isArray(opt.ahLow) || Array.isArray(opt.ahHigh) || Array.isArray(opt.ah))) return false;
    if (catalogVariant === 'kids' && (opt.id === 'opt_arm_std' || opt.id === 'opt_flip_arm')) return false;
    const isSchoolPkg = (selections.package?.id === 'kids_school' || selections.package?.id === 'jr_school' || selections.package?.id === 'kids_school_less' || selections.package?.id === 'jr_school_less') || (selections.baseModel?.id === 'kids_school' || selections.baseModel?.id === 'jr_school' || selections.baseModel?.id === 'kids_school_less' || selections.baseModel?.id === 'jr_school_less');
    if (opt.packageOnly === 'enjoy' && isSchoolPkg) return false;
    if (uiDropdownIds.length && uiDropdownIds.includes(opt.id)) return false;
    if (isKidsDropdownGroup) return false;
    return !isArmrestGroup;
  });
}
