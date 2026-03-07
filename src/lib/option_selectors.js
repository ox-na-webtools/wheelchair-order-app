/**
 * 専用オプションの選択処理（トグル・アームレスト upsert・キッズ用ドロップダウン更新）
 */

/**
 * リストに対するトグル（追加/削除）
 * @param {object} item
 * @param {Array} list - 現在のリスト（state の値）
 * @param {function} setList - setState
 */
export function toggleItem(item, list, setList) {
  if (list.find(i => i.id === item.id)) setList(list.filter(i => i.id !== item.id));
  else setList([...list, item]);
}

/**
 * アームレストオプションを selectedOptions に 1 件だけ反映する（置き換え）
 * @param {object|null} next - オプションオブジェクト、または null で削除
 * @param {function} setSelectedOptions
 */
export function upsertArmrestOption(next, setSelectedOptions) {
  setSelectedOptions(prev => {
    const removed = prev.filter(o => !(o && o.__group === 'ARMREST'));
    return next ? [...removed, next] : removed;
  });
}

/**
 * アームレスト選択状態から 1 件のオプションオブジェクトを計算する（純粋関数）
 * @param {object} armrestSel - { kind, lh, ah, al }
 * @param {object} armrestConfig - getArmrestConfig の戻り値
 * @param {string} selectedSeries
 * @param {object} baseModel - selections.baseModel
 * @param {string} [catalogVariant]
 * @returns {object|null} - オプションオブジェクト or null
 */
export function computeArmrestOption(armrestSel, armrestConfig, selectedSeries, baseModel, catalogVariant) {
  const armrestSingleHeight = !!armrestConfig.armrestSingleHeight;
  if (!armrestSel.kind || !armrestSel.ah) return null;
  if (!armrestSingleHeight && !armrestSel.lh) return null;
  const needsAl = armrestConfig.armrestLengths?.length && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR' || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR' || selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR');
  if (needsAl && !armrestSel.al) return null;
  const group = armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip;
  const base = armrestSingleHeight ? group?.single : (armrestSel.lh === 'ロー' ? group?.low : armrestSel.lh === 'ミディアム' ? group?.mid : group?.high);
  if (!base) return null;
  let calculatedPrice = base.price || 0;
  const isStandardZeroSeries = (selectedSeries === 'NEO' || selectedSeries === 'GWE' || selectedSeries === 'COTON' || (selectedSeries === 'MX_MR' && baseModel?.id === 'mx_base'));
  const isKidsArmrestSeries = catalogVariant === 'kids' && ['MINI_NEO_KIDS', 'MINI_NEO_JUNIOR', 'MINI_NEO_A_KIDS', 'MINI_NEO_A_JUNIOR', 'MINI_NEO_E_KIDS', 'MINI_NEO_E_JUNIOR'].includes(selectedSeries);
  const isEKidsOrEJr = selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR';
  if (selectedSeries === 'MINI_NEO_TODDLER') {
    calculatedPrice = base.price ?? 0;
  } else if (isEKidsOrEJr) {
    calculatedPrice = 0;
  } else if (isStandardZeroSeries) {
    calculatedPrice = (selectedSeries === 'COTON' || armrestSel.kind === 'arm') ? 0 : 6000;
  } else if (isKidsArmrestSeries) {
    const isKidsOrJrSchool = (selectedSeries === 'MINI_NEO_KIDS' && (baseModel?.id === 'kids_school' || baseModel?.id === 'kids_school_less')) || (selectedSeries === 'MINI_NEO_JUNIOR' && (baseModel?.id === 'jr_school' || baseModel?.id === 'jr_school_less'));
    calculatedPrice = armrestSel.kind === 'arm' ? (isKidsOrJrSchool ? 0 : 22000) : 6000;
  } else if (selectedSeries === 'MX_MR' && baseModel?.id === 'mr_base') {
    calculatedPrice = armrestSel.kind === 'arm' ? 22000 : 28000;
  }
  let note = `アームレスト高 ${armrestSel.ah}mm`;
  if (needsAl && armrestSel.al) {
    const alObj = armrestConfig.armrestLengths.find(a => a.no === armrestSel.al || a.label === armrestSel.al);
    if (alObj) note += ` / AL: ${alObj.label} (${alObj.no})`;
  }
  return { id: `${base.id}__${armrestSel.ah}${armrestSel.al ? `_al_${armrestSel.al}` : ''}`, name: base.name, no: base.no, price: calculatedPrice, note, __group: 'ARMREST' };
}

/**
 * グリップ／プッシュハンドル（固定式・スライド式）のいずれか1つのみ選択する setter
 */
export function createSetGripOrPush(setSelectedOptions, gripOpt, pushFixed, pushSlide) {
  return (v) => {
    setSelectedOptions(prev => {
      let n = (prev || []).filter(o => o && o.id !== 'opt_grip' && o.id !== 'opt_push_fixed' && o.id !== 'opt_push_slide');
      if (v === 'opt_grip' && gripOpt) n.push(gripOpt);
      if (v === 'opt_push_fixed' && pushFixed) n.push(pushFixed);
      if (v === 'opt_push_slide' && pushSlide) n.push(pushSlide);
      return n;
    });
  };
}

/**
 * キッズ専用オプション用の setPush ハンドラを生成
 */
export function createSetPush(setSelectedOptions, pushFixed, pushSlide) {
  return (v) => {
    setSelectedOptions(prev => {
      let n = (prev || []).filter(o => o && o.id !== 'opt_push_fixed' && o.id !== 'opt_push_slide');
      if (v === 'opt_push_fixed' && pushFixed) n.push(pushFixed);
      if (v === 'opt_push_slide' && pushSlide) n.push(pushSlide);
      return n;
    });
  };
}

/**
 * キッズ専用オプション用の setWheelie ハンドラを生成
 */
export function createSetWheelie(setSelectedOptions, wheelieFixed, wheelieFold) {
  return (v) => {
    setSelectedOptions(prev => {
      let n = (prev || []).filter(o => o && o.id !== 'opt_wheelie' && o.id !== 'opt_wheelie_fixed' && o.id !== 'opt_wheelie_fold');
      if (v === 'opt_wheelie_fixed' && wheelieFixed) n.push(wheelieFixed);
      if (v === 'opt_wheelie_fold' && wheelieFold) n.push(wheelieFold);
      return n;
    });
  };
}

/**
 * キッズ専用オプション用の setFender ハンドラを生成
 */
export function createSetFender(setSelectedOptions, fenderS, fenderL) {
  return (v) => {
    setSelectedOptions(prev => {
      let n = (prev || []).filter(o => o && o.id !== 'opt_fender_s' && o.id !== 'opt_fender_l');
      if (v === 'opt_fender_s' && fenderS) n.push(fenderS);
      if (v === 'opt_fender_l' && fenderL) n.push(fenderL);
      return n;
    });
  };
}

/**
 * キッズ専用オプション用の setCushionTbl ハンドラを生成
 */
export function createSetCushionTbl(setSelectedOptions, cushionWhite, cushionBlue, cushionPink) {
  return (v) => {
    setSelectedOptions(prev => {
      let n = (prev || []).filter(o => o && o.id !== 'opt_cushion_tbl_white' && o.id !== 'opt_cushion_tbl_blue' && o.id !== 'opt_cushion_tbl_pink');
      if (v === 'opt_cushion_tbl_white' && cushionWhite) n.push(cushionWhite);
      if (v === 'opt_cushion_tbl_blue' && cushionBlue) n.push(cushionBlue);
      if (v === 'opt_cushion_tbl_pink' && cushionPink) n.push(cushionPink);
      return n;
    });
  };
}
