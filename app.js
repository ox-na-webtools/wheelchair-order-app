import { calcPrice } from './src/lib/pricing.js';
const { useState, useMemo, useEffect, useCallback } = React;
function Icon({ size = 24, className = '', children }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>;
}
const Settings = (p) => <Icon {...p}><path d="M12 3v2m0 14v2M3 12h2m14 0h2M6.34 6.34l1.42 1.42m9.48 9.48l1.42 1.42M6.34 17.66l-1.42 1.42m9.48-9.48l-1.42 1.42M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></Icon>;
const ChevronRight = (p) => <Icon {...p}><path d="M9 18l6-6-6-6"/></Icon>;
const ShoppingCart = (p) => <Icon {...p}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></Icon>;
const CheckCircle = (p) => <Icon {...p}><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></Icon>;
const FileText = (p) => <Icon {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></Icon>;
const RotateCcw = (p) => <Icon {...p}><path d="M3 12a9 9 0 119 9 9 9 0 01-9-9"/><path d="M3 3v5h5"/></Icon>;
const Info = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></Icon>;
const Truck = (p) => <Icon {...p}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></Icon>;
const Maximize2 = (p) => <Icon {...p}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></Icon>;
const Palette = (p) => <Icon {...p}><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.658-1.658c.473 0 .896.19 1.225.473.27.222.61.403.976.403a1.653 1.653 0 001.649-1.649C22 16.5 17.5 2 12 2z"/></Icon>;
const Ruler = (p) => <Icon {...p}><path d="M21 3L6 18M6 3l15 15M3 9v6M9 3h6M15 21v-6M21 15h-6"/></Icon>;
const AlertTriangle = (p) => <Icon {...p}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></Icon>;
const Package = (p) => <Icon {...p}><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></Icon>;
const Heart = (p) => <Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></Icon>;
const Edit3 = (p) => <Icon {...p}><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></Icon>;
const Circle = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/></Icon>;
const ExternalLink = (p) => <Icon {...p}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14L21 3"/></Icon>;
const User = (p) => <Icon {...p}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
const Store = (p) => <Icon {...p}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></Icon>;
const UserCheck = (p) => <Icon {...p}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8l2 2-4 4-2-2 2-2"/></Icon>;
// カタログ・マスター: catalog.js / catalog-kids.js / price_master_2025.js / data_ui.js で定義
// 価格ロジックは calc.js 側の関数を優先的に利用し、未ロード時のみ従来ロジックにフォールバックする
const getPrice = (key) => {
  if (!key) return 0;
  if (window.calcGetPrice) return window.calcGetPrice(key);
  return key && window.PRICE_MASTER && window.PRICE_MASTER[key] != null
    ? window.PRICE_MASTER[key]
    : 0;
};
const itemPrice = (item) => {
  if (!item) return 0;
  if (window.calcItemPrice) return window.calcItemPrice(item);
  if (item.priceKey) return getPrice(item.priceKey);
  return item.price || 0;
};
const yen = (v) => `¥${(Number(v) || 0).toLocaleString()}`;
// トップページ：オーダー / キッズの分岐
const TopPage = ({ onSelect }) => (
  <div
    className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50"
    style={{
      backgroundImage: 'url("./lucid-origin_clean_white_background_subtle_metallic_diagonal_lines_very_light_gray_gradient_m-0.JPG")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <style>{`
      .top-btn-order:hover { background-color: #1a3172 !important; border-color: #1a3172 !important; }
      .top-btn-kids:hover { background-color: #d88421 !important; border-color: #d88421 !important; }
    `}</style>
    <div className="w-full max-w-md space-y-4 flex flex-col items-center">
      <h1 className="text-center font-black text-xl md:text-2xl text-slate-800 tracking-widest uppercase mb-8 drop-shadow-sm">OX Configurator</h1>
      <button
        type="button"
        onClick={() => onSelect('order')}
        className="top-btn-order w-56 max-w-full py-6 rounded-2xl font-black text-base shadow-xl border-2 transition-all tracking-[0.2em]"
        style={{
          backgroundColor: '#1F3A8A',
          borderColor: 'rgba(31,58,138,0.6)',
          color: '#e8ecf7',
          textShadow: '0 1px 2px rgba(0,0,0,0.25), 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        オーダーカタログ
      </button>
      <button
        type="button"
        onClick={() => onSelect('kids')}
        className="top-btn-kids w-56 max-w-full py-6 rounded-2xl font-black text-base shadow-xl border-2 transition-all tracking-[0.2em]"
        style={{
          backgroundColor: '#f1a254',
          borderColor: '#f1a254',
          color: '#fff8f0',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.27), 0 0 1px rgba(255,255,255,0.08)'
        }}
      >
        キッズカタログ
      </button>
    </div>
  </div>
);
const SelectionGroup = ({ title, items, selectionKey, dynamicNameFn, isInvalid, selections, setSelections }) => (
  <div className={`rounded-2xl shadow-sm overflow-hidden mb-6 border-2 ${isInvalid ? 'border-red-500 bg-red-50' : 'border border-slate-200 bg-white'}`}>
    <div className={`px-5 py-3 border-b flex items-center gap-2 font-bold text-slate-800 tracking-widest uppercase text-xs ${isInvalid ? 'border-red-200 bg-red-100' : 'border-slate-200 bg-slate-50'}`}>{title}</div>
    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
      {(items || []).map(item => (
        <button key={item.id} type="button" onClick={() => setSelections(prev => ({ ...prev, [selectionKey]: item }))} className={`flex flex-col p-3 border rounded-xl text-left transition-all text-sm ${selections[selectionKey]?.id === item.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
          <span className="text-[10px] font-black text-blue-500 uppercase mb-1">{item.no}</span>
          <span className="text-sm font-bold text-slate-700 leading-tight">{dynamicNameFn ? dynamicNameFn(item) : item.name}</span>
          <span className="text-[11px] font-mono font-black text-slate-400 mt-2">{itemPrice(item) === 0 ? "標準" : (itemPrice(item) > 0 ? `+¥${itemPrice(item).toLocaleString()}` : `¥${itemPrice(item).toLocaleString()}`)}</span>
        </button>
      ))}
    </div>
  </div>
);
const App = () => {
  const [catalogVariant, setCatalogVariant] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const catalog = !catalogVariant ? CATALOG : (catalogVariant === 'kids' ? CATALOG_KIDS : CATALOG);
  const accent = !catalogVariant ? ACCENT_ORDER : (catalogVariant === 'kids' ? ACCENT_KIDS : ACCENT_ORDER);
  const [selections, setSelections] = useState({
    baseModel: null,
    package: null,
    axleType: null,
    casterFork: null,
    brake: null,
    footrest: null,
    wheel: null,
    armrest: null,
    wheelSize: '24インチ',
    handrim: null,
    tire: { name:'グレー', no:'No.151' }
  });
  // 顧客情報の初期化
  const [customerInfo, setCustomerInfo] = useState({
    dealerName: '',
    salesPerson: '',
    userName: ''
  });
  const [frameParts, setFrameParts] = useState({ shape: null, length: null, height: null, pipe: null, size: null, type: null });
  const [casterWheelType, setCasterWheelType] = useState(null);
  const [showTotalBreakdown, setShowTotalBreakdown] = useState(false);
  const [casterWheelSize, setCasterWheelSize] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  // 塗装プランの初期化
  const [paint, setPaint] = useState({ 
    type: 'standard', 
    standardColor: '', 
    customColors: ['', '', ''] 
  });
  const [dimensions, setDimensions] = useState({ w1: '', l1: '', offset: '', h4Type: '', h4Val: '', sb: '', l8: '', cm: '', lever: '', w2: '', casterWheel: '', h2: '', h3: '' });
  const [remarks, setRemarks] = useState('');
  const [gweUnitDetail, setGweUnitDetail] = useState({ unitId: '', parts: {} });
  const [armrestSel, setArmrestSel] = useState({ kind: '', lh: '', ah: '', al: '' });
  const currentCatalog = useMemo(() => selectedSeries && catalog ? catalog[selectedSeries] : null, [selectedSeries, catalog]);
  const getWheelNo = useCallback((wheel, size) => {
    if (!wheel) return '---';
    const isSpecialSeries = ['MX_MR', 'NEO', 'GWE', 'LX_LR', 'FX_FR'].includes(selectedSeries);
    if (isSpecialSeries) return wheel.no;
    const master = WHEEL_NO_MASTER[wheel.id];
    if (master && master[size]) return master[size];
    return wheel.no;
  }, [selectedSeries]);
  const l8Options = useMemo(() => {
    if (!currentCatalog) return [70, 50, 30];
    if (['SX_SR', 'LX_LR', 'FX_FR'].includes(selectedSeries)) {
      const h = frameParts.height?.label ?? frameParts.height ?? '';
      if (String(h).includes('フラット')) {
        if (selectedSeries === 'SX_SR') {
          if (selections.axleType?.id === 'axle_a') return [50, 30, 10];
          if (selections.axleType?.id === 'axle_b') return [40, 20];
        } else {
          return [50, 30, 10];
        }
      } else if (['LX_LR', 'FX_FR'].includes(selectedSeries)) {
        return [70, 50, 30];
      }
    }
    if (selectedSeries === 'Fusion' && currentCatalog.dimensionRules?.l8Map) {
      const hLabel = frameParts.height?.label || 'レギュラー';
      return currentCatalog.dimensionRules.l8Map[hLabel] || [];
    }
    const rules = currentCatalog.dimensionRules;
    // キャンバー-4°選択時は車軸前後位置は3か所のみ。オフセットで0→-20→-40のシフト
    if (rules?.l8MapCamberMinus4 && (dimensions.cm === '-4' || dimensions.cm === '-4°')) {
      let list = rules.l8MapCamberMinus4[dimensions.offset] || [];
      if (catalogVariant === 'kids' && list.length > 2) {
        const hasRestrict = (selectedOptions || []).some(o => o && (o.id === 'opt_wheelie' || o.id === 'opt_kaid_wheel'));
        if (hasRestrict) list = list.slice(1, -1);
      }
      return list;
    }
    if (rules?.l8Map) {
      let list = rules.l8Map[dimensions.offset] || [];
      if (catalogVariant === 'kids' && list.length > 2) {
        const hasRestrict = (selectedOptions || []).some(o => o && (o.id === 'opt_wheelie' || o.id === 'opt_kaid_wheel'));
        if (hasRestrict) list = list.slice(1, -1);
      }
      return list;
    }
    return rules?.l8 || selections.axleType?.l8 || [70, 50, 30];
  }, [currentCatalog, selectedSeries, frameParts.height, selections.axleType, dimensions.offset, dimensions.cm, catalogVariant, selectedOptions]);
  useEffect(() => {
    if (!['LX_LR', 'FX_FR'].includes(selectedSeries) || !selections.axleType) return;
    const h = frameParts.height?.label || 'レギュラー';
    const val = h.includes('フラット') ? selections.axleType.valFlat : selections.axleType.valReg;
    if (val !== undefined && String(dimensions.l8) !== String(val)) {
      setDimensions(prev => ({ ...prev, l8: String(val) }));
    }
  }, [selections.axleType, frameParts.height, selectedSeries]);
  useEffect(() => {
    if (l8Options.length === 1) return;
    if (l8Options.length > 1 && dimensions.l8 !== '') {
      const optionStrings = l8Options.map(String);
      if (!optionStrings.includes(String(dimensions.l8))) {
        setDimensions(prev => ({ ...prev, l8: '' }));
      }
    }
  }, [l8Options, dimensions.l8]);
  useEffect(() => {
    if (selectedSeries !== 'GWE' || !frameParts.height) return;
    const h = frameParts.height?.label ?? frameParts.height ?? '';
    const nextOffset = String(h).includes('フラット') ? '-20' : '0';
    setDimensions(d => (d.offset === nextOffset ? d : { ...d, offset: nextOffset }));
  }, [selectedSeries, frameParts.height]);
  const availableTires = useMemo(() => {
    if (!currentCatalog?.tireBrand) return [];
    const brand = TIRE_COLOR_MASTER[currentCatalog.tireBrand];
    const size = selections.wheelSize;
    // キッズカタログはタイヤカラー選択なし・グレーのみ表示
    if (catalogVariant === 'kids') return [brand.default(size)];
    if (size === '24インチ' && brand[size]) return brand[size];
    return [brand.default(size)];
  }, [currentCatalog, selections.wheelSize, catalogVariant]);
  useEffect(() => {
    if (!currentCatalog?.tireBrand) return;
    const tires = availableTires;
    const exists = tires.find(t => t.name === selections.tire?.name);
    if (!exists) setSelections(prev => ({ ...prev, tire: tires[0] }));
  }, [selections.wheelSize, availableTires, currentCatalog]);
  const seriesCasterData = useMemo(() => {
    const isMxNeo = selectedSeries === 'MX_MR' || selectedSeries === 'NEO';
    return CASTER_WHEEL_DATA
      .filter(cw => {
        if (isMxNeo && cw.type === 'WCR5 (アルミコア)') return false;
        if (selectedSeries === 'NEO' && cw.type === 'LPC3 (アルミコア)') return false;
        if (selectedSeries === 'LX_LR' && cw.type === 'ワイドキャスター') return false;
        return true;
      })
      .map(cw => {
        if (!isMxNeo) return cw;
        if (cw.type === '樹脂コア') return { ...cw, priceKey: 'caster_mxneo.resin' };
        if (cw.type === 'LPC3 (アルミコア)') return { ...cw, priceKey: 'caster_mxneo.lpc3' };
        if (cw.type === 'ワイドキャスター') return { ...cw, priceKey: 'caster_mxneo.wide' };
        return cw;
      });
  }, [selectedSeries]);
  const camberOptions = useMemo(() => {
    if (selections.axleType?.id === 'axle_b') return ['0°'];
    return currentCatalog?.dimensionRules?.camber || ['0°'];
  }, [selections.axleType, currentCatalog]);
  const armrestConfig = useMemo(() => {
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
      const isKidsOrJrSchool = (selectedSeries === 'MINI_NEO_KIDS' && selections.baseModel?.id === 'kids_school') || (selectedSeries === 'MINI_NEO_JUNIOR' && selections.baseModel?.id === 'jr_school');
      const isAKidsOrAJr = selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR';
      const isKidsOrJr = selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR';
      armBase = (isKidsOrJrSchool || isAKidsOrAJr || isKidsOrJr) ? findById('opt_arm_std') : null;
      flipBase = findById('opt_flip_arm');
    } else {
      armBase = (selectedSeries === 'MX_MR') ? (selections.baseModel?.id === 'mr_base' ? findById('opt_arm_mr') : null) || findById('opt_arm') || findByNameIncludes('アームレスト') : findById('opt_arm') || findById('opt_arm_ln') || findByNameIncludes('アームレスト');
      flipBase = findById('opt_flip') || findByNameIncludes('はね上げ式アームレスト');
    }
    const buildFromCombined = (obj, baseName) => {
      if (!obj) return null;
      const m = (obj.no || '').split('/');
      const no = { low: m[0]?.trim() || obj.no, high: m[1]?.trim() || obj.no };
      const hLabel = frameParts?.height?.label ?? frameParts?.height ?? '';
      const hs = String(hLabel);
      const hk = hs.includes('フラット') ? 'フラット' : hs.includes('ハイ') ? 'ハイ' : 'レギュラー';
      const lowAh = (obj.ahLowByHeight && obj.ahLowByHeight[hk]) || (Array.isArray(obj.ahLow) ? obj.ahLow : (Array.isArray(obj.ah) ? obj.ah : []));
      const highAh = (obj.ahHighByHeight && obj.ahHighByHeight[hk]) || (Array.isArray(obj.ahHigh) ? obj.ahHigh : (Array.isArray(obj.ah) ? obj.ah : []));
      return {
        low:  { id: `${obj.id}__low__armgrp`,  baseId: obj.id, name: `${baseName} ロー`,  no: no.low,  price: obj.price || 0, ah: lowAh },
        high: { id: `${obj.id}__high__armgrp`, baseId: obj.id, name: `${baseName} ハイ`, no: no.high, price: obj.price || 0, ah: highAh },
      };
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
  }, [currentCatalog, frameParts.height, selectedSeries, selections.baseModel?.id, catalogVariant]);
  const upsertArmrestOption = useCallback((next) => {
    setSelectedOptions(prev => {
      const removed = prev.filter(o => !(o && o.__group === 'ARMREST'));
      return next ? [...removed, next] : removed;
    });
  }, []);
  useEffect(() => {
    if (!armrestSel.kind || !armrestSel.lh || !armrestSel.ah) { upsertArmrestOption(null); return; }
    const needsAl = armrestConfig.armrestLengths?.length && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR');
    if (needsAl && !armrestSel.al) { upsertArmrestOption(null); return; }
    const group = armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip;
    const base = armrestSel.lh === 'ロー' ? group?.low : armrestSel.lh === 'ミディアム' ? group?.mid : group?.high;
    if (!base) { upsertArmrestOption(null); return; }
    let calculatedPrice = base.price || 0;
    const isStandardZeroSeries = (selectedSeries === 'NEO' || selectedSeries === 'GWE' || selectedSeries === 'COTON' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base'));
    const isKidsArmrestSeries = catalogVariant === 'kids' && ['MINI_NEO_KIDS', 'MINI_NEO_JUNIOR', 'MINI_NEO_A_KIDS', 'MINI_NEO_A_JUNIOR'].includes(selectedSeries);
    if (isStandardZeroSeries) {
      calculatedPrice = (selectedSeries === 'COTON' || armrestSel.kind === 'arm') ? 0 : 6000;
    } else if (isKidsArmrestSeries) {
      const isKidsOrJrSchool = (selectedSeries === 'MINI_NEO_KIDS' && selections.baseModel?.id === 'kids_school') || (selectedSeries === 'MINI_NEO_JUNIOR' && selections.baseModel?.id === 'jr_school');
      calculatedPrice = armrestSel.kind === 'arm' ? (isKidsOrJrSchool ? 0 : 22000) : 6000;
    } else if (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mr_base') {
      calculatedPrice = armrestSel.kind === 'arm' ? 22000 : 28000;
    }
    let note = `アームレスト高 ${armrestSel.ah}mm`;
    if (needsAl && armrestSel.al) {
      const alObj = armrestConfig.armrestLengths.find(a => a.no === armrestSel.al || a.label === armrestSel.al);
      if (alObj) note += ` / AL: ${alObj.label} (${alObj.no})`;
    }
    upsertArmrestOption({ id: `${base.id}__${armrestSel.ah}${armrestSel.al ? `_al_${armrestSel.al}` : ''}`, name: base.name, no: base.no, price: calculatedPrice, note, __group: 'ARMREST' });
  }, [armrestSel, armrestConfig, upsertArmrestOption, selectedSeries, selections.baseModel, catalogVariant]);
  // COTON / ミニネオAキッズ・エージュニア: アームレスト標準のため最初から「アームレスト」を選択状態にする
  // ミニネオキッズ・ジュニア スクール: 標準アーム＋高低を同時にセット（高低だけ遅れると高さが選べない不具合を防ぐ）
  useEffect(() => {
    if (selectedSeries === 'COTON' && armrestConfig.arm && !armrestSel.kind) {
      setArmrestSel(s => ({ ...s, kind: 'arm' }));
    } else if (catalogVariant === 'kids' && (selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR') && armrestConfig.arm && !armrestSel.kind) {
      setArmrestSel(s => ({ ...s, kind: 'arm' }));
    } else if (catalogVariant === 'kids' && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR') && (selections.baseModel?.id === 'kids_school' || selections.baseModel?.id === 'jr_school') && armrestConfig.arm && !armrestSel.kind) {
      const lh = selectedSeries === 'MINI_NEO_KIDS' ? 'ロー' : 'ハイ';
      setArmrestSel({ kind: 'arm', lh, ah: '', al: '' });
    }
  }, [selectedSeries, armrestConfig.arm, armrestSel.kind, catalogVariant, selections.baseModel?.id]);
  // ミニネオキッズ・ジュニア: 高低選択未設定時はデフォルトで キッズ→ロー / ジュニア→ハイ をセット。スクールは上記で同時セット済み
  useEffect(() => {
    if (catalogVariant !== 'kids' || !armrestSel.kind) return;
    const isSchool = selections.baseModel?.id === 'kids_school' || selections.baseModel?.id === 'jr_school';
    if (isSchool && armrestSel.kind === 'arm') return; // スクール標準は上記で lh 済み
    const group = armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip;
    if (selectedSeries === 'MINI_NEO_KIDS' && (group?.low || group?.high) && !armrestSel.lh) setArmrestSel(s => ({ ...s, lh: 'ロー' }));
    if (selectedSeries === 'MINI_NEO_JUNIOR' && (group?.low || group?.high) && !armrestSel.lh) setArmrestSel(s => ({ ...s, lh: 'ハイ' }));
  }, [catalogVariant, selectedSeries, armrestConfig.arm, armrestConfig.flip, armrestSel.kind, armrestSel.lh, selections.baseModel?.id]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(null);
  const [showFullResetConfirm, setShowFullResetConfirm] = useState(false);
  const derivedFrameNo = useMemo(() => {
    if (!currentCatalog) return null;
    if (['ZZR', 'LX_LR', 'FX_FR', 'NEO'].includes(selectedSeries)) {
      const t = frameParts.type?.no || '';
      const s = frameParts.shape?.no || '';
      const l = frameParts.length?.no || '';
      const h = frameParts.height?.no || '';
      const p = frameParts.pipe?.no || '';
      return [t, s, l, h, p].filter(Boolean).join(' ');
    }
    if (!currentCatalog.frameMap) return null;
    const parts = [frameParts.shape?.label, frameParts.length?.label, frameParts.height?.label, frameParts.pipe?.label].filter(Boolean);
    return currentCatalog.frameMap[parts.join('-')] || "No.なし";
  }, [currentCatalog, frameParts, selectedSeries]);
  const derivedBackAngle = useMemo(() => {
    if (!selectedSeries) return null;
    const rule = BACK_ANGLE_RULES[selectedSeries];
    if (!rule) return null;
    return rule(frameParts);
  }, [selectedSeries, frameParts]);
  const derivedBackAngleValue = useMemo(() => {
    if (!derivedBackAngle) return '';
    return String(derivedBackAngle).replace('°', '');
  }, [derivedBackAngle]);
  useEffect(() => {
    if (!derivedBackAngleValue) return;
    const lockSbSeries = new Set(['GWX3','MX_MR','GWE', 'LX_LR', 'FX_FR', 'SX_SR']);
    if (!lockSbSeries.has(selectedSeries)) return;
    setDimensions(d => (d.sb === derivedBackAngleValue ? d : { ...d, sb: derivedBackAngleValue }));
  }, [derivedBackAngleValue, selectedSeries]);
  // 寸法ごとの選択肢（選択肢が1つのときはその値を自動表示するため）
  // ホリゾンタルブレーキ選択中かどうか
  const isHorizontalBrake = useMemo(() => {
    if (!selections.brake) return false;
    return selections.brake.id?.startsWith('br_h') || (selections.brake.name || '').includes('ホリゾンタル');
  }, [selections.brake]);
  // ホリゾンタルブレーキ選択時: レバー長をリセット
  useEffect(() => {
    if (isHorizontalBrake) {
      setDimensions(d => ({ ...d, lever: '' }));
    }
  }, [isHorizontalBrake]);
  const dimensionOptsMap = useMemo(() => {
    if (!currentCatalog?.dimensionRules) return {};
    const lockSbSeries = new Set(['GWX3', 'MX_MR', 'GWE', 'LX_LR', 'FX_FR', 'SX_SR']);
    const isSbLocked = lockSbSeries.has(selectedSeries) && !!derivedBackAngleValue;
    const sbOpts = isSbLocked ? [derivedBackAngleValue] : (currentCatalog.dimensionRules.sbMap ? (currentCatalog.dimensionRules.sbMap[dimensions.offset] || []) : (currentCatalog.dimensionRules.sb || []));
    let l1Opts = [];
    let w1Opts = currentCatalog.dimensionRules.w1 || [];
    let h4TypeKeys = Object.keys(currentCatalog.dimensionRules.h4 || {});
    let h4ValOpts = (currentCatalog.dimensionRules.h4?.[dimensions.h4Type] || []).map(String);
    if (selectedSeries === 'COTON' && frameParts.size?.label) {
      const sizeLabel = frameParts.size.label;
      l1Opts = (currentCatalog.dimensionRules.l1BySize && currentCatalog.dimensionRules.l1BySize[sizeLabel]) || [];
      w1Opts = (currentCatalog.dimensionRules.w1BySize && currentCatalog.dimensionRules.w1BySize[sizeLabel]) || [];
      h4TypeKeys = [sizeLabel];
      h4ValOpts = (currentCatalog.dimensionRules.h4BySize && currentCatalog.dimensionRules.h4BySize[sizeLabel] || []).map(String);
    } else if (selectedSeries === 'MX_MR' && frameParts.size?.label) {
      l1Opts = frameParts.size.label === 'Sサイズ' ? ['330'] : ['350', '380', '420'];
    } else {
      l1Opts = currentCatalog.dimensionRules.l1Map ? (currentCatalog.dimensionRules.l1Map[dimensions.offset] || []) : (currentCatalog.dimensionRules.l1 || []);
    }
    const casterWheelOpts = (currentCatalog.dimensionRules.casterWheel || []).map(cw => (typeof cw === 'object' && cw?.value != null) ? cw.value : String(cw));
    const h2Opts = (currentCatalog.dimensionRules.h2Map && dimensions.casterWheel) ? (currentCatalog.dimensionRules.h2Map[dimensions.casterWheel] || []).map(String) : [];
    const h3Opts = (currentCatalog.dimensionRules.h3 || []).map(String);
    return {
      offset: (currentCatalog.dimensionRules.offset || []),
      h4Type: h4TypeKeys,
      h4Val: h4ValOpts,
      l8: (l8Options || []).map(String),
      lever: isHorizontalBrake ? [] : (currentCatalog.dimensionRules.lever || []).map(String),
      w1: (w1Opts || []).map(String),
      l1: (l1Opts || []).map(String),
      sb: (sbOpts || []).map(String),
      w2: (currentCatalog.dimensionRules.w2 || []).map(String),
      cm: (camberOptions || []).map(String),
      casterWheel: casterWheelOpts,
      h2: h2Opts,
      h3: h3Opts,
    };
  }, [currentCatalog, selectedSeries, dimensions.offset, dimensions.h4Type, dimensions.casterWheel, frameParts.size, derivedBackAngleValue, l8Options, camberOptions]);
  useEffect(() => {
    setDimensions(prev => {
      let next = { ...prev };
      let changed = false;
      Object.entries(dimensionOptsMap).forEach(([key, opts]) => {
        const arr = Array.isArray(opts) ? opts : [];
        if (arr.length === 1) {
          const single = String(arr[0]);
          if (prev[key] !== single) {
            next[key] = single;
            changed = true;
          }
        }
      });
      return changed ? next : prev;
    });
  }, [dimensionOptsMap]);
  // キャスターホイール径変更時: 前座高が選択肢に含まれなければ先頭値または''にリセット（ミニネオキッズ等）
  useEffect(() => {
    const dr = currentCatalog?.dimensionRules;
    if (!dr?.h2Map || !dimensions.casterWheel) return;
    const h2Opts = (dr.h2Map[dimensions.casterWheel] || []).map(String);
    if (h2Opts.length === 0) return;
    if (dimensions.h2 && !h2Opts.includes(String(dimensions.h2))) {
      setDimensions(prev => ({ ...prev, h2: h2Opts[0] || '' }));
    }
  }, [currentCatalog, dimensions.casterWheel, dimensions.h2]);
  // COTON: フレームサイズ変更時にバックレスト高タイプ(h4Type)をサイズに同期
  useEffect(() => {
    if (selectedSeries !== 'COTON' || !frameParts.size?.label) return;
    const sizeLabel = frameParts.size.label;
    if (dimensions.h4Type !== sizeLabel) {
      const dr = currentCatalog?.dimensionRules;
      const h4Vals = (dr?.h4BySize && dr.h4BySize[sizeLabel]) || [];
      setDimensions(prev => ({
        ...prev,
        h4Type: sizeLabel,
        h4Val: h4Vals.length ? String(h4Vals[0]) : '',
        w1: (dr?.w1BySize && dr.w1BySize[sizeLabel]?.[0]) != null ? String(dr.w1BySize[sizeLabel][0]) : prev.w1,
        l1: (dr?.l1BySize && dr.l1BySize[sizeLabel]?.[0]) != null ? String(dr.l1BySize[sizeLabel][0]) : prev.l1,
      }));
    }
  }, [selectedSeries, frameParts.size?.label]);
  // COTON: 基本構成モデル(S/M)選択時にフレームサイズを連動（フレーム構成でサイズを二重に出さないため）
  useEffect(() => {
    if (selectedSeries !== 'COTON' || !selections.baseModel?.id) return;
    const sizeMap = { coton_s: { label: 'Sサイズ', no: 'S' }, coton_m: { label: 'Mサイズ', no: 'M' } };
    const next = sizeMap[selections.baseModel.id];
    if (next && frameParts.size?.label !== next.label) {
      setFrameParts(p => ({ ...p, size: next }));
    }
  }, [selectedSeries, selections.baseModel?.id]);
  // 確定表示前にチェックする必須項目（オプション・アクセサリー・選択肢1つの寸法は除く）。DIMENSION_LABELS は data_ui.js
  const missingRequiredItems = useMemo(() => {
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
    if (selectedSeries === 'GWE') {
      if (!gweUnitDetail?.unitId) missing.push('電動ユニット（GW-E）');
      else if (GWE_UNIT_DETAIL_MASTER[gweUnitDetail.unitId]?.groups) {
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
      if (HANDRIM_OPTIONS?.length && !selections.handrim) missing.push('ハンドリム');
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
      if (key === 'h2' && !dimensions.casterWheel) return; // キャスター未選択時は h2 は問わない
      if (key === 'h3' && arr.length <= 1) return; // 後座高が選択肢なし or 1つのみの機種は問わない
      const val = dimensions[key];
      if (val === undefined || val === null || String(val).trim() === '') missing.push(DIMENSION_LABELS[key] || key);
    });
    if (armrestSel.kind && (!armrestSel.lh || !armrestSel.ah)) missing.push('アームレスト（高低・高さ）');
    if (armrestSel.kind && armrestConfig.armrestLengths?.length && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR') && !armrestSel.al) missing.push('アームレスト長');
    return missing;
  }, [selectedSeries, currentCatalog, selections, frameParts, dimensionOptsMap, dimensions, casterWheelType, casterWheelSize, gweUnitDetail, armrestSel, catalogVariant, armrestConfig.armrestLengths]);
  const [showMissingRequired, setShowMissingRequired] = useState([]);
  useEffect(() => {
    if (missingRequiredItems.length === 0) setShowMissingRequired([]);
  }, [missingRequiredItems.length]);
  // 車軸名称の動的計算
  const getAxleDisplayName = useCallback((item) => {
    if (!item) return '';
    if (['LX_LR', 'FX_FR'].includes(selectedSeries)) {
      const h = frameParts.height?.label || 'レギュラー';
      const val = h.includes('フラット') ? item.valFlat : item.valReg;
      return `${item.no} ${val}mm`;
    }
    return item.name;
  }, [selectedSeries, frameParts.height]);
  // MX/MR/NEO / キッズカタログ: ハンドリムはアルマイト標準0円・ビニール+5000円、番号なし
  const handrimOptionsForDisplay = useMemo(() => {
    if (selectedSeries === 'MX_MR' || selectedSeries === 'NEO' || catalogVariant === 'kids') {
      return HANDRIM_OPTIONS.map(hr => {
        if (hr.id === 'hr_vinyl') {
          // ビニールコーティングのみ追加料金（マスター参照）
          return { ...hr, no: '', priceKey: 'handrim.vinyl.mxneo_extra' };
        }
        // それ以外は 0 円（priceKey なし）
        return { ...hr, no: '', priceKey: undefined };
      });
    }
    return HANDRIM_OPTIONS;
  }, [selectedSeries, catalogVariant]);
  const handrimResolved = useMemo(() => {
    if (!selections.handrim) return null;
    if (selectedSeries === 'MX_MR' || selectedSeries === 'NEO' || catalogVariant === 'kids') {
      // 表示用に No. を消すだけ。価格は priceKey から算出
      return { ...selections.handrim, no: '' };
    }
    return selections.handrim;
  }, [selections.handrim, selectedSeries, catalogVariant]);
  const { totalAmount, totalLineItems } = useMemo(() => calcPrice({
    catalog: currentCatalog,
    priceMaster: PRICE_MASTER,
    selections,
    dims: {
      selectedSeries,
      frameParts,
      paint,
      gweUnitDetail,
      selectedOptions,
      selectedAccessories,
      casterWheelType,
      casterWheelSize,
      handrimResolved,
      paintPlans: PAINT_PLANS,
      gweUnitDetailMaster: GWE_UNIT_DETAIL_MASTER,
      wheelNoMaster: WHEEL_NO_MASTER,
    },
  }), [currentCatalog, selections, selectedSeries, frameParts, paint, gweUnitDetail, selectedOptions, selectedAccessories, casterWheelType, casterWheelSize, handrimResolved]);
  const performSeriesReset = useCallback((key) => {
    setSelectedSeries(key);
    setSelections({
      baseModel: (key === 'NEO') ? { id: 'neo_fixed', name: 'NEO', no: 'NEO', price: 0 } : null,
      package: null, axleType: null, casterFork: null, brake: null, footrest: null, wheel: null, armrest: null, wheelSize: '24インチ', handrim: null, tire: { name: 'グレー', no: 'No.151' }
    });
    if (key === 'NEO' || key === 'MX_MR' || key === 'GWE') setArmrestSel({ kind: 'arm', lh: 'ロー', ah: '' });
    else setArmrestSel({ kind: '', lh: '', ah: '' });
    setFrameParts({ shape: null, length: null, height: null, pipe: null, size: null, type: null });
    setCasterWheelType(null); setCasterWheelSize(null);
    setSelectedOptions([]); setSelectedAccessories([]);
    setPaint({ type: 'standard', standardColor: '', customColors: ['', '', ''] });
    setIsConfirmed(false); setShowConfirmReset(null); setRemarks(''); setGweUnitDetail({ unitId: '', parts: {} });
    setDimensions({ w1: '', l1: '', offset: '', h4Type: '', h4Val: '', sb: '', l8: '', cm: '', lever: '', w2: '', casterWheel: '', h2: '', h3: '' });
    setShowMissingRequired([]);
  }, []);
  // 全選択クリア（機種選択を含む完全リセット）
  const handleFullReset = useCallback(() => {
    setSelectedSeries(null);
    setSelections({ baseModel: null, package: null, axleType: null, casterFork: null, brake: null, footrest: null, wheel: null, armrest: null, wheelSize: '24インチ', handrim: null, tire: { name: 'グレー', no: 'No.151' } });
    setArmrestSel({ kind: '', lh: '', ah: '' });
    setFrameParts({ shape: null, length: null, height: null, pipe: null, size: null, type: null });
    setCasterWheelType(null); setCasterWheelSize(null);
    setSelectedOptions([]); setSelectedAccessories([]);
    setPaint({ type: 'standard', standardColor: '', customColors: ['', '', ''] });
    setIsConfirmed(false); setShowConfirmReset(null); setRemarks(''); setGweUnitDetail({ unitId: '', parts: {} });
    setDimensions({ w1: '', l1: '', offset: '', h4Type: '', h4Val: '', sb: '', l8: '', cm: '', lever: '', w2: '', casterWheel: '', h2: '', h3: '' });
    setShowMissingRequired([]);
    setCustomerInfo({ dealerName: '', salesPerson: '', userName: '' });
    setShowFullResetConfirm(false);
    window.scrollTo(0, 0);
  }, []);
  const handleSeriesSelect = (key) => {
    if (selectedSeries && selectedSeries !== key) setShowConfirmReset(key);
    else performSeriesReset(key);
  };
  const toggleItem = (item, list, setList) => {
    if (list.find(i => i.id === item.id)) setList(list.filter(i => i.id !== item.id));
    else setList([...list, item]);
  };
  const handleCustomColorChange = (index, val) => {
    const nextColors = [...paint.customColors];
    nextColors[index] = val;
    setPaint({ ...paint, customColors: nextColors });
  };
  // バリデーションチェック
  const isCustomerInfoValid = useMemo(() => {
    return customerInfo.dealerName.trim() !== '' && customerInfo.salesPerson.trim() !== '';
  }, [customerInfo]);
  // PDF作成機能（外部モジュール window.buildPdf を呼び出し）
  const handleDownloadPDF = async () => {
    if (typeof window.buildPdf !== 'function') {
      alert('PDF生成機能が利用できません。ページを再読み込みしてから再度お試しください。');
      return;
    }
    await window.buildPdf({
      selectedSeries,
      customerInfo,
      totalLineItems,
      dimensions,
      currentCatalog,
      selectedOptions,
      selectedAccessories,
      itemPrice,
      remarks,
      totalAmount,
      yen,
    });
  };
  // =====================================================
  // CSV出力機能（転記用MANIFEST）
  // Excel等で開く際に文字化けしないよう UTF-8 BOM付きで出力
  // =====================================================
  const handleDownloadCSV = () => {
    const BOM = "\uFEFF"; // Excel用BOM
    const rows = [];
    // ヘッダー情報
    rows.push(["OX ENGINEERING ORDER MANIFEST"]);
    rows.push(["作成日", new Date().toISOString().split('T')[0]]);
    rows.push([]);
    rows.push(["【顧客・販売店情報】"]);
    rows.push(["販売店名", customerInfo.dealerName || ""]);
    rows.push(["販売店担当者名", customerInfo.salesPerson || ""]);
    rows.push(["ユーザー名", customerInfo.userName || ""]);
    rows.push([]);
    // 基本パーツ構成
    rows.push(["【01. 基本パーツ構成】"]);
    rows.push(["項目", "パーツ名", "記入No.", "加算額"]);
    totalLineItems.forEach(item => {
      const priceStr = item.price === 0 ? "込" : (item.price > 0 ? `+${item.price}` : `${item.price}`);
      rows.push([item.label, item.name, item.no, priceStr]);
    });
    rows.push([]);
    // オプション & アクセサリー（アームレストも含めて出力）
    const extras = [...selectedOptions, ...selectedAccessories];
    if (extras.length > 0) {
      rows.push(["【02. オプション & アクセサリー】"]);
      rows.push(["No.", "品名", "金額"]);
      extras.forEach(opt => {
        const p = itemPrice(opt);
        rows.push([opt.no, opt.name, p >= 0 ? `+${p}` : `${p}`]);
      });
      rows.push([]);
    }
    // 指定寸法一覧
    rows.push(["【03. 指定寸法一覧】"]);
    rows.push(["項目", "値", "単位"]);
    rows.push(["ホイールサイズ", selections.wheelSize || "", ""]);
    const catalogForCsv = catalog && selectedSeries ? catalog[selectedSeries] : null;
    Object.entries(dimensions).forEach(([k, v]) => {
      if (v !== '' && v !== null && v !== undefined) {
        const displayV = (k === 'casterWheel' && catalogForCsv?.dimensionRules?.casterWheel?.length) ? (catalogForCsv.dimensionRules.casterWheel.find(cw => (typeof cw === 'object' ? cw.value : cw) === v)?.label ?? v) : v;
        const unit = k === 'sb' ? '°' : (k === 'casterWheel' ? '' : (isNaN(v) ? '' : 'mm'));
        rows.push([DIMENSION_LABELS[k] || k, displayV, unit]);
      }
    });
    rows.push([]);
    // 合計金額
    rows.push(["【合計金額（概算）】"]);
    rows.push(["合計", totalAmount, "円"]);
    rows.push([]);
    // 備考
    if (remarks) {
      rows.push(["【備考・特記事項】"]);
      rows.push([remarks]);
      rows.push([]);
    }
    // CSV文字列を生成（ダブルクォートでフィールドをエスケープ）
    const csvStr = rows.map(row =>
      row.map(cell => {
        const s = String(cell === undefined || cell === null ? "" : cell);
        return '"' + s.replace(/"/g, '""') + '"';
      }).join(',')
    ).join('\r\n');
    // ファイル名生成
    const today = new Date().toISOString().split('T')[0];
    const seriesName = selectedSeries || "unknown";
    const dealer = (customerInfo.dealerName || "store").replace(/[\\\/:*?\"<>|]/g, "");
    const fileName = `${today}_ox_${seriesName}_${dealer}_manifest.csv`;
    // ダウンロード実行
    const blob = new Blob([BOM + csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };
  // =====================================================
  // 印刷機能（ブラウザのPDF保存に対応・日本語完全サポート）
  // =====================================================
  const handlePrint = () => {
    window.print();
  };
  // =====================================================
  // メール送付機能（MANIFESTの内容をメール本文に変換）
  // =====================================================
  const handleSendEmail = useCallback(() => {
    const date = new Date().toLocaleDateString('ja-JP');
    const series = currentCatalog?.seriesName || selectedSeries || '';
    const dealer = customerInfo.dealer || '';
    const customer = customerInfo.name || '';
    // メール件名
    const subject = encodeURIComponent(
      `【OX注文MANIFEST】${series} / ${dealer} / ${date}`
    );
    // メール本文（主要情報を整形）
    const lines = [
      `OX ENGINEERING ORDER MANIFEST`,
      `作成日: ${date}`,
      ``,
      `【販売店・顧客情報】`,
      `販売店: ${dealer}`,
      `担当者: ${customerInfo.staff || ''}`,
      `顧客名: ${customer}`,
      ``,
      `【構成内容】`,
      `機種: ${series}`,
      ...totalLineItems.map(item =>
        `${item.label}: ${item.name || ''}${item.no ? ' [No.' + item.no + ']' : ''}${item.price ? ' ¥' + item.price.toLocaleString() : (item.price === 0 ? ' 込' : '')}`
      ),
      ``,
      `【指定寸法】`,
      ...Object.entries(dimensions)
        .filter(([, v]) => v)
        .map(([k, v]) => `${DIMENSION_LABELS[k] || k}: ${v}`),
      ``,
      `【合計金額（概算）】`,
      `¥${totalAmount.toLocaleString()}（税別）`,
      ``,
      `【備考】`,
      customerInfo.remarks || '（なし）',
      ``,
      `---`,
      `※本メールはOX Configuratorより自動生成されました。`,
    ];
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }, [currentCatalog, selectedSeries, customerInfo, totalLineItems, dimensions, totalAmount, DIMENSION_LABELS]);
  if (!catalogVariant) return <TopPage onSelect={setCatalogVariant} />;
  return (
    <div id="pdf-area" className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 pb-20">
      {showConfirmReset && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full">
            <AlertTriangle size={32} className="text-amber-600 mx-auto mb-6" />
            <h3 className="text-xl font-black text-center mb-2">構成をリセットしますか？</h3>
            <p className="text-sm text-slate-500 text-center mb-8">機種を変更すると現在の選択内容が消去されます。</p>
            <div className="flex flex-col gap-3">
              <button type="button" onClick={() => performSeriesReset(showConfirmReset)} className="bg-red-500 text-white py-4 rounded-2xl font-black text-sm">リセットして変更</button>
              <button type="button"  onClick={() => setShowConfirmReset(null)} className="bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold text-sm">キャンセル</button>
            </div>
          </div>
        </div>
      )}
      {showTotalBreakdown && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[120] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden my-auto">
            <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
              <h3 className="text-lg font-black tracking-tighter">合計 内訳</h3>
              <button className="text-[10px] font-black bg-white/10 px-4 py-2 rounded-xl" onClick={() => setShowTotalBreakdown(false)}>閉じる</button>
            </div>
            <div className="p-6 max-h-[50vh] overflow-y-auto bg-slate-50/50 border-b">
              <div className="space-y-2">
                {totalLineItems.map((x, i) => (
                  <div key={i} className="flex items-start justify-between border-b border-slate-100 pb-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase">{x.label}</p>
                      <p className="text-sm font-black text-slate-800 tracking-tighter">{x.name}</p>
                    </div>
                    <p className="text-sm font-mono font-black text-slate-700">{x.price === 0 ? '込' : (x.price > 0 ? `+¥${x.price.toLocaleString()}` : `¥${x.price.toLocaleString()}`)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-end justify-between pt-4">
                <p className="text-[10px] font-black text-slate-400 uppercase">Estimated Total</p>
                <p className="text-2xl font-black font-mono text-blue-600">¥{totalAmount.toLocaleString()}</p>
              </div>
            </div>
            {/* 顧客情報入力欄 (モーダル内) */}
            <div className="p-6 bg-white space-y-6">
              <div className="flex items-center gap-2 border-b-2 border-blue-500 pb-2 mb-4">
                <UserCheck size={18} className="text-blue-500" />
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-800">顧客・販売店情報入力</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1.5">
                    <Store size={10} /> 販売店名 <span className="text-red-500 text-[8px]">※必須</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="例: 〇〇福祉用具商事"
                    className={`w-full bg-slate-50 border-2 rounded-xl px-4 py-2.5 text-xs font-bold outline-none transition-all ${customerInfo.dealerName ? 'border-transparent' : 'border-amber-100'}`}
                    value={customerInfo.dealerName}
                    onChange={(e) => setCustomerInfo({...customerInfo, dealerName: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1.5">
                    <User size={10} /> 販売店担当者名 <span className="text-red-500 text-[8px]">※必須</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="例: 山田 太郎"
                    className={`w-full bg-slate-50 border-2 rounded-xl px-4 py-2.5 text-xs font-bold outline-none transition-all ${customerInfo.salesPerson ? 'border-transparent' : 'border-amber-100'}`}
                    value={customerInfo.salesPerson}
                    onChange={(e) => setCustomerInfo({...customerInfo, salesPerson: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1.5">
                    <User size={10} /> ユーザー名（任意）
                  </label>
                  <input 
                    type="text" 
                    placeholder="例: 車椅子 次郎 様"
                    className="w-full bg-slate-50 border-2 border-transparent rounded-xl px-4 py-2.5 text-xs font-bold outline-none transition-all"
                    value={customerInfo.userName}
                    onChange={(e) => setCustomerInfo({...customerInfo, userName: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button 
                  disabled={!isCustomerInfoValid}
                  className={`flex-1 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${isCustomerInfoValid ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                  onClick={() => { 
                    setShowTotalBreakdown(false); 
                    setIsConfirmed(true); 
                    window.scrollTo(0, 0);
                  }}
                >
                  転記用 Manifest 表示 <ChevronRight size={18} />
                </button>
              </div>
              {!isCustomerInfoValid && (
                <p className="text-center text-[10px] font-bold text-amber-600 mt-2">※販売店名と担当者名を入力してください</p>
              )}
            </div>
          </div>
        </div>
      )}
      {/* 全リセット確認モーダル */}
      {showFullResetConfirm && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-xl font-black">全選択をリセットしますか？</h3>
            </div>
            <p className="text-sm text-slate-500 font-bold mb-6">機種・パーツ・寸法・顧客情報を含む<br/>すべての入力内容が消去されます。</p>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={handleFullReset} className="bg-red-500 text-white py-4 rounded-2xl font-black text-sm hover:bg-red-600 transition-all">リセットする</button>
              <button type="button" onClick={() => setShowFullResetConfirm(false)} className="bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all">キャンセル</button>
            </div>
          </div>
        </div>
      )}
      <nav className="bg-slate-900 text-white p-5 fixed top-0 inset-x-0 z-50 shadow-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <div className={`${accent.navIcon} p-2.5 rounded-xl`}><Settings size={20} /></div>
            <div>
              <h1 className="font-black text-base md:text-lg leading-none uppercase tracking-widest">Configurator</h1>
              <p className="text-[9px] opacity-40 uppercase tracking-[0.3em] mt-1 font-bold">2025 v5.9 Stable</p>
            </div>
            <button
              type="button"
              onClick={() => { handleFullReset(); setCatalogVariant(null); }}
              className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl transition-all border border-white/10"
              title="トップページに戻る"
            >
              トップへ
            </button>
          </div>
          <div className="flex items-center gap-6 min-w-0 flex-1 justify-end">
            <div className="flex flex-col text-right min-w-0 shrink-0">
              <span className={`text-[10px] font-bold ${accent.subtotal} uppercase mb-1 leading-none`}>Subtotal</span>
              <span className={`text-lg md:text-2xl font-black font-mono tracking-tighter ${accent.subtotal} leading-none`}>¥{totalAmount.toLocaleString()}</span>
              {showMissingRequired.length > 0 && (
                <span className="text-[9px] text-amber-400 mt-1 leading-none">未選択の項目があります</span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* 確認ボタン: 右下に常時固定（スマホで押しやすく「確認」のみ表示） */}
      {!isConfirmed && (
        <div
          className="fixed bottom-0 right-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))] flex items-center gap-2"
          aria-label="確認・リセット"
        >
          {/* 全リセットボタン */}
          <button
            disabled={!selectedSeries}
            onClick={() => setShowFullResetConfirm(true)}
            className="bg-white text-slate-600 border-2 border-slate-200 px-5 py-4 rounded-2xl font-black text-sm shadow-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            title="全選択をリセット"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 119 9 9 9 0 01-9-9"/><path d="M3 3v5h5"/></svg>
            リセット
          </button>
          {/* 確認ボタン */}
          <button
            disabled={!selectedSeries}
            onClick={() => {
              if (missingRequiredItems.length > 0) {
                setShowMissingRequired(missingRequiredItems);
                return;
              }
              setShowMissingRequired([]);
              setShowTotalBreakdown(true);
            }}
            className={`${accent.confirmBtn} text-white px-6 py-4 rounded-2xl font-black text-base shadow-xl disabled:opacity-30 disabled:cursor-not-allowed min-w-[88px] transition-all`}
          >
            確認
          </button>
        </div>
      )}
      <div className="h-[92px]" />
      <main className="max-w-7xl mx-auto p-3 sm:p-4 md:p-8">
        {!isConfirmed ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-6 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full ${accent.sectionBar}`}></div>
                <h2 className="text-xl font-black mb-6 flex items-center gap-3 tracking-widest uppercase leading-none">
                  <Truck size={24} className="text-slate-400" /> 1. 機種シリーズ選択
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.keys(catalog).map(key => (
                    <button key={key} type="button" onClick={() => handleSeriesSelect(key)} className={`p-4 border-2 rounded-2xl transition-all text-left ${selectedSeries === key ? `${accent.sectionBorder} ${accent.sectionBg} ring-1 ${accent.sectionRing}` : 'border-slate-100 bg-white hover:border-blue-300'}`}>
                      <p className={`text-[10px] font-bold mb-1 uppercase tracking-widest ${selectedSeries === key ? accent.sectionIcon : 'text-slate-400'}`}>Model</p>
                      <p className="font-black text-sm md:text-base tracking-tighter uppercase">{catalog[key].title}</p>
                    </button>
                  ))}
                </div>
              </div>
              {currentCatalog && (
                <div className="space-y-4 animate-in">
                  <h2 className="text-xl font-black mb-6 flex items-center gap-3 mt-12 border-b border-slate-200 pb-4 uppercase tracking-widest">
                    <Package size={24} className={accent.sectionIcon} /> 2. 仕様パーツ構成
                  </h2>
                  {selectedSeries !== 'NEO' && <SelectionGroup title="基本構成モデル" items={currentCatalog.baseModels} selectionKey="baseModel" isInvalid={showMissingRequired.includes('基本構成モデル')} selections={selections} setSelections={setSelections} />}
                  {(selectedSeries === 'MX_MR' || selectedSeries === 'NEO') && <SelectionGroup title="パッケージ" items={selectedSeries === 'NEO' ? NEO_PACKAGE_OPTIONS : (selections.baseModel?.id === 'mr_base' ? MR_PACKAGE_OPTIONS : MX_PACKAGE_OPTIONS)} selectionKey="package" isInvalid={showMissingRequired.includes('パッケージ')} selections={selections} setSelections={setSelections} />}
                  {selectedSeries === 'GWE' && (() => {
                    const gweBlockInvalid = showMissingRequired.includes('電動ユニット（GW-E）');
                    return (
                    <div className={`rounded-2xl shadow-sm overflow-hidden mb-6 border-2 ${gweBlockInvalid ? 'border-red-500 bg-red-50' : 'border border-slate-200 bg-white'}`}>
                      <div className={`px-5 py-4 border-b flex items-center justify-between ${gweBlockInvalid ? 'border-red-200 bg-red-100' : 'border-slate-200 bg-slate-50'}`}>
                        <h3 className="font-bold text-slate-800 tracking-widest uppercase text-xs">電動ユニット（GW-E）</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {Object.keys(GWE_UNIT_DETAIL_MASTER).map(uid => (
                            <button type="button"  key={uid} onClick={() => setGweUnitDetail(prev => prev.unitId === uid ? { unitId: '', parts: {} } : { unitId: uid, parts: {} })} className={`p-5 border rounded-2xl text-left transition-all ${gweUnitDetail.unitId === uid ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
                              <p className="text-[10px] font-black text-blue-500 uppercase mb-2 tracking-widest">{GWE_UNIT_DETAIL_MASTER[uid].no}</p>
                              <p className="text-sm font-black text-slate-800 leading-none">{GWE_UNIT_DETAIL_MASTER[uid].name}</p>
                              <p className="text-[11px] font-mono font-black text-slate-400 mt-3">+¥{getPrice(GWE_UNIT_DETAIL_MASTER[uid].basePriceKey).toLocaleString()}</p>
                            </button>
                          ))}
                        </div>
                        {gweUnitDetail.unitId && (
                          <div className="bg-slate-50 border rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {GWE_UNIT_DETAIL_MASTER[gweUnitDetail.unitId].groups.map(g => {
                              const gweGroupInvalid = showMissingRequired.includes(`電動ユニット - ${g.label}`);
                              return (
                              <div key={g.key} className={`rounded-2xl p-4 border-2 ${gweGroupInvalid ? 'border-red-500 bg-red-50' : 'border border-slate-200 bg-white'}`}>
                                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">{g.label}</label>
                                <select className="w-full bg-slate-50 border-2 rounded-xl p-3 text-sm font-black outline-none" value={gweUnitDetail.parts?.[g.key]?.id || ''} onChange={e => {
                                  const choice = g.choices.find(c => c.id === e.target.value);
                                  setGweUnitDetail(prev => ({ ...prev, parts: { ...prev.parts, [g.key]: choice } }));
                                }}>
                                  <option value="">-- 選択 --</option>
                                  {g.choices.map(c => <option key={c.id} value={c.id}>{c.no} {c.name} {c.priceKey ? `(+¥${getPrice(c.priceKey).toLocaleString()})` : ''}</option>)}
                                </select>
                              </div>
                            ); })}
                          </div>
                        )}
                      </div>
                    </div>
                  ); })()}
                  {currentCatalog.frameOptions && (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
                      <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                        <h3 className="font-bold text-slate-800 tracking-widest uppercase text-xs">フレーム構成要素</h3>
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-900 text-white text-[10px] px-3 py-1 rounded-lg font-black font-mono tracking-widest uppercase">{['ZZR', 'LX_LR', 'FX_FR', 'NEO'].includes(selectedSeries) ? "S L H SB" : "CONFIG"}</span>
                          <span className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg font-black font-mono tracking-widest">{derivedFrameNo || '---'}</span>
                        </div>
                      </div>
                      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.keys(currentCatalog.frameOptions).map(cat => {
                          const frameCatLabel = cat === 'type' ? 'フレームタイプ' : cat === 'shape' ? (selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状') : cat === 'length' ? '長さ' : cat === 'height' ? '高さ' : cat === 'size' ? 'サイズ' : cat === 'seat' ? 'シート' : 'フロントパイプ';
                          const frameCatInvalid = showMissingRequired.includes(frameCatLabel);
                          return (
                          <div key={cat} className={`space-y-3 rounded-xl p-3 border-2 ${frameCatInvalid ? 'border-red-500 bg-red-50' : 'border-transparent'}`}>
                            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">
                              {cat === 'type' ? 'フレームタイプ' : cat === 'shape' ? (selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状') : cat === 'length' ? '長さ' : cat === 'height' ? '高さ' : cat === 'size' ? 'サイズ' : cat === 'seat' ? 'シート' : 'フロントパイプ'}
                            </label>
                            <div className="flex flex-col gap-1.5">
                              {(currentCatalog.frameOptions[cat] || []).map(opt => {
                                const optObj = (typeof opt === 'string') ? { label: opt, no: opt } : opt;
                                const price = (optObj.price != null && optObj.price > 0) ? optObj.price : 0;
                                return (
                                  <button type="button"  key={optObj.label} onClick={() => setFrameParts(p => ({ ...p, [cat]: optObj }))} className={`p-4 text-left border rounded-xl text-xs font-bold transition-all ${frameParts[cat]?.label === optObj.label ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 hover:border-blue-300'}`}>
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="text-xs font-black">{optObj.label}</span>
                                      <div className="flex items-center gap-2">
                                        {optObj.no && <span className={`text-[10px] font-mono font-black ${frameParts[cat]?.label === optObj.label ? 'text-white/90' : 'text-slate-400'}`}>{optObj.no}</span>}
                                        {price > 0 && <span className={`text-[10px] font-mono font-black ${frameParts[cat]?.label === optObj.label ? 'text-white/90' : 'text-blue-600'}`}>+¥{price.toLocaleString()}</span>}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ); })}
                      </div>
                    </div>
                  )}
                  {selectedSeries !== 'COTON' && (
                    <>
                  {(catalogVariant !== 'kids') && (
                    <>
                  <SelectionGroup title="車軸タイプ (L8連動)" items={currentCatalog.axleTypes} selectionKey="axleType" dynamicNameFn={getAxleDisplayName} isInvalid={showMissingRequired.includes('車軸タイプ')} selections={selections} setSelections={setSelections} />
                  <SelectionGroup title="キャスターフォーク" items={currentCatalog.casterForks} selectionKey="casterFork" isInvalid={showMissingRequired.includes('キャスターフォーク')} selections={selections} setSelections={setSelections} />
                  </>
                  )}
                  {catalogVariant !== 'kids' && (() => {
                    const casterTypeInvalid = showMissingRequired.includes('キャスターホイール（種類）');
                    const casterSizeInvalid = showMissingRequired.includes('キャスターホイール（サイズ）');
                    const casterBlockInvalid = casterTypeInvalid || casterSizeInvalid;
                    return (
                  <div className={`rounded-2xl shadow-sm overflow-hidden mb-6 border-2 ${casterBlockInvalid ? 'border-red-500 bg-red-50' : 'border border-slate-200 bg-white'}`}>
                    <div className={`px-5 py-3 border-b font-bold text-slate-800 tracking-widest uppercase text-xs ${casterBlockInvalid ? 'border-red-200 bg-red-100' : 'border-slate-200 bg-slate-50'}`}>キャスターホイール</div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={casterTypeInvalid ? 'rounded-xl p-3 border-2 border-red-500 bg-red-50' : ''}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">A. 種類</label>
                        <div className="grid grid-cols-1 gap-2">
                          {seriesCasterData.filter(cw => currentCatalog.hasCushionCaster || cw.type !== 'クッションキャスター').map(cw => (
                            <button type="button"  key={cw.type} onClick={() => { setCasterWheelType(cw); setCasterWheelSize(null); }} className={`p-4 text-left border rounded-xl text-sm font-bold transition-all ${casterWheelType?.type === cw.type ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-600 hover:border-blue-300 shadow-sm'}`}>
                              {cw.type} (+¥{itemPrice(cw).toLocaleString()})
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className={casterSizeInvalid ? 'rounded-xl p-3 border-2 border-red-500 bg-red-50' : ''}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">B. サイズ</label>
                        <select disabled={!casterWheelType} className="w-full bg-slate-50 border-2 rounded-xl p-4 text-sm font-black outline-none disabled:opacity-20 transition-all" value={casterWheelSize?.no || ''} onChange={e => setCasterWheelSize(casterWheelType?.sizes?.find(s => s.no === e.target.value))}>
                          <option value="">-- 選択 --</option>
                          {casterWheelType?.sizes?.map(s => <option key={s.no} value={s.no}>{s.label} ({s.no})</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                  ); })()}
                  {currentCatalog.footrests && <SelectionGroup title="フットレスト" items={currentCatalog.footrests} selectionKey="footrest" isInvalid={showMissingRequired.includes('フットレスト')} selections={selections} setSelections={setSelections} />}
                    </>
                  )}
                  {/* ---- ブレーキ以降のパーツをリセットするボタン ---- */}
                  {(selections.brake?.id || selections.wheel || selections.tire || selections.handrim) && (
                    <div className="flex justify-end mb-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelections(s => ({ ...s, brake: {}, wheel: '', tire: '', handrim: '' }));
                          setDimensions(d => ({ ...d, lever: '', l8: '' }));
                        }}
                        className="text-[11px] text-slate-400 hover:text-red-500 border border-slate-200 hover:border-red-300 bg-white px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 shadow-sm"
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 119 9 9 9 0 01-9-9"/><path d="M3 3v5h5"/></svg>
                        ブレーキ・ホイール選択をリセット
                      </button>
                    </div>
                  )}
                  {selectedSeries !== 'COTON' && currentCatalog.brakes && <SelectionGroup title="ブレーキシステム" items={currentCatalog.brakes} selectionKey="brake" isInvalid={showMissingRequired.includes('ブレーキシステム')} selections={selections} setSelections={setSelections} />}
                  {selectedSeries !== 'GWE' && (currentCatalog.wheels == null || currentCatalog.wheels.length > 0) && (() => {
                    const wheelTypeInvalid = showMissingRequired.includes('メインホイール（種類）');
                    const wheelSizeInvalid = showMissingRequired.includes('メインホイール（サイズ）');
                    const tireInvalid = showMissingRequired.includes('タイヤカラー');
                    const mainWheelBlockInvalid = wheelTypeInvalid || wheelSizeInvalid || tireInvalid;
                    return (
                    <div className={`rounded-2xl shadow-sm overflow-hidden mb-6 border-2 ${mainWheelBlockInvalid ? 'border-red-500 bg-red-50' : 'border border-slate-200 bg-white'}`}>
                      <div className={`px-5 py-3 border-b font-bold text-slate-800 tracking-widest uppercase text-xs ${mainWheelBlockInvalid ? 'border-red-200 bg-red-100' : 'border-slate-200 bg-slate-50'}`}>メインホイール構成</div>
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          {!(selectedSeries === 'MX_MR' || selectedSeries === 'NEO') && (
                            <div className={`mb-6 ${wheelTypeInvalid ? 'rounded-xl p-3 border-2 border-red-500 bg-red-50' : ''}`}>
                              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">A. 種類</label>
                              <div className="grid grid-cols-1 gap-2">
                                {(currentCatalog.wheels || []).map(w => (
                                  <button type="button"  key={w.id} onClick={() => setSelections(prev => ({...prev, wheel: w, wheelSize: (currentCatalog.wheelSizes || WHEEL_SIZE_RULES?.[w.id] || ['24インチ'])[0]}))} className={`p-4 text-left border rounded-xl text-xs font-bold transition-all ${selections.wheel?.id === w.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600 shadow-sm' : 'border-slate-100 bg-white hover:border-blue-300 shadow-sm'}`}>
                                    <span className="text-[9px] block opacity-70 uppercase leading-none mb-1">{getWheelNo(w, selections.wheelSize)}</span>{w.name} (+¥{w.price.toLocaleString()})
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className={`mb-6 ${wheelSizeInvalid ? 'rounded-xl p-3 border-2 border-red-500 bg-red-50' : ''}`}>
                            <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">B. サイズ</label>
                            <select className="w-full bg-slate-50 border-2 rounded-xl p-4 text-sm font-black outline-none transition-all" value={selections.wheelSize} onChange={e => setSelections({...selections, wheelSize: e.target.value})}>
                              { (selectedSeries === 'LX_LR' || selectedSeries === 'FX_FR') ? ['24インチ'].map(v => <option key={v} value={v}>{v}</option>) : (selectedSeries === 'MX_MR' || selectedSeries === 'NEO') ? ['22インチ','23インチ','24インチ','25インチ'].map(v => <option key={v} value={v}>{v}</option>) : (currentCatalog.wheelSizes || WHEEL_SIZE_RULES?.[selections.wheel?.id] || ['--']).map(v => <option key={v} value={v} disabled={currentCatalog.blockSmallWheels && (v==='22インチ' || v==='23インチ')}>{v}</option>) }
                            </select>
                          </div>
                          {currentCatalog?.tireBrand && (
                            <div className={`mb-6 ${tireInvalid ? 'rounded-xl p-3 border-2 border-red-500 bg-red-50' : ''}`}>
                              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">C. タイヤカラー ({currentCatalog.tireBrand})</label>
                              <div className="grid grid-cols-2 gap-2">
                                {availableTires.map(t => (
                                  <button key={t.no} onClick={() => setSelections(prev => ({ ...prev, tire: t }))} className={`flex items-center gap-3 p-3 border rounded-xl transition-all ${selections.tire?.no === t.no ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
                                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300 flex-shrink-0" style={{ backgroundColor: t.colorCode || '#94a3b8' }}></div>
                                    <div className="min-w-0"><p className="text-[11px] font-bold text-slate-800 leading-none truncate">{t.name}</p><p className="text-[9px] font-mono text-slate-400 mt-1">{t.no}</p></div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <SelectionGroup title="ハンドリム" items={handrimOptionsForDisplay} selectionKey="handrim" isInvalid={showMissingRequired.includes('ハンドリム')} selections={selections} setSelections={setSelections} />
                      </div>
                    </div>
                  ); })()}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                    <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 flex items-center gap-2">
                      <Palette size={18} className="text-blue-600" />
                      <h3 className="font-bold text-slate-800 tracking-widest uppercase text-xs">塗装プラン・カラー指定</h3>
                    </div>
                    <div className="p-6">
                      {(selectedSeries === 'ZZR' || selectedSeries === 'FX_FR') && (
                        <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                          {selectedSeries === 'ZZR' && <p className="text-[10px] font-bold text-amber-700">※ＺＺＲでは、カーボンフレームの塗装、特別塗装3色はできません。</p>}
                          {selectedSeries === 'FX_FR' && <p className="text-[10px] font-bold text-amber-700">※ＦＸ、ＦＲにはポッピング色の塗装ができません。</p>}
                        </div>
                      )}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">A. 塗装プラン選択</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {PAINT_PLANS.filter(plan => {
                            if (plan.id === 'mirror' && selectedSeries !== 'ZZR') return false;
                            if (catalogVariant === 'kids' && (plan.id === 'grand' || plan.id === 'splash' || plan.id === 'special_1')) return false;
                            return true;
                          }).map(plan => {
                              const isZzr3Restricted = selectedSeries === 'ZZR' && plan.id === 'special_3';
                              return (
                                <button 
                                  key={plan.id} 
                                  type="button" 
                                  disabled={isZzr3Restricted}
                                  onClick={() => setPaint({ ...paint, type: plan.id })}
                                  className={`p-4 border-2 rounded-xl text-left transition-all ${paint.type === plan.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 bg-white hover:border-blue-200'} ${isZzr3Restricted ? 'opacity-20 cursor-not-allowed' : ''}`}
                                >
                                  <p className="text-[10px] font-bold text-blue-500 mb-1 leading-none uppercase">Plan</p>
                                  <p className="text-xs font-black text-slate-700 leading-tight mb-2">{plan.name}</p>
                                  <p className="text-[11px] font-mono font-black text-slate-400">
                                    {getPrice(plan.priceKey) === 0 ? "標準塗装 (¥0)" : `+¥${getPrice(plan.priceKey).toLocaleString()}`}
                                  </p>
                                </button>
                              );
                            })}
                          </div>
                          {(paint.type === 'special_2' || paint.type === 'special_3') && (
                            <div className="mt-4 p-4 bg-slate-900 rounded-xl space-y-2 border border-blue-500/30 animate-in">
                              <p className="text-[9px] font-bold text-blue-300 leading-relaxed">※ブリリアント色はラメ入りのため、2色以上の塗装はブリリアント同士か、メタリック色との組合せとなります。</p>
                              <p className="text-[9px] font-bold text-blue-300 leading-relaxed">※マットペイントの2色以上の塗装は、マットペイント同士の組合せとなります。</p>
                              <p className="text-[9px] font-bold text-blue-300 leading-relaxed">※キャンディー色、カクテル色、ポッピング色、ミラー色、P-06：パールネオンピンク、P-07：パールネオングリーンは、単色での塗装のみとなります。</p>
                            </div>
                          )}
                        </div>
                        <div className="space-y-6">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">B. カラー指定</label>
                          <div className={`space-y-2 ${paint.type !== 'standard' ? 'opacity-40 cursor-not-allowed' : ''}`}>
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-1">1. 標準塗装色 (ベースカラー)</p>
                            <select 
                              disabled={paint.type !== 'standard'}
                              className="w-full bg-slate-50 border-2 rounded-xl p-4 text-sm font-black outline-none shadow-sm transition-all focus:border-blue-600 disabled:bg-slate-200" 
                              value={paint.standardColor} 
                              onChange={e => setPaint({...paint, standardColor: e.target.value})}
                            >
                              <option value="">選択</option>
                              {(selectedSeries === 'Fusion' 
                                ? FUSION_STANDARD_COLORS 
                                : (selectedSeries === 'NEO' 
                                  ? NEO_STANDARD_COLORS 
                                  : (selectedSeries === 'MX_MR' ? MX_MR_STANDARD_COLORS : STANDARD_COLORS))
                              ).map(c => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-3">
                            <p className="text-[10px] font-black text-blue-600 uppercase mb-1">2. 特別塗装色 / 特殊ペイント カラー指定（最大3色）</p>
                            {[0, 1, 2].map((idx) => (
                              <div key={idx} className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[9px] font-black text-slate-300">{idx + 1}色目</span>
                                <input 
                                  type="text"
                                  placeholder={idx === 0 ? "カラー名や番号を入力" : "(複数色の場合に入力)"}
                                  className="w-full bg-white border-2 border-blue-100 rounded-xl py-4 pl-14 pr-4 text-sm font-black outline-none shadow-sm transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                  value={paint.customColors[idx]}
                                  onChange={e => handleCustomColorChange(idx, e.target.value)}
                                />
                              </div>
                            ))}
                            {/* カラーガイド PDF リンク */}
                            <div className="pt-2">
                              <a 
                                href="https://www.oxgroup.co.jp/wp/wp-content/uploads/2024/12/ColorGuide2025.08_Vol.1_PDF%E7%89%88.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors text-xs font-black"
                              >
                                <ExternalLink size={14} />
                                カラーガイド (PDF) を表示
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-8 mb-6 relative font-bold">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                      <Ruler size={24} className="text-blue-600" />
                      <h3 className="text-xl font-black text-slate-800 tracking-widest uppercase">3. 各機種 詳細寸法指定</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {((selectedSeries === 'NEOplus' || selectedSeries === 'NEO') || (catalogVariant === 'kids' && (currentCatalog.dimensionRules?.offset || []).length > 0)) && (
                        <div className={`space-y-4 p-5 rounded-3xl border-2 shadow-inner ${showMissingRequired.includes('オフセット') ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-blue-100/50'}`}>
                          <label className="block text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest italic">オフセット</label>
                          <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none" value={dimensions.offset} onChange={e => {
                            const val = e.target.value;
                            const rules = currentCatalog.dimensionRules;
                            setDimensions(d => {
                              const next = { ...d, offset: val };
                              if (rules.sbMap) next.sb = (rules.sbMap[val]?.[0] || d.sb).toString();
                              if (rules.l8Map) next.l8 = (rules.l8Map[val]?.[0] || d.l8).toString();
                              if (rules.l1Map) next.l1 = (rules.l1Map[val]?.[0] || d.l1).toString();
                              return next;
                            });
                          }}>
                            <option value="">選択</option>
                            {(currentCatalog.dimensionRules?.offset || []).map(v => <option key={v} value={v}>{v}mm</option>)}
                          </select>
                        </div>
                      )}
                      {((currentCatalog.dimensionRules?.casterWheel || []).length > 0) && (
                        <>
                          <div className={`space-y-4 p-5 rounded-3xl border-2 shadow-inner ${showMissingRequired.includes('D2 キャスターホイール径') ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-blue-100/50'}`}>
                            <label className="block text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest italic">D2 キャスターホイール径</label>
                            <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none" value={dimensions.casterWheel} onChange={e => {
                              const val = e.target.value;
                              const rules = currentCatalog.dimensionRules;
                              setDimensions(d => {
                                const next = { ...d, casterWheel: val };
                                const h2Opts = (rules.h2Map && rules.h2Map[val]) ? rules.h2Map[val].map(String) : [];
                                next.h2 = (h2Opts.length && (!d.h2 || !h2Opts.includes(String(d.h2)))) ? h2Opts[0] : d.h2;
                                return next;
                              });
                            }}>
                              <option value="">選択</option>
                              {(currentCatalog.dimensionRules.casterWheel || []).map(cw => {
                                const v = typeof cw === 'object' ? cw.value : cw;
                                const label = typeof cw === 'object' ? cw.label : cw;
                                return <option key={v} value={v}>{label}</option>;
                              })}
                            </select>
                          </div>
                          <div className={`space-y-4 p-5 rounded-3xl border-2 shadow-inner ${showMissingRequired.includes('H2 前座高') ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-blue-100/50'}`}>
                            <label className="block text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest italic">H2 前座高</label>
                            <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none" value={dimensions.h2} onChange={e => setDimensions(d => ({ ...d, h2: e.target.value }))} disabled={!dimensions.casterWheel}>
                              <option value="">{dimensions.casterWheel ? '選択' : 'キャスター径を先に選択'}</option>
                              {(dimensionOptsMap.h2 || []).map(v => <option key={v} value={v}>{v}mm</option>)}
                            </select>
                          </div>
                        </>
                      )}
                      {((currentCatalog.dimensionRules?.h3 || []).length > 0) && (
                        <div className={`space-y-4 p-5 rounded-3xl border-2 shadow-inner ${showMissingRequired.includes('H3 後座高') ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-blue-100/50'}`}>
                          <label className="block text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest italic">H3 後座高（リアシート高）</label>
                          <select className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold outline-none" value={dimensions.h3} onChange={e => setDimensions(d => ({ ...d, h3: e.target.value }))}>
                            <option value="">選択</option>
                            {(dimensionOptsMap.h3 || []).map(v => <option key={v} value={v}>{v}mm</option>)}
                          </select>
                          <p className="text-[9px] text-slate-500 italic">規格寸法です。±5mm程度の後座高誤差が出る場合があります。</p>
                        </div>
                      )}
                      <div className={`space-y-2 p-5 rounded-3xl border-2 shadow-inner ${(showMissingRequired.includes('H4 バック高（タイプ）') || showMissingRequired.includes('H4 バック高（値）')) ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200/50'}`}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest italic">H4 バック高</label>
                        <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none mb-2" value={dimensions.h4Type} onChange={e => setDimensions(d => ({...d, h4Type: e.target.value}))}>
                          {(dimensionOptsMap.h4Type || []).length > 1 && <option value="">選択</option>}
                          {(dimensionOptsMap.h4Type || []).map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none" value={dimensions.h4Val} onChange={e => setDimensions(d => ({...d, h4Val: e.target.value}))}>
                          {((dimensionOptsMap.h4Val || []).length > 1) && <option value="">選択</option>}
                          {(dimensionOptsMap.h4Val || []).map(v => <option key={v} value={v}>{v}mm</option>)}
                        </select>
                      </div>
                      <div className={`space-y-4 p-5 rounded-3xl border-2 shadow-inner ${(showMissingRequired.includes(DIMENSION_LABELS.l8) || showMissingRequired.includes(DIMENSION_LABELS.lever)) ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200/50'}`}>
                        {!['LX_LR', 'FX_FR', 'COTON'].includes(selectedSeries) && (
                          <div className="space-y-1">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest italic">車軸前後位置 (L8)</label>
                            <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none" value={dimensions.l8} onChange={e => setDimensions(d => ({...d, l8: e.target.value}))}>
                              {l8Options.length > 1 && <option value="">選択</option>}
                              {l8Options.map(v => <option key={v} value={v}>{v}mm</option>)}
                            </select>
                          </div>
                        )}
                        {isHorizontalBrake ? (
                          <div className="space-y-1">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest italic">ブレーキレバー長</label>
                            <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-2 text-xs text-amber-600 font-bold text-center flex items-center justify-center gap-1">
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                              ホリゾンタル選択時は不要
                            </div>
                          </div>
                        ) : (currentCatalog?.dimensionRules?.lever || []).length > 0 ? (
                          <div className="space-y-1">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest italic">ブレーキレバー長</label>
                            <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none" value={dimensions.lever} onChange={e => setDimensions(d => ({...d, lever: e.target.value}))}>
                              {(currentCatalog.dimensionRules?.lever || []).length > 1 && <option value="">選択</option>}
                              {(currentCatalog.dimensionRules?.lever || []).map(v => <option key={v} value={v}>{v}mm</option>)}
                            </select>
                          </div>
                        ) : null}
                      </div>
                      <div className="bg-blue-50/40 p-5 rounded-[2rem] border border-blue-100 col-span-full flex flex-wrap gap-6 justify-center">
                        {['w1', 'l1', 'sb', 'w2', 'cm'].filter(k => {
                          if (selectedSeries === 'COTON' && ['w2', 'cm', 'sb'].includes(k)) return false;
                          return true;
                        }).map(k => {
                          const lockSbSeries = new Set(['GWX3', 'MX_MR', 'GWE', 'LX_LR', 'FX_FR', 'SX_SR']);
                          const isSbLocked = (k === 'sb') && lockSbSeries.has(selectedSeries) && !!derivedBackAngleValue;
                          let opts = [];
                          if (k === 'cm') opts = camberOptions;
                          else if (k === 'sb') opts = isSbLocked ? [derivedBackAngleValue] : (currentCatalog?.dimensionRules?.sbMap ? (currentCatalog.dimensionRules.sbMap[dimensions.offset] || []) : (currentCatalog?.dimensionRules?.sb || []));
                          else if (k === 'l1') {
                            if (selectedSeries === 'COTON' && frameParts.size?.label && currentCatalog?.dimensionRules?.l1BySize) {
                              opts = (currentCatalog.dimensionRules.l1BySize[frameParts.size.label] || []).map(String);
                            } else if (selectedSeries === 'MX_MR' && frameParts.size?.label) {
                              opts = frameParts.size.label === 'Sサイズ' ? ['330'] : ['350', '380', '420'];
                            } else opts = currentCatalog?.dimensionRules?.l1Map ? (currentCatalog.dimensionRules.l1Map[dimensions.offset] || []) : (currentCatalog?.dimensionRules?.l1 || []);
                          } else if (k === 'w1' && selectedSeries === 'COTON' && frameParts.size?.label && currentCatalog?.dimensionRules?.w1BySize) {
                            opts = (currentCatalog.dimensionRules.w1BySize[frameParts.size.label] || []).map(String);
                          } else opts = currentCatalog?.dimensionRules?.[k] || [];
                          const dimLabel = { w1: '座幅(W1)', l1: '座奥行(L1)', sb: 'バックレスト角(SB)', w2: 'ハンドリム間隔(W2)', cm: 'キャンバー' }[k];
                          const dimInvalid = showMissingRequired.includes(dimLabel);
                          return (
                            <div key={k} className={`w-20 text-center ${dimInvalid ? 'rounded-xl p-2 border-2 border-red-500 bg-red-50' : ''}`}>
                              <span className="text-[8px] font-black text-slate-400 block mb-1 uppercase tracking-widest">{dimLabel}</span>
                              <select className="w-full bg-white border rounded-xl p-2 text-xs font-black outline-none shadow-sm text-center" value={dimensions[k]} onChange={e => setDimensions(d => ({ ...d, [k]: e.target.value }))} disabled={(k === 'cm' && selections.axleType?.id === 'axle_b') || (k === 'sb' && isSbLocked) || (k === 'l1' && selectedSeries === 'MX_MR' && frameParts.size?.label === 'Sサイズ')}>
                                {opts.length > 1 && <option value="">選択</option>}
                                {opts.map(v => <option key={v} value={v}>{v}{(k === 'sb' || k === 'cm') ? '°' : ''}</option>)}
                              </select>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 mb-6 relative font-bold">
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3 tracking-widest uppercase"><Settings size={24} className="text-blue-600" /> 4. 専用オプション</h3>
                    {Object.values(armrestConfig).some(v => v) && (
                      <div className={`border-2 rounded-2xl p-5 mb-6 grid grid-cols-1 md:grid-cols-3 gap-3 ${showMissingRequired.includes('アームレスト（高低・高さ）') || showMissingRequired.includes('アームレスト長') ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200'} ${armrestConfig.armrestLengths?.length ? 'md:grid-cols-4' : ''}`}>
                        <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none" value={armrestSel.kind} onChange={e => setArmrestSel({ kind: e.target.value, lh: '', ah: '', al: '' })}>
                          {!(selectedSeries === 'NEO' || selectedSeries === 'GWE' || selectedSeries === 'COTON' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base') || (catalogVariant === 'kids' && ((selectedSeries === 'MINI_NEO_KIDS' && selections.baseModel?.id === 'kids_school') || (selectedSeries === 'MINI_NEO_JUNIOR' && selections.baseModel?.id === 'jr_school') || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR'))) && <option value="">アームレストなし</option>}
                          {armrestConfig.arm && <option value="arm">アームレスト {(selectedSeries === 'NEO' || selectedSeries === 'GWE' || selectedSeries === 'COTON' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base') || (catalogVariant === 'kids' && ((selectedSeries === 'MINI_NEO_KIDS' && selections.baseModel?.id === 'kids_school') || (selectedSeries === 'MINI_NEO_JUNIOR' && selections.baseModel?.id === 'jr_school') || selectedSeries === 'MINI_NEO_A_KIDS' || selectedSeries === 'MINI_NEO_A_JUNIOR'))) ? '(標準 込)' : '(+¥22,000)'}</option>}
                          {armrestConfig.flip && <option value="flip">はね上げ式 {(selectedSeries === 'NEO' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base') || (catalogVariant === 'kids' && ['MINI_NEO_KIDS', 'MINI_NEO_JUNIOR', 'MINI_NEO_A_KIDS', 'MINI_NEO_A_JUNIOR'].includes(selectedSeries))) ? '(+¥6,000)' : '(+¥28,000)'}</option>}
                        </select>
                        <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20" value={armrestSel.lh} disabled={!armrestSel.kind} onChange={e => setArmrestSel(s => ({ ...s, lh: e.target.value, ah: '' }))}><option value="">-- 高低 --</option>{((armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip) || {})?.low && <option value="ロー">ロー</option>}{((armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip) || {})?.mid && <option value="ミディアム">ミディアム</option>}{((armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip) || {})?.high && <option value="ハイ">ハイ</option>}</select>
                        <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20" value={armrestSel.ah} disabled={!armrestSel.kind || !armrestSel.lh} onChange={e => setArmrestSel(s => ({ ...s, ah: e.target.value }))}><option value="">-- 高さ --</option>{((armrestSel.lh === 'ロー' ? (armrestSel.kind === 'arm' ? armrestConfig.arm?.low : armrestConfig.flip?.low) : armrestSel.lh === 'ミディアム' ? (armrestSel.kind === 'arm' ? armrestConfig.arm?.mid : armrestConfig.flip?.mid) : (armrestSel.kind === 'arm' ? armrestConfig.arm?.high : armrestConfig.flip?.high))?.ah || []).map(v => <option key={v} value={v}>{v}mm</option>)}</select>
                        {armrestConfig.armrestLengths?.length && (selectedSeries === 'MINI_NEO_KIDS' || selectedSeries === 'MINI_NEO_JUNIOR') && (
                          <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20" value={armrestSel.al} disabled={!armrestSel.kind} onChange={e => setArmrestSel(s => ({ ...s, al: e.target.value }))}><option value="">-- アームレスト長 --</option>{armrestConfig.armrestLengths.map(al => <option key={al.no} value={al.no}>{al.label} ({al.no})</option>)}</select>
                        )}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {(currentCatalog.options || []).filter(opt => {
                        const isArmrestGroup = ['opt_arm_l','opt_arm_h','opt_arm','opt_arm_mr','opt_arm_ln'].includes(opt.id);
                        if (opt.id === 'opt_flip' && (Array.isArray(opt.ahLow) || Array.isArray(opt.ahHigh) || Array.isArray(opt.ah))) return false;
                        if (catalogVariant === 'kids' && (opt.id === 'opt_arm_std' || opt.id === 'opt_flip_arm')) return false;
                        return !isArmrestGroup;
                      }).map(opt => (
                        <button key={opt.id} type="button" onClick={() => toggleItem(opt, selectedOptions, setSelectedOptions)} className={`flex justify-between items-center p-5 border rounded-2xl text-left transition-all ${selectedOptions.find(o=>o.id===opt.id) ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
                          <div><p className="text-[9px] font-bold text-blue-400 mb-1 tracking-widest uppercase leading-none">{opt.no}</p><span className="text-xs font-black text-slate-700 uppercase leading-none">{opt.name}</span></div>
                          <span className="text-xs font-mono font-black text-blue-600">{itemPrice(opt) >= 0 ? '+' : ''}{yen(itemPrice(opt))}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden mb-8 border border-blue-500/20">
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3 tracking-widest uppercase"><Heart size={24} className="text-blue-400" /> 5. アクセサリー</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {(currentCatalog?.accessories && currentCatalog.accessories.length > 0 ? currentCatalog.accessories : COMMON_ACCESSORIES).map(acc => (
                        <button key={acc.id} onClick={() => toggleItem(acc, selectedAccessories, setSelectedAccessories)} className={`flex justify-between items-center p-5 border rounded-2xl text-left transition-all ${selectedAccessories.find(a=>a.id===acc.id) ? 'border-blue-600 bg-blue-600 shadow-xl scale-[1.02]' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                          <div><p className="text-[9px] font-bold text-blue-400 mb-1 tracking-widest uppercase leading-none">{acc.no}</p><span className="text-xs font-bold uppercase">{acc.name}</span></div>
                          <span className="text-[10px] font-mono font-black opacity-60">¥{(acc.price != null ? acc.price : itemPrice(acc)).toLocaleString()}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-[2rem] border p-8 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-300"></div>
                    <h3 className="text-lg font-black mb-4 flex items-center gap-3 uppercase text-slate-700"><Edit3 size={20} className="text-slate-400" /> 備考・特記事項</h3>
                    <textarea className="w-full bg-slate-50 border rounded-2xl p-6 text-sm font-bold outline-none transition-all min-h-[140px] resize-none" placeholder="特記事項を入力してください。" value={remarks} onChange={e => setRemarks(e.target.value)} />
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-4 sticky top-28 hidden lg:block z-30 font-bold">
              <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
                <div className="p-6 bg-slate-900 text-white flex justify-between items-center"><span className="font-black text-xs uppercase flex items-center gap-2"><ShoppingCart size={18} className="text-blue-400"/> Snapshot</span><span className="text-[9px] bg-blue-600 px-2 py-1 rounded font-black uppercase tracking-widest">{selectedSeries || '---'}</span></div>
                <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto text-right border-b">
                  {/* スナップショット内に顧客情報を簡易表示 */}
                  {customerInfo.userName && (
                    <div className="flex justify-between items-start border-b pb-2 text-left bg-blue-50/50 p-2 rounded-lg">
                      <span className="text-[9px] text-blue-400 font-black uppercase w-16 pt-1 tracking-widest">User</span>
                      <p className="text-[11px] font-black text-blue-800 uppercase flex-1 text-right">{customerInfo.userName}</p>
                    </div>
                  )}
                  {derivedFrameNo && <div className="flex justify-between items-start border-b pb-2 text-left"><span className="text-[9px] text-slate-400 font-black uppercase w-16 pt-1 tracking-widest">Frame No</span><p className="text-[11px] font-black text-blue-600 font-mono uppercase tracking-widest flex-1 text-right">{derivedFrameNo}</p></div>}
                  {derivedBackAngle && <div className="flex justify-between items-start border-b pb-2 text-left"><span className="text-[9px] text-slate-400 font-black uppercase w-16 pt-1 tracking-widest">背角度</span><p className="text-[11px] font-black text-slate-800 font-mono tracking-widest flex-1 text-right">{derivedBackAngle}</p></div>}
                  {Object.entries(selections).map(([k,v]) => v && (
                    <div key={k} className="flex justify-between items-start border-b pb-2 text-left">
                      <span className="text-[9px] text-slate-400 font-black uppercase w-16 pt-1 tracking-widest">{k}</span>
                      <div className="text-right flex-1">
                        <p className="text-[11px] font-black text-slate-800 uppercase leading-tight tracking-tighter">
                          {(k === 'axleType' && ['LX_LR', 'FX_FR'].includes(selectedSeries)) ? getAxleDisplayName(v) : (typeof v === 'string' ? v : v.name)}
                        </p>
                        {typeof v !== 'string' && <p className="text-[9px] text-blue-600 font-mono font-black uppercase mt-1 tracking-widest">
                          {k === 'wheel' ? getWheelNo(v, selections.wheelSize) : v.no}
                        </p>}
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-start border-b pb-2 text-left">
                    <span className="text-[9px] text-slate-400 font-black uppercase w-16 pt-1 tracking-widest">塗装</span>
                    <div className="text-right flex-1">
                      <p className="text-[11px] font-black text-slate-800 uppercase leading-tight tracking-tighter">{PAINT_PLANS.find(p => p.id === paint.type)?.name}</p>
                      <p className="text-[11px] font-black text-blue-600 uppercase leading-tight tracking-tighter mt-1">
                        {paint.type === 'standard' ? (paint.standardColor || '選択') : (paint.customColors.filter(c => c.trim() !== '').join(' / ') || "色名未入力")}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-between items-end border-t-2 border-dashed">
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total</span>
                    <span className="text-3xl font-black font-mono text-blue-600 tracking-tighter italic">¥{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in border max-w-6xl mx-auto mb-20 relative font-black uppercase">
            <div className="bg-slate-900 px-5 py-8 md:px-8 md:py-14 text-white flex flex-col md:flex-row justify-between items-center gap-6 border-b-8 border-blue-600">
              <div className="text-left flex-1">
                <h2 className="text-2xl md:text-4xl font-black flex items-center gap-3 md:gap-5 tracking-tighter leading-none underline decoration-blue-500 decoration-8 underline-offset-[14px] mb-8 md:mb-12"><CheckCircle size={48} className="text-green-500" /> 転記用 Manifest</h2>
                {/* マニフェスト用顧客情報表示 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="space-y-1">
                    <p className="text-[10px] text-blue-400 font-black tracking-widest">販売店名</p>
                    <p className="text-xl font-black border-b border-white/20 pb-1">{customerInfo.dealerName || "未入力"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-blue-400 font-black tracking-widest">販売店担当者名</p>
                    <p className="text-xl font-black border-b border-white/20 pb-1">{customerInfo.salesPerson || "未入力"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-blue-400 font-black tracking-widest">ユーザー名</p>
                    <p className="text-xl font-black border-b border-white/20 pb-1">{customerInfo.userName || "未入力"}</p>
                  </div>
                </div>
              </div>
              <button type="button"  onClick={() => setIsConfirmed(false)} className="bg-white/10 px-10 py-5 rounded-2xl font-black text-xs border border-white/10 flex items-center gap-2 hover:bg-white/20 transition-all no-print"><RotateCcw size={18}/> 戻る</button>
            </div>
            <div className="p-4 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8 space-y-16">
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 border-l-4 border-blue-600 pl-4 underline underline-offset-8 decoration-slate-100">01. 基本パーツ構成</h3>
                  <table className="w-full text-left">
                    <thead><tr className="text-[9px] md:text-[10px] text-slate-400 uppercase font-black border-b-2 tracking-widest"><th className="pb-3 md:pb-5 w-1/5">項目</th><th className="pb-3 md:pb-5">パーツ</th><th className="pb-3 md:pb-5 text-center hidden sm:table-cell">記入No.</th><th className="pb-3 md:pb-5 text-right">加算額</th></tr></thead>
                    <tbody className="divide-y">
                      {totalLineItems.map((row, i) => (
                        <tr key={i} className="group hover:bg-slate-50 transition-colors">
                          <td className="py-3 md:py-5 text-[9px] md:text-[10px] text-slate-400 font-black tracking-widest">{row.label}</td>
                          <td className="py-3 md:py-5 text-xs md:text-sm font-bold text-slate-800 leading-snug">{row.name}</td>
                          <td className="py-3 md:py-5 text-center hidden sm:table-cell"><span className="bg-slate-900 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-xl font-mono text-sm md:text-base font-black tracking-widest">{row.no}</span></td>
                          <td className="py-3 md:py-5 text-right font-mono font-black text-slate-500 text-xs">{row.price === 0 ? "込" : (row.price > 0 ? `+¥${row.price.toLocaleString()}` : `¥${row.price.toLocaleString()}`)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pt-8 border-t-2 border-dashed">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-10 border-l-4 border-blue-600 pl-4">02. オプション & アクセサリー</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...selectedOptions, ...selectedAccessories].filter(o => o.__group !== 'ARMREST').map((opt, i) => (
                      <div key={i} className="flex justify-between items-center p-3 md:p-5 bg-[#f8fafc] rounded-xl border transition-all hover:bg-white shadow-sm">
                        <div className="flex items-center gap-5"><span className="bg-blue-600 text-white text-[10px] px-4 py-2 rounded-full font-black font-mono tracking-widest">{opt.no}</span><span className="text-[11px] font-black text-slate-700 tracking-tight">{opt.name}</span></div>
                        <span className="text-xs font-mono font-black text-blue-600">{itemPrice(opt) >= 0 ? '+' : ''}¥{itemPrice(opt).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-8 border-t-2 border-dashed">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 border-l-4 border-blue-600 pl-4">04. 備考・特記事項</h3>
                  <div className="bg-slate-50 p-5 md:p-8 rounded-2xl border text-sm font-bold text-slate-700 min-h-[100px] whitespace-pre-wrap shadow-inner border-dashed">{remarks || "特記事項なし"}</div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border shadow-inner text-left">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 italic underline decoration-blue-500 underline-offset-8">03. 指定寸法一覧</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-3"><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ホイール</span><span className="font-black text-lg text-blue-600">{selections.wheelSize}</span></div>
                    {Object.entries(dimensions).map(([k,v]) => {
                      const displayVal = (k === 'casterWheel' && currentCatalog?.dimensionRules?.casterWheel?.length && v) ? (currentCatalog.dimensionRules.casterWheel.find(cw => (typeof cw === 'object' ? cw.value : cw) === v)?.label ?? v) : v;
                      const unit = v ? (k === 'sb' ? '°' : (k === 'casterWheel' ? '' : (isNaN(v) ? '' : 'mm'))) : '';
                      return (
                        <div key={k} className="flex justify-between items-center border-b pb-3"><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{DIMENSION_LABELS[k] || k}</span><span className="font-black text-lg text-slate-900">{(displayVal != null && displayVal !== '') ? displayVal : '---'} {unit && <span className="text-[10px] ml-0.5 text-slate-400 italic font-normal">{unit}</span>}</span></div>
                      );
                    })}
                    {derivedBackAngle && <div className="flex justify-between items-center border-b pb-3"><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">背角度</span><span className="font-black text-lg text-slate-900">{derivedBackAngle ?? '—'}</span></div>}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 rounded-3xl text-white shadow-xl text-center border-4 border-white/20">
                  <p className="font-black font-mono tracking-tighter text-3xl md:text-4xl"><span className="text-[0.6em] mr-1">¥</span>{totalAmount.toLocaleString()}</p>
                  <p className="text-[9px] opacity-70 font-bold uppercase mt-4 italic">OX ENGINEERING DATA</p>
                </div>
                {/* PDF作成ボタンの実装 */}
                <button 
                  onClick={handleDownloadPDF} 
                  className="w-full bg-slate-900 text-white py-5 md:py-8 rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 shadow-2xl tracking-widest border-2 border-slate-700/50 hover:bg-slate-800 transition-all no-print"
                >
                  <FileText size={30}/> PDF作成
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4">
                  ※作成されるPDFはA4縦サイズで印刷に適したフォーマットになります。スマホでは「共有」からメールアプリで送付できます。
                </p>
                {/* CSV出力ボタン */}
                <button 
                  onClick={handleDownloadCSV} 
                  className="w-full bg-emerald-600 text-white py-5 md:py-8 rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 shadow-2xl tracking-widest border-2 border-emerald-500/50 hover:bg-emerald-500 transition-all no-print"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  CSV出力（転記用）
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4">
                  ※ExcelやGoogleスプレッドシートで開けるCSV形式で出力されます（UTF-8 BOM付き）。
                </p>
                {/* PRINTボタン */}
                <button
                  onClick={handlePrint}
                  className="w-full bg-indigo-600 text-white py-5 md:py-8 rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 shadow-2xl tracking-widest border-2 border-indigo-500/50 hover:bg-indigo-500 transition-all no-print"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                  PRINT / PDF保存
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4 no-print">
                  ※ブラウザの印刷ダイアログから「PDFに保存」を選択すると日本語のまま保存できます。
                </p>
                {/* メール送付ボタン */}
                <button
                  onClick={handleSendEmail}
                  className="w-full bg-sky-600 text-white py-5 md:py-8 rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 shadow-2xl tracking-widest border-2 border-sky-500/50 hover:bg-sky-500 transition-all no-print"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  メール送付
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4 no-print">
                  ※メールアプリが開き、MANIFEST内容が本文に自動入力されます。
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="mt-32 text-center pb-20 opacity-20 font-black tracking-widest uppercase">
        <p className="text-slate-500 text-[10px] tracking-[1.5em]">OX CONFIGURATOR v5.9 Stable</p>
      </footer>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        /* タッチ操作最適化 */
        button, select { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        select { font-size: 16px; } /* iOSズーム防止 */
        input[type="text"] { font-size: 16px; } /* iOSズーム防止 */
        /* ========== 印刷・PDF保存用スタイル ========== */
        @media print {
          nav, footer, .no-print { display: none !important; }
          .fixed { position: static !important; }
          body { margin: 0; padding: 0; background: white !important; }
          #pdf-area { padding-top: 0 !important; background: white !important; }
          main { padding: 4px !important; max-width: 100% !important; }
          table { page-break-inside: auto; width: 100% !important; }
          tr { page-break-inside: avoid; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          /* MANIFESTの記入No.カラムを印刷時に表示 */
          .hidden { display: table-cell !important; }
          .sm\:table-cell { display: table-cell !important; }
        }
      `}</style>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
