/**
 * 4. 専用オプション セクションの React コンポーネント
 * アームレストUI・キッズドロップダウン・オプショングリッド
 * （import で読み込まれるため JSX は使わず React.createElement で記述）
 */
const React = window.React;

function el(tag, props, ...children) {
  return React.createElement(tag, props, ...children);
}

export function SpecialOptionsSection({
  SettingsIcon,
  armrestConfig,
  armrestSel,
  setArmrestSel,
  showMissingRequired,
  selectedSeries,
  selections,
  catalogVariant,
  currentCatalog,
  selectedOptions,
  setSelectedOptions,
  dimensions,
  itemPriceWithPackage,
  getPrice,
  yen,
  toggleItem,
  optionsForGrid,
  setPush,
  setWheelie,
  setFender,
  setCushionTbl,
  setGripOrPush,
}) {
  const isSchoolBase = (selectedSeries === 'MINI_NEO_KIDS' && (selections.baseModel?.id === 'kids_school' || selections.baseModel?.id === 'kids_school_less')) || (selectedSeries === 'MINI_NEO_JUNIOR' && (selections.baseModel?.id === 'jr_school' || selections.baseModel?.id === 'jr_school_less'));
  const isArmrestNoOption = !(selectedSeries === 'NEO' || selectedSeries === 'GWE' || selectedSeries === 'COTON' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base') || (catalogVariant === 'kids' && (isSchoolBase || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR' || selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR')));
  const isArmStandardLabel = (selectedSeries === 'NEO' || selectedSeries === 'GWE' || selectedSeries === 'COTON' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base') || (catalogVariant === 'kids' && (isSchoolBase || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR' || selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR')));
  const isFlipStandardLabel = (selectedSeries === 'NEO' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base') || (catalogVariant === 'kids' && ['MINI_NEO_KIDS', 'MINI_NEO_JUNIOR', 'MINI_NEO_A_KIDS', 'MINI_NEO_A_JUNIOR'].includes(selectedSeries)));

  const armrestSingleHeight = !!armrestConfig.armrestSingleHeight;
  const armrestBorderClass = (showMissingRequired.includes('アームレスト（高低・高さ）') || showMissingRequired.includes('アームレスト高') || showMissingRequired.includes('アームレスト長')) ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200';
  const armrestGridClass = 'border-2 rounded-2xl p-5 mb-6 grid grid-cols-1 md:grid-cols-3 gap-3 ' + armrestBorderClass + (armrestConfig.armrestLengths?.length ? ' md:grid-cols-4' : '');
  const group = armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip;
  const ahOptions = armrestSingleHeight ? null : (armrestSel.lh === 'ロー' ? (armrestSel.kind === 'arm' ? group?.low : armrestConfig.flip?.low) : armrestSel.lh === 'ミディアム' ? (armrestSel.kind === 'arm' ? group?.mid : armrestConfig.flip?.mid) : (armrestSel.kind === 'arm' ? group?.high : armrestConfig.flip?.high));
  const ahList = armrestSingleHeight ? (armrestConfig.arm?.single?.ah || []) : (ahOptions?.ah || []);

  // uiRules によるドロップダウン（ミニネオトドラー: グリップ/プッシュ・フェンダー）
  let uiRulesBlock = null;
  const uiGroups = currentCatalog?.uiRules?.optionDropdownGroups || [];
  if (uiGroups.length && setGripOrPush && setFender) {
    const opts = currentCatalog.options || [];
    const gripOrPushGroup = uiGroups.find(g => g.key === 'gripOrPush');
    const fenderGroup = uiGroups.find(g => g.key === 'fender');
    const gripOpt = gripOrPushGroup ? opts.find(o => o.id === 'opt_grip') : null;
    const pushFixed = gripOrPushGroup ? opts.find(o => o.id === 'opt_push_fixed') : null;
    const pushSlide = gripOrPushGroup ? opts.find(o => o.id === 'opt_push_slide') : null;
    const fenderS = fenderGroup ? opts.find(o => o.id === 'opt_fender_s') : null;
    const fenderL = fenderGroup ? opts.find(o => o.id === 'opt_fender_l') : null;
    const priceStr = (opt) => { if (!opt) return ''; const p = (opt.priceKey && getPrice(opt.priceKey)) ?? opt.price; return p == null ? '' : (p === 0 ? '込' : '+' + yen(p)); };
    const gripOrPushVal = (selectedOptions || []).find(o => o?.id === 'opt_grip') ? 'opt_grip' : (selectedOptions.find(o => o?.id === 'opt_push_fixed') ? 'opt_push_fixed' : (selectedOptions.find(o => o?.id === 'opt_push_slide') ? 'opt_push_slide' : ''));
    const fenderVal = (selectedOptions || []).find(o => o?.id === 'opt_fender_s') ? 'opt_fender_s' : (selectedOptions.find(o => o?.id === 'opt_fender_l') ? 'opt_fender_l' : '');
    const parts = [];
    if (gripOrPushGroup && (gripOpt || pushFixed || pushSlide)) {
      parts.push(el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, gripOrPushGroup.label || 'グリップ・プッシュハンドル'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: gripOrPushVal,
          onChange: e => setGripOrPush(e.target.value)
        },
          el('option', { value: '' }, 'なし'),
          gripOpt && el('option', { value: 'opt_grip' }, gripOpt.name + ' ' + priceStr(gripOpt)),
          pushFixed && el('option', { value: 'opt_push_fixed' }, pushFixed.name + ' ' + priceStr(pushFixed)),
          pushSlide && el('option', { value: 'opt_push_slide' }, pushSlide.name + ' ' + priceStr(pushSlide))
        )
      ));
    }
    if (fenderGroup && (fenderS || fenderL)) {
      parts.push(el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, fenderGroup.label || '樹脂製フェンダー'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: fenderVal,
          onChange: e => setFender(e.target.value)
        },
          el('option', { value: '' }, 'なし'),
          fenderS && el('option', { value: 'opt_fender_s' }, (fenderS.name || '小') + ' ' + priceStr(fenderS)),
          fenderL && el('option', { value: 'opt_fender_l' }, (fenderL.name || '大') + ' ' + priceStr(fenderL))
        )
      ));
    }
    if (parts.length) uiRulesBlock = el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200' }, ...parts);
  }

  let aKidsBlock = null;
  if ((selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR') && setWheelie && setCushionTbl) {
    const opts = currentCatalog.options || [];
    const wheelieFixed = opts.find(o => o.id === 'opt_wheelie_fixed');
    const wheelieFold = opts.find(o => o.id === 'opt_wheelie_fold');
    const cushionWhite = opts.find(o => o.id === 'opt_cushion_tbl_white');
    const cushionBlue = opts.find(o => o.id === 'opt_cushion_tbl_blue');
    const cushionPink = opts.find(o => o.id === 'opt_cushion_tbl_pink');
    const wheelieVal = selectedOptions.find(o => o?.id === 'opt_wheelie_fixed') ? 'opt_wheelie_fixed' : (selectedOptions.find(o => o?.id === 'opt_wheelie_fold') ? 'opt_wheelie_fold' : '');
    const cushionVal = selectedOptions.find(o => o?.id === 'opt_cushion_tbl_white') ? 'opt_cushion_tbl_white' : (selectedOptions.find(o => o?.id === 'opt_cushion_tbl_blue') ? 'opt_cushion_tbl_blue' : (selectedOptions.find(o => o?.id === 'opt_cushion_tbl_pink') ? 'opt_cushion_tbl_pink' : ''));
    const priceStr = (opt) => { if (!opt) return ''; const p = (opt.priceKey && getPrice(opt.priceKey)) ?? opt.price; return p == null ? '' : (p === 0 ? '込' : '+' + yen(p)); };
    aKidsBlock = el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200' },
      el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, 'ウイリーバー'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: wheelieVal,
          onChange: e => setWheelie(e.target.value)
        },
          el('option', { value: '' }, 'なし'),
          wheelieFixed && el('option', { value: 'opt_wheelie_fixed' }, '固定式 ' + priceStr(wheelieFixed)),
          wheelieFold && el('option', { value: 'opt_wheelie_fold' }, '折りたたみ式 ' + priceStr(wheelieFold))
        ),
        el('p', { className: 'text-[10px] text-amber-600 font-bold mt-1' }, 'フットブレーキは固定式のウイリーバーを選択時のみ選択できます。')
      ),
      el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, 'クッションテーブル'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: cushionVal,
          onChange: e => setCushionTbl(e.target.value)
        },
          el('option', { value: '' }, 'なし'),
          cushionWhite && el('option', { value: 'opt_cushion_tbl_white' }, 'ホワイト No.1 ' + priceStr(cushionWhite)),
          cushionBlue && el('option', { value: 'opt_cushion_tbl_blue' }, 'ブルー No.2 ' + priceStr(cushionBlue)),
          cushionPink && el('option', { value: 'opt_cushion_tbl_pink' }, 'ピンク No.3 ' + priceStr(cushionPink))
        )
      )
    );
  }

  let kidsBlock = null;
  if ((selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR') && setPush && setWheelie && setFender && setCushionTbl) {
    const opts = currentCatalog.options || [];
    const pushFixed = opts.find(o => o.id === 'opt_push_fixed');
    const pushSlide = opts.find(o => o.id === 'opt_push_slide');
    const wheelieFixed = opts.find(o => o.id === 'opt_wheelie_fixed');
    const wheelieFold = opts.find(o => o.id === 'opt_wheelie_fold');
    const fenderS = opts.find(o => o.id === 'opt_fender_s');
    const fenderL = opts.find(o => o.id === 'opt_fender_l');
    const pkgId = selections.baseModel?.id;
    const isSchool = pkgId === 'kids_school' || pkgId === 'jr_school' || pkgId === 'kids_school_less' || pkgId === 'jr_school_less';
    const isEnjoy = pkgId === 'kids_enjoy' || pkgId === 'jr_enjoy';
    const hasGrip = (selectedOptions || []).some(o => o && o.id === 'opt_grip');
    const pushVal = selectedOptions.find(o => o?.id === 'opt_push_fixed') ? 'opt_push_fixed' : (selectedOptions.find(o => o?.id === 'opt_push_slide') ? 'opt_push_slide' : '');
    const pushDropdownDisabled = isEnjoy && hasGrip;
    const wheelieVal = selectedOptions.find(o => o?.id === 'opt_wheelie_fixed') ? 'opt_wheelie_fixed' : (selectedOptions.find(o => o?.id === 'opt_wheelie_fold') ? 'opt_wheelie_fold' : '');
    const fenderVal = selectedOptions.find(o => o?.id === 'opt_fender_s') ? 'opt_fender_s' : (selectedOptions.find(o => o?.id === 'opt_fender_l') ? 'opt_fender_l' : '');
    const cushionWhite = opts.find(o => o.id === 'opt_cushion_tbl_white');
    const cushionBlue = opts.find(o => o.id === 'opt_cushion_tbl_blue');
    const cushionPink = opts.find(o => o.id === 'opt_cushion_tbl_pink');
    const cushionVal = selectedOptions.find(o => o?.id === 'opt_cushion_tbl_white') ? 'opt_cushion_tbl_white' : (selectedOptions.find(o => o?.id === 'opt_cushion_tbl_blue') ? 'opt_cushion_tbl_blue' : (selectedOptions.find(o => o?.id === 'opt_cushion_tbl_pink') ? 'opt_cushion_tbl_pink' : ''));
    const priceStr = (opt) => { if (!opt) return ''; const p = itemPriceWithPackage(opt, pkgId); return p == null ? '' : (p === 0 ? '込' : '+' + yen(p)); };
    const cushionPriceStr = (opt) => { if (!opt) return ''; const p = (opt.priceKey && getPrice(opt.priceKey)) ?? opt.price; return p == null ? '' : (p === 0 ? '込' : '+' + yen(p)); };
    kidsBlock = el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200' },
      el('div', { className: pushDropdownDisabled ? 'opacity-90' : '' },
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, 'プッシュハンドル'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-50 disabled:cursor-not-allowed',
          value: pushVal || (isSchool ? 'opt_push_fixed' : ''),
          onChange: e => !pushDropdownDisabled && setPush(e.target.value),
          disabled: pushDropdownDisabled
        },
          !isSchool && el('option', { value: '' }, 'なし'),
          el('option', { value: 'opt_push_fixed' }, isSchool ? '固定式（標準装備）込' : '固定式 ' + priceStr(pushFixed)),
          el('option', { value: 'opt_push_slide' }, 'スライド式 ' + priceStr(pushSlide))
        ),
        pushDropdownDisabled && el('p', { className: 'text-[10px] text-amber-600 font-bold mt-1' }, 'グリップを選択しているため選択できません')
      ),
      el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, 'ウイリーバー'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: wheelieVal,
          onChange: e => setWheelie(e.target.value)
        },
          !isSchool && el('option', { value: '' }, 'なし'),
          el('option', { value: 'opt_wheelie_fixed' }, isSchool ? '固定式（標準装備）込' : '固定式 ' + priceStr(wheelieFixed)),
          el('option', { value: 'opt_wheelie_fold' }, '折りたたみ式 ' + priceStr(wheelieFold))
        )
      ),
      el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, '樹脂製フェンダー'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: fenderVal,
          onChange: e => setFender(e.target.value)
        },
          !isSchool && el('option', { value: '' }, 'なし'),
          el('option', { value: 'opt_fender_s' }, isSchool ? '小（標準装備）込' : '小 ' + priceStr(fenderS)),
          el('option', { value: 'opt_fender_l' }, '大 ' + priceStr(fenderL))
        )
      ),
      el('div', null,
        el('label', { className: 'block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1' }, 'クッションテーブル'),
        el('select', {
          className: 'w-full bg-white border rounded-xl p-3 text-sm font-bold outline-none',
          value: cushionVal,
          onChange: e => setCushionTbl(e.target.value)
        },
          el('option', { value: '' }, 'なし'),
          el('option', { value: 'opt_cushion_tbl_white' }, 'ホワイト No.1 ' + cushionPriceStr(cushionWhite)),
          el('option', { value: 'opt_cushion_tbl_blue' }, 'ブルー No.2 ' + cushionPriceStr(cushionBlue)),
          el('option', { value: 'opt_cushion_tbl_pink' }, 'ピンク No.3 ' + cushionPriceStr(cushionPink))
        )
      )
    );
  }

  const optionButtons = (optionsForGrid || []).map(opt => {
    const pkgId = (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR' || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR') ? selections.baseModel?.id : selections.package?.id;
    const isEnjoy = pkgId === 'kids_enjoy' || pkgId === 'jr_enjoy';
    const hasPush = (selectedOptions || []).some(o => o && (o.id === 'opt_push_fixed' || o.id === 'opt_push_slide'));
    const hasWheelieFixed = (selectedOptions || []).some(o => o && o.id === 'opt_wheelie_fixed');
    const isCamberMinus4 = dimensions.cm === '-4' || dimensions.cm === '-4°';
    const disabledKaidByCamber = opt.id === 'opt_kaid_wheel' && isCamberMinus4;
    const disabledGripByPush = opt.id === 'opt_grip' && isEnjoy && hasPush;
    const disabled = (opt.requirePushWhenEnjoy && isEnjoy && !hasPush) || (opt.requireWheelieFixed && !hasWheelieFixed) || disabledKaidByCamber || disabledGripByPush;
    const dispPrice = itemPriceWithPackage(opt, pkgId);
    const disabledReason = disabledGripByPush ? 'プッシュハンドルを選択しているため選択できません' : (disabledKaidByCamber ? 'キャンバー-4°選択時は選択できません' : (opt.requireWheelieFixed && !hasWheelieFixed ? 'ウイリーバー 固定式を選択すると選択できます' : (opt.requirePushWhenEnjoy && isEnjoy && !hasPush ? 'プッシュハンドルを選択すると選択できます' : null)));
    const btnClass = 'w-full flex justify-between items-center p-5 border rounded-2xl text-left transition-all ' + (disabled ? 'opacity-50 cursor-not-allowed border-slate-200 bg-slate-50' : '') + (selectedOptions.find(o => o.id === opt.id) ? ' border-blue-500 bg-blue-50 ring-2 ring-blue-500' : ' border-slate-100 bg-white hover:border-blue-300');
    return el('div', { key: opt.id, className: disabled ? 'opacity-90' : '' },
      el('button', {
        type: 'button',
        disabled: disabled,
        onClick: () => !disabled && toggleItem(opt, selectedOptions, setSelectedOptions),
        className: btnClass
      },
        el('div', null,
          el('p', { className: 'text-[9px] font-bold text-blue-400 mb-1 tracking-widest uppercase leading-none' }, opt.no),
          el('span', { className: 'text-xs font-black text-slate-700 uppercase leading-none' }, opt.name)
        ),
        el('span', { className: 'text-xs font-mono font-black text-blue-600' }, dispPrice == null ? '未設定' : (dispPrice >= 0 ? '+' : '') + yen(dispPrice))
      ),
      disabled && disabledReason && el('p', { className: 'text-[10px] text-amber-600 font-bold mt-1 px-1' }, disabledReason)
    );
  });

  const showArmrestLengths = armrestConfig.armrestLengths?.length && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR' || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR' || selectedSeries === 'MINI_NEO_E_KIDS' || selectedSeries === 'MINI_NEO_E_JUNIOR');
  const armrestBlock = Object.values(armrestConfig).some(v => v) ? el('div', { className: armrestGridClass, 'data-required-label': armrestSingleHeight ? 'アームレスト高' : 'アームレスト（高低・高さ）' },
    el('select', {
      className: 'bg-white border rounded-xl p-3 text-sm font-bold outline-none',
      value: armrestSel.kind,
      onChange: e => setArmrestSel({ kind: e.target.value, lh: '', ah: '', al: '' })
    },
      isArmrestNoOption && el('option', { value: '' }, 'アームレストなし'),
      armrestConfig.arm && el('option', { value: 'arm' }, 'アームレスト ' + (isArmStandardLabel ? '(標準 込)' : (selectedSeries === 'MINI_NEO_TODDLER' ? '(+¥21,000)' : '(+¥22,000)'))),
      armrestConfig.flip && el('option', { value: 'flip' }, 'はね上げ式 ' + (isFlipStandardLabel ? '(+¥6,000)' : (selectedSeries === 'MINI_NEO_TODDLER' ? '(+¥27,000)' : '(+¥28,000)')))
    ),
    !armrestSingleHeight && el('select', {
      className: 'bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20',
      value: armrestSel.lh,
      disabled: !armrestSel.kind,
      onChange: e => setArmrestSel(s => ({ ...s, lh: e.target.value, ah: '' }))
    },
      el('option', { value: '' }, '-- 高低 --'),
      group?.low && el('option', { value: 'ロー' }, 'ロー'),
      group?.mid && el('option', { value: 'ミディアム' }, 'ミディアム'),
      group?.high && el('option', { value: 'ハイ' }, 'ハイ')
    ),
    el('select', {
      className: 'bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20',
      value: armrestSel.ah,
      disabled: !armrestSel.kind || (!armrestSingleHeight && !armrestSel.lh),
      onChange: e => setArmrestSel(s => ({ ...s, ah: e.target.value }))
    },
      el('option', { value: '' }, armrestSingleHeight ? '-- アームレスト高 (mm) --' : '-- 高さ --'),
      ahList.map(v => el('option', { key: v, value: v }, v + 'mm'))
    ),
    showArmrestLengths && el('div', { 'data-required-label': 'アームレスト長' },
      el('select', {
        className: 'bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20',
        value: armrestSel.al,
        disabled: !armrestSel.kind,
        onChange: e => setArmrestSel(s => ({ ...s, al: e.target.value }))
      },
        el('option', { value: '' }, '-- アームレスト長 --'),
        armrestConfig.armrestLengths.map(al => el('option', { key: al.no, value: al.no }, al.label + ' (' + al.no + ')'))
      )
    )
  ) : null;

  return el('div', { className: 'bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 mb-6 relative font-bold' },
    el('h3', { className: 'text-xl font-black mb-8 flex items-center gap-3 tracking-widest uppercase' },
      React.createElement(SettingsIcon, { size: 24, className: 'text-blue-600' }),
      ' 4. 専用オプション'
    ),
    armrestBlock,
    uiRulesBlock,
    aKidsBlock,
    kidsBlock,
    el('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' }, optionButtons)
  );
}
