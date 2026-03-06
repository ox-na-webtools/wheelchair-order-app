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
 * @returns {{ arm: object|null, flip: object|null, armrestLengths?: array|null }}
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
    const isKidsOrJrSchool = (selectedSeries === 'MINI_NEO_KIDS' && baseModelId === 'kids_school') || (selectedSeries === 'MINI_NEO_JUNIOR' && baseModelId === 'jr_school');
    const isAKidsOrAJr = selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR';
    const isKidsOrJr = selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR';
    const isToddler = selectedSeries === 'MINI_NEO_TODDLER';
    armBase = (isKidsOrJrSchool || isAKidsOrAJr || isKidsOrJr || isToddler) ? findById('opt_arm_std') : null;
    flipBase = findById('opt_flip_arm');
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
 * 専用オプションセクションのグリッドに表示するオプションをフィルタする
 * @param {Array} options
 * @param {{ selectedSeries: string, catalogVariant: string, selections: object }} context
 * @returns {Array}
 */
export function filterOptionsForSpecialSection(options, context) {
  const { selectedSeries, catalogVariant, selections } = context;
  return (options || []).filter(opt => {
    const isArmrestGroup = ['opt_arm_l', 'opt_arm_h', 'opt_arm', 'opt_arm_mr', 'opt_arm_ln'].includes(opt.id);
    const isKidsDropdownGroup = (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR') && ['opt_push_fixed', 'opt_push_slide', 'opt_wheelie_fixed', 'opt_wheelie_fold', 'opt_fender_s', 'opt_fender_l', 'opt_cushion_tbl_white', 'opt_cushion_tbl_blue', 'opt_cushion_tbl_pink'].includes(opt.id);
    if (opt.id === 'opt_flip' && (Array.isArray(opt.ahLow) || Array.isArray(opt.ahHigh) || Array.isArray(opt.ah))) return false;
    if (catalogVariant === 'kids' && (opt.id === 'opt_arm_std' || opt.id === 'opt_flip_arm')) return false;
    const isSchoolPkg = (selections.package?.id === 'kids_school' || selections.package?.id === 'jr_school') || (selections.baseModel?.id === 'kids_school' || selections.baseModel?.id === 'jr_school');
    if (opt.packageOnly === 'enjoy' && isSchoolPkg) return false;
    if (isKidsDropdownGroup) return false;
    return !isArmrestGroup;
  });
}
