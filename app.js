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

// --- カタログ・マスターデータ ---

// --- カタログ・マスターデータ ---
// =========================
// 価格マスター
// =========================
const PRICE_MASTER = {
  // --- GW-E ユニット本体 ---
  'gwe.jwg1.base': 446000,
  'gwe.jwg1.ctrl_arm': 12000,   // ⓓ アームレスト取付け
  'gwe.jwg1.joy_7500': 7500,    // ⓔ 一部
  'gwe.jwg1.joy_10500': 10500,  // ⓔ 一部
  'gwe.jwg1.switch_toggle': 9500, // ⓕ トグル
  'gwe.jwx2.base': 423000,
  'gwe.jwx2.sporty': 17300,      // ⓐ スポーティ
  'gwe.jwx2.batt_li': 37800,     // ⓑ リチウム
  'gwe.jwx2.hr_vinyl': 16100,    // Ⓒ ビニール
  
  // 塗装プラン価格
  'paint.standard': 0,
  'paint.special_1': 10000,
  'paint.special_2': 18000,
  'paint.special_3': 24000,
  'paint.grand': 18000,
  'paint.splash': 15000,
  'paint.mirror': 36000,

  // キャスター種類
  'caster.resin': 10000,
  'caster.lpc3': 18000,
  'caster.wcr5': 26000,
  'caster.wide': 14000,
  'caster.cushion': 16000,
  // ===============================
  // MX/MR / NEO キャスター（標準仕様）
  // ===============================
  "caster_mxneo.resin": 0,
  "caster_mxneo.lpc3": 8000,
  "caster_mxneo.wide": 0,

  // ハンドリム
  'handrim.alu': 13000,
  'handrim.vinyl': 18000,

  // アクセサリー
  'acc.pouch': 2600,
  'acc.armcover': 4800,
  'acc.bottle': 2200,
  'acc.backpack': 8000,
  'acc.bag_s': 7400,
  'acc.net': 5500,
  'acc.suit': 6200,
  'acc.framecover': 4000,
  'acc.belt_a': 5200,
  // エラスティックベルト価格 (S, M, L)
  'acc.belt_e.s': 5500,
  'acc.belt_e.m': 6000,
  'acc.belt_e.l': 6500,
  // ホールディングベルト価格 (S, M, L)
  'acc.belt_h.s': 2400,
  'acc.belt_h.m': 2600,
  'acc.belt_h.l': 2800,
  'acc.tool': 1400,
  'acc.pump': 24200,
  'acc.cushion': 16000,

  // ===============================
  // MX / MR パッケージ（価格表）
  // ===============================
  "mx.package.std": 194000,
  "mx.package.m":   213000,
  "mx.package.a":   247000,
  "mx.package.h":   297000,

  "mr.package.std": 233000,
  "mr.package.m":   252000,
  "mr.package.a":   286000,
  "mr.package.h":   336000,

  // ===============================
  // NEO パッケージ
  // ===============================
  "neo.package.std": 193000,
  "neo.package.m": 207000,
  "neo.package.caregiver": 235000,

  // ===============================
  // MX / NEO 用 フットレスト加算
  // ===============================
  "mx_neo.ft.pj_std": 0,
  "mx_neo.ft.pipe": 0,
  "mx_neo.ft.pj_hi": 3000,
  "mx_neo.ft.ps_hi": 3000,
  "mx_neo.ft.ps_std": 10000,
};

// 塗装プラン定義
const PAINT_PLANS = [
  { id: 'standard', name: '標準塗装', priceKey: 'paint.standard' },
  { id: 'special_1', name: '特別塗装 1色', priceKey: 'paint.special_1' },
  { id: 'special_2', name: '特別塗装 2色', priceKey: 'paint.special_2' },
  { id: 'special_3', name: '特別塗装 3色', priceKey: 'paint.special_3' },
  { id: 'grand', name: 'グランドペイント', priceKey: 'paint.grand' },
  { id: 'splash', name: 'スプラッシュペイント', priceKey: 'paint.splash' },
  { id: 'mirror', name: 'ミラーペイント', priceKey: 'paint.mirror' },
];

// ===============================
// カラーマスター
// ===============================
const STANDARD_COLORS = [
  'S-01 ホワイト', 'S-02 ライムグリーン', 'S-03 イエロー', 'S-04 レッド',
  'S-11 マリンブルー', 'S-12 オレンジ', 'M-01 ブラックメタリック', 'M-02 メタリックグリーン',
  'M-11 パープル', 'M-24 ファインレッド', 'M-63 シルバー', 'M-64 ダークシルバー'
];

const FUSION_STANDARD_COLORS = [
  'S-11 マリンブルー', 'M-01 ブラックメタリック', 'M-24 ファインレッド'
];

const NEO_STANDARD_COLORS = [
  'M-01 ブラックメタリック', 'M-24 ファインレッド', 'M-65 シリウスシルバー'
];

const MX_MR_STANDARD_COLORS = [
  'S-03 レーシングイエロー', 'S-11 マリンブルー', 'M-01 ブラックメタリック', 
  'M-11 メタリックパープル', 'M-24 ファインレッド', 'M-65 シリウスシルバー'
];

// ===============================
// タイヤ設定 (IRC / Kenda)
// ===============================
const TIRE_COLOR_MASTER = {
  IRC: {
    '24インチ': [
      { name: 'グレー', no: 'No.151', colorCode: '#94a3b8' },
      { name: 'レッド', no: 'No.153', colorCode: '#ef4444' },
      { name: 'ブラック', no: 'No.155', colorCode: '#1e293b' }
    ],
    default: (size) => {
      if (size === '22インチ') return { name: 'グレー', no: 'No.131' };
      if (size === '23インチ') return { name: 'グレー', no: 'No.141' };
      if (size === '25インチ') return { name: 'グレー', no: 'No.161' };
      return { name: 'グレー', no: 'No.151' };
    }
  },
  KENDA: {
    '24インチ': [
      { name: 'グレー', no: 'No.151', colorCode: '#94a3b8' },
      { name: 'イエロー', no: 'No.152', colorCode: '#eab308' },
      { name: 'レッド', no: 'No.153', colorCode: '#ef4444' },
      { name: 'ブルー', no: 'No.154', colorCode: '#3b82f6' }
    ],
    default: (size) => {
      if (size === '22インチ') return { name: 'グレー', no: 'No.131' };
      if (size === '23インチ') return { name: 'グレー', no: 'No.141' };
      if (size === '25インチ') return { name: 'グレー', no: 'No.161' };
      return { name: 'グレー', no: 'No.151' };
    }
  }
};

// ===============================
// ホイールNo.設定 (サイズ連動用)
// ===============================
const WHEEL_NO_MASTER = {
  ds3a: { '24インチ': 'No.251' },
  ds3z: { '24インチ': 'No.252' },
  ds3a_n: { '24インチ': 'No.251' },
  ds3z_n: { '24インチ': 'No.252' },
  hhr3: { '24インチ': 'No.13' },
  hhr3_n: { '24インチ': 'No.13' },
  spn_w: { '24インチ': 'No.351', '25インチ': 'No.361' },
  spn_b: { '24インチ': 'No.352', '25インチ': 'No.362' },
  al5: { '23インチ': 'No.74', '24インチ': 'No.75' },
  al5_n: { '23インチ': 'No.74', '24インチ': 'No.75' },
  mx4: { '22インチ': 'No.43', '23インチ': 'No.44', '24インチ': 'No.45', '25インチ': 'No.46' },
  mx4_n: { '22インチ': 'No.43', '23インチ': 'No.44', '24インチ': 'No.45', '25インチ': 'No.46' },
  kaid: { '22インチ': 'No.63', '23インチ': 'No.64', '24インチ': 'No.65' },
  kaid_n: { '22インチ': 'No.63', '23インチ': 'No.64', '24インチ': 'No.65' },
  fixed: { '24インチ': 'No.51' } // 標準 -> No.51 に変更
};

const getPrice = (key) => (key && PRICE_MASTER[key] != null ? PRICE_MASTER[key] : 0);

const itemPrice = (item) => {
  if (!item) return 0;
  if (item.priceKey) return getPrice(item.priceKey);
  return item.price || 0;
};
const yen = (v) => `¥${(Number(v) || 0).toLocaleString()}`;

const CASTER_WHEEL_DATA = [
  { type: '樹脂コア', priceKey: 'caster.resin', sizes: [
    { label: '92mm',  no: 'No.21' }, { label: '105mm', no: 'No.22' }, { label: '127mm', no: 'No.23' }
  ]},
  { type: 'LPC3 (アルミコア)', priceKey: 'caster.lpc3', sizes: [
    { label: '80mm',  no: 'No.61' }, { label: '95mm',  no: 'No.62' }, { label: '105mm', no: 'No.63' }, { label: '125mm', no: 'No.64' }
  ]},
  { type: 'WCR5 (アルミコア)', priceKey: 'caster.wcr5', sizes: [
    { label: '100mm', no: 'No.41' }, { label: '125mm', no: 'No.42' }
  ]},
  { type: 'ワイドキャスター', priceKey: 'caster.wide', sizes: [
    { label: '100mm', no: 'No.31' }, { label: '125mm', no: 'No.32' }
  ]},
  { type: 'クッションキャスター', priceKey: 'caster.cushion', sizes: [
    { label: '125mm', no: 'No.8' }
  ]}
];

const COMMON_ACCESSORIES = [
  { id: 'acc_pouch',   name: 'ロールアップポーチ',         no: 'No.1',   priceKey: 'acc.pouch' },
  { id: 'acc_cv',      name: 'アームレストカバー',         no: 'No.1',   priceKey: 'acc.armcover' },
  { id: 'acc_bottle',  name: 'ボトルホルダー',             no: 'No.2',   priceKey: 'acc.bottle' },
  { id: 'acc_pack',    name: 'バックパック',               no: 'No.1',   priceKey: 'acc.backpack' },
  { id: 'acc_bag_s',    name: 'ユースフルバッグ(小)',       no: 'No.1',   priceKey: 'acc.bag_s' },
  { id: 'acc_net',     name: '3Dアンダーネット',           no: 'No.1',   priceKey: 'acc.net' },
  { id: 'acc_suit',    name: 'スーツガード',               no: 'No.1',   priceKey: 'acc.suit' },
  { id: 'acc_f_cv',    name: 'フレームカバー',             no: 'No.1',   priceKey: 'acc.framecover' },
  { id: 'acc_belt_a',  name: 'アシストベルト',             no: 'No.1',   priceKey: 'acc.belt_a' },
  // 分離: エラスティックベルト
  { id: 'acc_belt_e_s', name: 'エラスティックベルト (S)',    no: 'No.1',   priceKey: 'acc.belt_e.s' },
  { id: 'acc_belt_e_m', name: 'エラスティックベルト (M)',    no: 'No.2',   priceKey: 'acc.belt_e.m' },
  { id: 'acc_belt_e_l', name: 'エラスティックベルト (L)',    no: 'No.3',   priceKey: 'acc.belt_e.l' },
  // 分離: ホールディングベルト
  { id: 'acc_belt_h_s', name: 'ホールディングベルト (S)',    no: 'No.1',   priceKey: 'acc.belt_h.s' },
  { id: 'acc_belt_h_m', name: 'ホールディングベルト (M)',    no: 'No.2',   priceKey: 'acc.belt_h.m' },
  { id: 'acc_belt_h_l', name: 'ホールディングベルト (L)',    no: 'No.3',   priceKey: 'acc.belt_h.l' },
  { id: 'acc_tool',    name: '工具セット',                 no: 'No.1',   priceKey: 'acc.tool' },
  { id: 'acc_pump',    name: '充電式空気入れ',             no: 'No.1',   priceKey: 'acc.pump' },
  { id: 'acc_cushion', name: 'クッション',                 no: 'No.1',   priceKey: 'acc.cushion' },
];

const HANDRIM_OPTIONS = [
  { id: 'hr_alu',   name: 'アルマイト',             no: 'No.11', priceKey: 'handrim.alu' },
  { id: 'hr_vinyl', name: 'ビニールコーティング',  no: 'No.21', priceKey: 'handrim.vinyl' },
];

const WHEEL_SIZE_RULES = {
  ds3a: ['24インチ'], ds3z: ['24インチ'], hhr3: ['24インチ'], spn_w: ['24インチ', '25インチ'],
  spn_b: ['24インチ', '25インチ'], al5: ['23インチ', '24インチ'], mx4: ['22インチ', '23インチ', '24インチ', '25インチ'],
  kaid: ['22インチ', '23インチ', '24インチ'], fixed: ['24インチ'], wire: ['22インチ', '23インチ', '24インチ', '25インチ'],
  ds3a_n: ['24インチ'], ds3z_n: ['24インチ'], hhr3_n: ['24インチ'], al5_n: ['23インチ', '24インチ'],
  mx4_n: ['22インチ', '23インチ', '24インチ', '25インチ'], kaid_n: ['22インチ', '23インチ', '24インチ'],
};
// ===============================
// MX / MR / NEO パッケージ選択肢
// ===============================
const MX_PACKAGE_OPTIONS = [
  { id: 'mx_pkg_std', name: 'STD',     no: 'STD', priceKey: 'mx.package.std' },
  { id: 'mx_pkg_m',   name: 'タイプM', no: 'M',   priceKey: 'mx.package.m' },
  { id: 'mx_pkg_a',   name: 'タイプA', no: 'A',   priceKey: 'mx.package.a' },
  { id: 'mx_pkg_h',   name: 'タイプH', no: 'H',   priceKey: 'mx.package.h' },
];

const MR_PACKAGE_OPTIONS = [
  { id: 'mr_pkg_std', name: 'STD',     no: 'STD', priceKey: 'mr.package.std' },
  { id: 'mr_pkg_m',   name: 'タイプM', no: 'M',   priceKey: 'mr.package.m' },
  { id: 'mr_pkg_a',   name: 'タイプA', no: 'A',   priceKey: 'mr.package.a' },
  { id: 'mr_pkg_h',   name: 'タイプH', no: 'H',   priceKey: 'mr.package.h' },
];

const NEO_PACKAGE_OPTIONS = [
  { id: 'neo_pkg_std',      name: 'STD',   no: 'STD', priceKey: 'neo.package.std' },
  { id: 'neo_pkg_m',        name: 'M',     no: 'M',   priceKey: 'neo.package.m' },
  { id: 'neo_pkg_caregiver',name: '介助',   no: '介助', priceKey: 'neo.package.caregiver' },
];


const GWE_UNIT_DETAIL_MASTER = {
  jwg1: {
    unitId: 'jwg1', name: '電動ユニット（JWG-1）', no: 'JWG-1', basePriceKey: 'gwe.jwg1.base',
    groups: [
      { key: 'a_speed_wheel', label: 'ⓐ ホイールサイズと最高速度', type: 'single', choices: [{ id: 'a2', name: '37-501（22インチ）最高速度 4.5km/h', no: 'No.2', priceKey: '' }, { id: 'a3', name: '37-540（24インチ）最高速度 4.5km/h', no: 'No.3', priceKey: '' }, { id: 'a4', name: '37-501（22インチ）最高速度 6km/h', no: 'No.4', priceKey: '' }, { id: 'a5', name: '37-540（24インチ）最高速度 6km/h', no: 'No.5', priceKey: '' }] },
      { key: 'b_clutch', label: 'ⓑ クラッチレバー位置（手動/電動切換）', type: 'single', choices: [{ id: 'b1', name: '右側取付け', no: 'No.1', priceKey: '' }, { id: 'b2', name: '左側取付け', no: 'No.2', priceKey: '' }] },
      { key: 'c_battery', label: 'ⓒ リチウムイオンバッテリー', type: 'single', choices: [{ id: 'c1', name: 'リチウムイオンバッテリー', no: 'No.1', priceKey: '' }] },
      { key: 'd_controller_pos', label: 'ⓓ コントローラー位置', type: 'single', choices: [{ id: 'd11', name: 'フレーム右側取付け', no: 'No.11', priceKey: '' }, { id: 'd12', name: 'フレーム左側取付け', no: 'No.12', priceKey: '' }, { id: 'd21', name: 'アームレスト右側取付け', no: 'No.21', priceKey: 'gwe.jwg1.ctrl_arm' }, { id: 'd22', name: 'アームレスト左側取付け', no: 'No.22', priceKey: 'gwe.jwg1.ctrl_arm' }] },
      { key: 'e_joystick', label: 'ⓔ ジョイスティックタイプ', type: 'single', choices: [{ id: 'e1', name: '標準型', no: 'No.1', priceKey: '' }, { id: 'e2', name: '丸型', no: 'No.2', priceKey: 'gwe.jwg1.joy_7500' }, { id: 'e3', name: 'T型', no: 'No.3', priceKey: 'gwe.jwg1.joy_10500' }, { id: 'e4', name: '細長型', no: 'No.4', priceKey: 'gwe.jwg1.joy_10500' }, { id: 'e5', name: 'コの字型', no: 'No.5', priceKey: 'gwe.jwg1.joy_10500' }, { id: 'e6', name: '細型', no: 'No.6', priceKey: 'gwe.jwg1.joy_7500' }, { id: 'e7', name: 'お椀型', no: 'No.7', priceKey: 'gwe.jwg1.joy_7500' }] },
      { key: 'f_switch', label: 'ⓕ スイッチ', type: 'single', choices: [{ id: 'f1', name: '押しボタンスイッチ', no: 'No.1', priceKey: '' }, { id: 'f2', name: 'トグルスイッチ', no: 'No.2', priceKey: 'gwe.jwg1.switch_toggle' }] },
    ],
  },
  jwx2: {
    unitId: 'jwx2', name: '電動アシストユニット（JWX-2）', no: 'JWX-2', basePriceKey: 'gwe.jwx2.base',
    groups: [
      { key: 'a_tire_wheel', label: 'ⓐ タイヤ・ホイールサイズ', type: 'single', choices: [{ id: 'a2', name: '標準 37-501（22インチ）', no: 'No.2', priceKey: '' }, { id: 'a3', name: '標準 37-540（24インチ）', no: 'No.3', priceKey: '' }, { id: 'a6', name: 'スポーティ 25-489（22インチ）', no: 'No.6', priceKey: 'gwe.jwx2.sporty' }, { id: 'a7', name: 'スポーティ 25-540（24インチ）', no: 'No.7', priceKey: 'gwe.jwx2.sporty' }] },
      { key: 'b_battery', label: 'ⓑ バッテリー', type: 'single', choices: [{ id: 'b1', name: 'ニッケル水素バッテリー', no: 'No.1', priceKey: '' }, { id: 'b2', name: 'リチウムイオンバッテリー', no: 'No.2', priceKey: 'gwe.jwx2.batt_li' }] },
      { key: 'c_handrim_surface', label: 'Ⓒ ハンドリム表面加工', type: 'single', choices: [{ id: 'c1', name: 'ステンレス', no: 'No.1', priceKey: '' }, { id: 'c3', name: 'ビニールコーティング', no: 'No.3', priceKey: 'gwe.jwx2.hr_vinyl' }] },
      { key: 'd_wheel_mount', label: 'ⓓ ホイール取付タイプ', type: 'single', choices: [{ id: 'd1', name: '固定タイプ', no: 'No.1', priceKey: '' }, { id: 'd2', name: '着脱タイプ', no: 'No.2', priceKey: '' }] },
      { key: 'e_wheel_cap', label: 'ⓔ ホイールキャップ', type: 'single', choices: [{ id: 'e1', name: '銀ベース 白色', no: 'No.1', priceKey: '' }, { id: 'e2', name: '黒ベース アルミ色', no: 'No.2', priceKey: '' }, { id: 'e3', name: '黒ベース 白色', no: 'No.3', priceKey: '' }] },
    ],
  },
};

const COMMON_FOOTRESTS = [
  { id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', price: 24000 },
  { id: 'ft_pj_hi',  name: 'プレートジョイント hi',  no: 'No.12', price: 27000 },
  { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', price: 35000 },
  { id: 'ft_ps_hi',  name: 'プレートセパレート hi',  no: 'No.32', price: 27000 },
  { id: 'ft_pipe',   name: 'パイプジョイント std',   no: 'No.21', price: 24000 },
];

const MX_NEO_FOOTRESTS = [
  { id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', priceKey: 'mx_neo.ft.pj_std' },
  { id: 'ft_pj_hi',  name: 'プレートジョイント hi',  no: 'No.12', priceKey: 'mx_neo.ft.pj_hi' },
  { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', priceKey: 'mx_neo.ft.ps_std' },
  { id: 'ft_ps_hi',  name: 'プレートセパレート hi',  no: 'No.32', priceKey: 'mx_neo.ft.ps_hi' },
  { id: 'ft_pipe',   name: 'パイプジョイント std',   no: 'No.21', priceKey: 'mx_neo.ft.pipe' },
];

const CATALOG = {
  ZZR: {
    title: "ZZR シリーズ",
    baseModels: [{ id: 'zzr', name: 'ZZR 本体ユニット', no: 'ZZR', price: 278000 }],
    frameOptions: { shape: [{label: 'タイプI', no: 'No.1'}, {label: 'タイプII', no: 'No.2'}, {label: 'タイプIII', no: 'No.3'}], length: [{label: 'ショート', no: 'No.1'}, {label: 'ロング', no: 'No.2'}], pipe: [{label: 'ストレート', no: 'No.1'}, {label: 'シボリ', no: 'No.2'}] },
    axleTypes: [{ id: 'axle_a', name: '車軸A (エキセン)', no: 'No.4', price: 0, l8: [70, 50, 30] }, { id: 'axle_b', name: '車軸B (サス)', no: 'No.5', price: 22000, l8: [60, 40] }],
    casterForks: [{ id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2', name: 'SFR2 (サス付)', no: 'No.13', price: 39000 }],
    brakes: [{ id: 'br_h', name: 'ホリゾンタル', no: 'No.11', price: 26000 }, { id: 'br_o', name: 'ダイヤル上付け', no: 'No.21', price: 26000 }, { id: 'br_u', name: 'ダイヤル下付け', no: 'No.22', price: 26000 }],
    footrests: [{ id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', price: 24000 }, { id: 'ft_pipe', name: 'パイプジョイント std', no: 'No.21', price: 24000 }, { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', price: 35000 }],
    wheels: [{ id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000 }, { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000 }, { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000 }, { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 }, { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000 }],
    options: [
      { id: 'opt_arm_l', name: 'アームレスト ロー', no: 'No.11', price: 22000, ah:[240,250,260,270] }, 
      { id: 'opt_arm_h', name: 'アームレスト ハイ', no: 'No.13', price: 22000, ah:[260,270,280,290,300,310] }, 
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 },
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000 }, 
      { id: 'opt_sideguard', name: 'サイドガード', no: 'No.3', price: 15000 },
      { id: 'opt_sideguard_fender', name: 'サイドガード＋簡易フェンダー', no: 'No.4', price: 25000 }, 
      { id: 'opt_micro', name: 'リアマイクロホイール', no: 'No.2', price: 22000 }, 
      { id: 'opt_l_flap', name: '軽量レザー (フラップ式)', no: 'No.1-3', price: 8000 }, 
      { id: 'opt_l_zip', name: '軽量レザー (ファスナー式)', no: 'No.4', price: 5000 },
      { id: 'opt_mag_cross', name: 'マグネシウムクロスメンバー', no: 'No.1', price: 30000 }
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], camber: ['0°', '2°'], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], sb: [86, 88, 90], w2: [5, 10, 15, 20, 25, 30] },
    hasMirrorPaint: true, blockSmallWheels: true, tireBrand: 'IRC'
  },
  GWX3: {
    title: "GWX III",
    baseModels: [{ id: 'gwx3', name: 'GWX III フレーム', no: 'GWX3', price: 149000 }],
    frameOptions: { shape: [{label:'タイプI', no:'1'}, {label:'タイプII', no:'2'}], length: [{label:'ショート', no:'1'}, {label:'ロング', no:'2'}], height: [{label:'レギュラー', no:'1'}, {label:'ハイ', no:'2'}] },
    frameMap: { 'タイプI-ショート-レギュラー': 'No.111', 'タイプI-ショート-ハイ': 'No.112', 'タイプI-ロング-レギュラー': 'No.121', 'タイプI-ロング-ハイ': 'No.112', 'タイプII-ショート-レギュラー': 'No.211', 'タイプII-ショート-ハイ': 'No.212', 'タイプII-ロング-レギュラー': 'No.221', 'タイプII-ロング-ハイ': 'No.222' },
    casterForks: [{ id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2', name: 'SFR2 ショート', no: 'No.14', price: 39000 }],
    brakes: [{ id: 'br_h', name: 'ホリゾンタル', no: 'No.11', price: 26000 }, { id: 'br_o', name: 'ダイヤル上付け', no: 'No.21', price: 26000 },{ id: 'br_u', name: 'ダイヤル下付け', no: 'No.22', price: 28000 },],
    footrests: [
      { id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', price: 24000 }, 
      { id: 'ft_pipe', name: 'パイプジョイント std', no: 'No.21', price: 24000 }, 
      { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', price: 35000 }
    ],
    wheels: [{ id: 'spn_w', name: 'スピナジー (白)', no: 'No.351', price: 142000 }, { id: 'spn_b', name: 'スピナジー (黒)', no: 'No.352', price: 142000 }, { id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000 }, { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000 }, { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 }, { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000 }],
    options: [{ id: 'opt_arm', name: 'アームレスト', no: 'No.11/13', price: 22000, ah:[255,265,275,285,295,305] }, { id: 'opt_flip', name: 'はね上げ式アームレスト', no: 'No.21/23', price: 28000, ah:[265,275,285,295,305,315] }, { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 }, { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000 }, { id: 'opt_micro', name: 'リアマイクロホイール', no: 'No.2', price: 22000 }, { id: 'opt_guard', name: 'サイドガード', no: 'No.3', price: 15000 }, { id: 'opt_f_guard', name: 'サイドガード+簡易フェンダー', no: 'No.4', price: 25000 }],
    dimensionRules: { h4: { 'ロー': [280, 290, 300, 310, 320, 330], 'ミディアム': [330, 340, 350, 360, 370, 380], 'ハイ': [380, 390, 400, 410, 420, 430] }, lever: [55, 75, 110, 140], l8: [70, 60, 50, 40],camber: ['0°'], w1: [320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    casterLimit: 105, blockSmallWheels: true, tireBrand: 'IRC'
  },
  SX_SR: {
    title: "SX / SR シリーズ",
    baseModels: [{ id: 'sx', name: 'No.1 SX [サイドレザー]', no: 'No.1', price: 119000 }, { id: 'sr', name: 'No.2 SR [サイドカバー]', no: 'No.2', price: 157000 }],
    frameOptions: { shape: ['タイプII', 'タイプIII'], length: ['ショート', 'ロング'], height: ['レギュラー', 'ハイ', 'フラット'] },
    frameMap: { 'タイプII-ショート-レギュラー': 'No.211', 'タイプII-ショート-ハイ': 'No.212', 'タイプII-ショート-フラット': 'No.213', 'タイプII-ロング-レギュラー': 'No.221', 'タイプII-ロング-ハイ': 'No.222', 'タイプII-ロング-フラット': 'No.223', 'タイプIII-ショート-レギュラー': 'No.311', 'タイプIII-ショート-ハイ': 'No.312', 'タイプIII-ショート-フラット': 'No.313', 'タイプIII-ロング-レギュラー': 'No.321', 'タイプIII-ロング-ハイ': 'No.322', 'タイプIII-ロング-フラット': 'No.323' },
    axleTypes: [{ id: 'axle_a', name: '車軸A (エキセン)', no: 'No.4', price: 0, l8: [70, 50, 30] }, { id: 'axle_b', name: '車軸B (サス)', no: 'No.5', price: 22000, l8: [60, 40] }],
    casterForks: [{ id: 'cz2s', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000 }, { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2', name: 'SFR2 (サス付)', no: 'No.13', price: 39000 }],
    brakes: [{ id: 'br_u', name: 'ダイヤル下付け', no: 'No.22', price: 26000 }, { id: 'br_o', name: 'ダイヤル上付け', no: 'No.21', price: 26000 }, { id: 'br_h', name: 'ホリゾンタル', no: 'No.11', price: 26000 }],
    footrests: [{ id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', price: 24000 }, { id: 'ft_pj_hi', name: 'プレートジョイント hi',  no: 'No.12', price: 27000 }, { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', price: 35000 }, { id: 'ft_ps_hi',  name: 'プレートセパレート hi',  no: 'No.32', price: 27000 }, { id: 'ft_pipe', name: 'パイプジョイント std', no: 'No.21', price: 24000 }],
    wheels: [{ id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000 },{ id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000 }, { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000 }, { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 }, { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000 }],
    options: [{ id: 'opt_arm', name: 'アームレスト', no: 'No.11/13', price: 22000, ah:[250,260,270,280,290,300,310] }, { id: 'opt_flip', name: 'はね上げ式アームレスト', no: 'No.21/23', price: 28000, ah:[270,280,290,300,310,320,330] }, { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 }, { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000 }, { id: 'opt_micro', name: 'リアマイクロホイール', no: 'No.2', price: 22000 }],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], camber: ['0°', '2°'], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    tireBrand: 'KENDA'
  },
  MX_MR: {
    title: "MX / MR シリーズ",
      baseModels: [
    { id: 'mx_base', name: 'MX [サイドレザー]', no: 'MX', price: 0 },
    { id: 'mr_base', name: 'MR [サイドカバー]', no: 'MR', price: 0 },
  ],
    frameOptions: { 
      size: [
        { label: 'Sサイズ', no: 'No.1' }, 
        { label: 'Mサイズ', no: 'No.2' }, 
        { label: 'Lサイズ', no: 'No.3' }
      ] 
    },
    footrests: MX_NEO_FOOTRESTS,
    options: [
      { id: 'opt_arm_mr', name: 'アームレスト (MR用)', no: 'No.1', price: 22000, ahLow:[250, 260, 270], ahHigh:[270, 280, 290, 300, 310] },
      { id: 'opt_flip', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000, 
        ahLow: [260, 270, 280, 290, 300], 
        ahHigh: [300, 310, 320, 330, 340] 
      },
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1', price: 17000 },
      { id: 'opt_micro', name: 'リア・マイクロホイール', no: 'No.2', price: 22000 },
      { id: 'opt_suit_mx', name: 'スーツガード (MX用)', no: 'No.1', price: 6200 },
      { id: 'opt_wide_add', name: 'ワイドキャスター加算', no: 'No.2', price: 8000 }
    ],
    dimensionRules: {
      h4: { 
        'ロー': [280, 290, 300, 310, 320, 330], 
        'ミディアム': [330, 340, 350, 360, 370, 380], 
        'ハイ': [380, 390, 400, 410, 420, 430], 
        'スーパーハイ': [440, 450, 460, 470, 480] 
      },
      w1: [280, 300, 320, 340, 360, 380, 400, 420], 
      l1: [330, 350, 380, 420], 
      camber: ['0°', '2°'], 
      w2: [5, 10, 15, 20, 25, 30], 
      l8: [80, 60, 40],
      lever: [55, 75, 110, 140]
    },
    tireBrand: 'KENDA'
  },
  NEO: {
    title: "NEO",
    baseModels: [
      { id: 'neo_base', name: 'NEO 本体（標準）', no: 'NEO-STD', priceKey: 'neo.base' },
    ],
    frameOptions: {
      type: [
        { label: 'ショート+ロー', no: 'No.1' },
        { label: 'ショート+ミディアム', no: 'No.2' },
        { label: 'ロング+ロー', no: 'No.3' },
        { label: 'ロング+ミディアム', no: 'No.4' },
        { label: 'ロング+ハイ', no: 'No.5' }
      ],
      shape: [
        { label: 'アップ', no: 'No.1' },
        { label: 'スムーズ', no: 'No.2' }
      ]
    },
    footrests: MX_NEO_FOOTRESTS,
    options: [
      { id: 'opt_arm', name: 'アームレスト', no: '標準', price: 0,
        ahLow: [260, 270, 280, 290, 300, 310],
        ahHigh: [290, 300, 310, 320, 330, 340, 350]
      },
      { id: 'opt_flip', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000,
        ahLow: [270, 280, 290, 300, 310], 
        ahHigh: [310, 320, 330, 340, 350] 
      },
      { id: 'opt_arm_detachable', name: 'アームレスト着脱加工', no: 'No.1', price: 4000 },
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 },
      { id: 'opt_assist_grip', name: '介助用グリップ', no: 'No.12', price: 8000 },
      { id: 'opt_bush_handle_slide', name: 'ブッシュハンドルスライド式', no: 'No.2/4', price: 32000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1', price: 17000 },
      { id: 'opt_micro', name: 'リア・マイクロホイール', no: 'No.2', price: 22000 },
      { id: 'opt_fender_neo', name: '樹脂製フェンダー', no: 'No.1', price: 27000 },
      { id: 'opt_straight_pipe', name: 'ストレートパイプ', no: 'No.1', price: -5000 },
      { id: 'opt_wide_add', name: 'ワイドキャスター加算', no: 'No.2', price: 8000 }
    ],
    dimensionRules: {
      h4: { 
        'ロー': [280, 290, 300, 310, 320, 330], 
        'ミディアム': [330, 340, 350, 360, 370, 380], 
        'ハイ': [380, 390, 400, 410, 420, 430], 
        'スーパーハイ': [440, 450, 460, 470, 480] 
      },
      lever: [55, 75, 110, 140],
      offset: ['0', '-20', '-40'],
      sbMap: {
        '0': [74, 82, 90, 98, 106],
        '-20': [82, 90, 98, 106, 114],
        '-40': [90, 98, 106, 114, 122]
      },
      l8Map: {
        '0': [80, 60, 40, 20],
        '-20': [60, 40, 20, 0],
        '-40': [40, 20, 0, -20]
      },
      l1Map: {
        '0': [350, 380, 420],
        '-20': [330, 360, 400],
        '-40': [310, 340, 380]
      },
      w1: [280, 300, 320, 340, 360, 380, 400, 420],
      camber: ['0°'],
      w2: [5, 10, 15, 20, 25, 30]
    },
    tireBrand: 'KENDA'
  },
  NEOplus: {
    title: "NEOplus",
    baseModels: [{ id: 'neop_base', name: 'NEOplus フレームユニット', no: 'ATO方式', price: 118000 }],
    frameOptions: { shape: ['アップ', 'スムーズ'], length: ['ショート', 'ロング'], height: ['ロー', 'ミディアム', 'ハイ'] },
    frameMap: { 'アップ-ショート-ロー': 'No.111', 'スムーズ-ショート-ロー': 'No.112', 'アップ-ショート-ミディアム': 'No.121', 'スムーズ-ショート-ミディアム': 'No.122', 'アップ-ロング-ロー': 'No.211', 'スムーズ-ロング-ロー': 'No.212', 'アップ-ロング-ミディアム': 'No.222', 'スムーズ-ロング-ミディアム': 'No.222', 'アップ-ロング-ハイ': 'No.231', 'スムーズ-ロング-ハイ': 'No.232' },
    casterForks: [{ id: 'cz2s_n', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000 }, { id: 'cz2p_n', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2_n', name: 'SFR2 (サス付)', no: 'No.13', price: 39000 }],
    brakes: [{ id: 'br_u_n', name: 'ダイヤル下付け', no: 'No.22', price: 26000 }, { id: 'br_o_n', name: 'ダイヤル上付け', no: 'No.21', price: 26000 }, { id: 'br_h_n', name: 'ホリゾンタル', no: 'No.11', price: 26000 }],
    footrests: [{ id: 'ft_pj_std_n', name: 'プレートジョイント std', no: 'No.11', price: 24000 }, { id: 'ft_pj_hi_n', name: 'プレートジョイント hi', no: 'No.12', price: 27000 }, { id: 'ft_ps_std_n', name: 'プレートセパレート std', no: 'No.31', price: 35000 }, { id: 'ft_ps_hi_n', name: 'プレートセパレート hi', no: 'No.32', price: 27000 }, { id: 'ft_pipe_n', name: 'パイプジョイント std', no: 'No.21', price: 24000 }],
    wheels: [{ id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000 }, { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000 }, { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000 }, { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 }, { id: 'mx4_n', name: 'MX4', no: 'No.45', price: 36000 }, { id: 'kaid_n', name: '介助ブレーキ付', no: 'No.65', price: 55000 }],
    options: [{ id: 'opt_grip', name: 'グリップ', no: 'No.34', price: 6000 },{ id: 'opt_assist_n', name: '介助用グリップ', no: 'No.12', price: 8000 },{ id: 'opt_bush_handle_slide', name: 'ブッシュハンドルスライド式', no: 'No.2', price: 32000 },{ id: 'opt_arm_ln', name: 'アームレスト (No.11/13)', no: 'No.11/13', price: 22000, ahLow:[260, 270, 280, 290, 300, 310], ahHigh:[290, 300, 310, 320, 330, 340, 350] },{ id: 'opt_flip', name: 'はね上げ式アームレスト', no: 'No.21/23', price: 28000, ahLow:[290,300,310,320,330], ahHigh:[310,320,330,340,350] },{ id: 'opt_fender_n', name: '樹脂製フェンダー', no: 'No.1', price: 27000 },{ id: 'opt_micro', name: 'リアマイクロホイール', no: 'No.2', price: 22000 },],
    dimensionRules: { 
      h4: { 'ロー': [280, 290, 300, 310, 320, 330], 'ミディアム': [330, 340, 350, 360, 370, 380], 'ハイ': [380, 390, 400, 410, 420, 430], 'スーパーハイ': [440, 450, 460, 470, 480] }, 
      lever: [55, 75, 110, 140], 
      offset: ['0', '-20', '-40'], 
      sbMap: { '0': [70, 74, 78, 82, 86, 90, 94, 98, 102, 106], '-20': [78, 82, 86, 90, 94, 98, 102, 106, 110, 114], '-40': [86, 90, 94, 98, 102, 106, 110, 114, 118, 122] }, 
      l8Map: { '0': [90, 80, 70, 60, 50, 40, 30, 20, 10], '-20': [70, 60, 50, 40, 30, 20, 10, 0, -10], '-40': [50, 40, 30, 20, 10, 0, -10, -20, -30] }, 
      l1Map: {
        '0': [350, 380, 420],
        '-20': [330, 360, 400],
        '-40': [310, 340, 380]
      },
      camber: ['0°'], 
      w1: [280, 300, 320, 340, 360, 380, 400, 420], 
      w2: [5, 10, 15, 20, 25, 30] 
    },
    tireBrand: 'KENDA'
  },
  Fusion: {
    title: "Fusion シリーズ",
    baseModels: [{ id: 'fusion', name: 'Fusion フレーム', no: 'Fusion', price: 62000 }],
    frameOptions: { length: ['ショート', 'ロング'], height: ['フラット', 'レギュラー'] },
    frameMap: { 'ショート-フラット': 'No.1', 'ショート-レギュラー': 'No.2', 'ロング-フラット': 'No.3', 'ロング-レギュラー': 'No.4' },
    casterForks: [{ id: 'cz2s', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000 }, { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2', name: 'SFR2 (サス付)', no: 'No.13', price: 39000 }],
    brakes: [{ id: 'br_o', name: 'ダイヤル上付け', no: 'No.1', price: 26000 }],
    footrests: COMMON_FOOTRESTS,
    wheels: [{ id: 'kaid', name: '介助ブレーキ付', no: 'No.65', price: 55000 }, { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000 }, { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 }, { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000 }, { id: 'fixed', name: 'ワイヤースポーク固定式', no: 'No.51', price: 17000 }],
    options: [
      { id: 'opt_grip', name: 'グリップ', no: 'No.34', price: 6000 },
      { id: 'opt_flip', name: 'はね上げ式アームレスト', no: 'No.3/4', price: 28000, 
        ahLow: [260, 270, 280, 290, 300, 310],
        ahHigh: [300, 310, 320, 330, 340, 350]
      },
      { id: 'opt_hi_leather', name: 'ハイグレードレザーSET', no: 'No.1', price: 12000 }, 
      { id: 'opt_arm', name: 'アームレスト (ロー/ハイ)', no: 'No.1/2', price: 22000,
        ahLow: [250, 260, 270, 280, 290, 300],
        ahHigh: [290, 300, 310, 320, 330, 340]
      }, 
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 14000 }, 
      { id: 'opt_tip', name: 'ティッピングバー', no: 'No.2', price: 5000 }
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450], 'スーパーハイ': [460,470,480,490,500] }, lever: [55, 75, 110, 140], l8Map: { 'レギュラー': [70, 50, 30, 10, -10], 'フラット': [60, 40, 20, 0, -20] }, camber: ['0°'], sb: [83, 90, 97], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 410], w2: [5, 10, 15, 20, 25, 30] },
    hasCushionCaster: true, tireBrand: 'KENDA'
  },
  GWE: {
  title: "GW-E (電動車いす)",
  baseModels: [{ id: 'gwe', name: 'GW-E フレーム', no: 'GW-E', price: 140000 }],
  frameOptions: {
    shape: [{ label: 'タイプI', no: 'No.1' }, { label: 'タイプIII', no: 'No.3' }],
    height: [{ label: 'レギュラー', no: 'No.1' }, { label: 'フラット', no: 'No.3' }],
    pipe: [{ label: 'ストレート', no: 'No.1' }, { label: 'シボリ', no: 'No.2' }]
  },
  frameMap: { 'タイプI-レギュラー-ストレート': 'No.1', 'タイプIII-レギュラー-ストレート': 'No.3' },
  casterForks: [{ id: 'cz2s_e', name: 'CZ2-Std (アルミ)', no: 'No.52', price: 15000 }, { id: 'sfr2_e', name: 'SFR2 (サス付)', no: 'No.13', price: 39000 }],
  brakes: [{ id: 'br_o_e', name: 'ダイヤル上付け', no: 'No.21', price: 26000 }, { id: 'br_u_e', name: 'ダイヤル下付け', no: 'No.22', price: 26000 }],
  footrests: COMMON_FOOTRESTS,
  options: [
  { id: 'opt_arm_e', name: 'アームレスト着脱加工', no: 'No.1', price: 4000 },
  { id: 'opt_ctrl',  name: 'コントローラースタンド', no: 'No.1', price: 4000 },

  // ★GW-E 標準アームレスト
  {
    id: 'opt_arm',
    name: 'アームレスト',
    no: '標準',
    price: 0,
    ahLowByHeight: {
      'レギュラー': [250, 260, 270, 280],
      'フラット':   [260, 270, 280, 290],
    },
    ahHighByHeight: {
      'レギュラー': [290, 300, 310, 320, 330],
      'フラット':   [300, 310, 320, 330, 340],
    },
  },
],

  dimensionRules: {
    h4: { 'ロー': [280, 290, 300, 310, 320, 330], 'ミディアム': [330, 340, 350, 360, 370, 380], 'ハイ': [380, 390, 400, 410, 420, 430] },
    lever: [55, 75, 110, 140],
    camber: ['0°'],
    w1: [280, 300, 320, 340, 360, 380, 400, 420],
    l1: [350, 380, 420],
    w2: [5, 10, 15, 20, 25, 30],

    // ★フレーム高さで車軸位置(L8)を切替
    offset: ['0', '-20'],
    l8Map: {
      '0': ['0'],       // レギュラー時
      '-20': ['-20']    // フラット時
    }
  },
  tireBrand: null
},

  LX_LR: {
    title: "LX / LR シリーズ",
    baseModels: [
      { id: 'lx_base', name: 'LX [サイドレザー]', no: 'No.11', price: 169000 },
      { id: 'lr_base', name: 'LR [サイドカバー]', no: 'No.12', price: 199000 }
    ],
    frameOptions: { 
      shape: [{label: 'タイプI', no: 'No.1'}, {label: 'タイプII', no: 'No.2'}, {label: 'タイプIII', no: 'No.3'}],
      length: [{label: 'ショート', no: 'No.1'}, {label: 'ロング', no: 'No.2'}],
      height: [{label: 'レギュラー', no: 'No.1'}, {label: 'ハイ', no: 'No.2'}, {label: 'フラット', no: 'No.3'}],
      pipe: [{label: 'ストレート', no: 'No.1'}, {label: 'シボリ', no: 'No.2'}]
    },
    axleTypes: [
      { id: 'lx_l8_pos1', name: 'No.1 70(50)', no: 'No.1', price: 0, valReg: 70, valFlat: 50 },
      { id: 'lx_l8_pos2', name: 'No.2 50(30)', no: 'No.2', price: 0, valReg: 50, valFlat: 30 },
      { id: 'lx_l8_pos3', name: 'No.3 30(10)', no: 'No.3', price: 0, valReg: 30, valFlat: 10 },
    ],
    casterForks: [ { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2_s', name: 'SFR2 ショート', no: 'No.14', price: 39000 }],
    brakes: [{ id: 'br_h_s', name: 'ホリゾンタル (S)', no: 'No.11', price: 26000 }, { id: 'br_o_s', name: 'ダイヤル上付け (S)', no: 'No.21', price: 26000 }, { id: 'br_u_s', name: 'ダイヤル下付け (S)', no: 'No.22', price: 28000 }],
    footrests:[
      { id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', price: 24000 }, 
      { id: 'ft_pipe', name: 'パイプジョイント std', no: 'No.21', price: 24000 }, 
      { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', price: 35000 }
    ],
    wheels: [
      { id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000 },
      { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000 },
      { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000 },
      { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 }
    ],
    options: [
      {
        id: 'opt_arm',
        name: 'アームレスト',
        no: 'No.11/13',
        price: 22000,
        ahLowByHeight: {
          'レギュラー': [250, 260, 270, 280, 290],
          'ハイ':       [230, 240, 250, 260],
          'フラット':   [240, 250, 260, 270, 280],
        },
        ahHighByHeight: {
          'レギュラー': [280, 290, 300, 310, 320, 330],
          'ハイ':       [250, 260, 270, 280, 290, 300],
          'フラット':   [270, 280, 290, 300, 310, 320],
        },
      },
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 },
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000 },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    tireBrand: 'IRC'
  },
  FX_FR: {
    title: "FX / FR シリーズ",
    baseModels: [
      { id: 'fx_base', name: 'FX [サイドレザー]', no: 'No.1', price: 149000 },
      { id: 'fr_base', name: 'FR [サイドカバー]', no: 'No.2', price: 180000 }
    ],
    frameOptions: { 
      length: [{label: 'ショート', no: 'No.1'}, {label: 'ロング', no: 'No.2'}],
      height: [{label: 'レギュラー', no: 'No.1'}, {label: 'ハイ', no: 'No.2'}, {label: 'フラット', no: 'No.3'}],
      pipe: [{label: 'ストレート', no: 'No.1'}, {label: 'シボリ', no: 'No.2'}]
    },
    axleTypes: [
      { id: 'fx_l8_pos1', name: 'No.1 70(50)', no: 'No.1', price: 0, valReg: 70, valFlat: 50 },
      { id: 'fx_l8_pos2', name: 'No.2 50(30)', no: 'No.2', price: 0, valReg: 50, valFlat: 30 },
      { id: 'fx_l8_pos3', name: 'No.3 30(10)', no: 'No.3', price: 0, valReg: 30, valFlat: 10 },
    ],
    casterForks: [{ id: 'cz2s', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000 }, { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000 }, { id: 'sfr2_s', name: 'SFR2 ショート', no: 'No.14', price: 39000 }],
    brakes: [{ id: 'br_h_s', name: 'ホリゾンタル (S)', no: 'No.11', price: 26000 }, { id: 'br_o_s', name: 'ダイヤル上付け (S)', no: 'No.21', price: 26000 }, { id: 'br_u_s', name: 'ダイヤル下付け (S)', no: 'No.22', price: 28000 }],
    footrests: [
      { id: 'ft_plate', name: 'アルミプレート', no: 'No.11', price: 24000 },
      { id: 'ft_pipe_fx', name: 'パイプ', no: 'No.21', price: 24000 }
    ],
    wheels: [
      { id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000 },
      { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000 },
      { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000 },
      { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000 },
      { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000 }
    ],
    options: [
      {
        id: 'opt_arm',
        name: 'アームレスト',
        no: 'No.11/13',
        price: 22000,
        ahLowByHeight: {
          'レギュラー': [250, 260, 270, 280, 290],
          'ハイ':       [230, 240, 250, 260],
          'フラット':   [240, 250, 260, 270, 280],
        },
        ahHighByHeight: {
          'レギュラー': [280, 290, 300, 310, 320, 330],
          'ハイ':       [250, 260, 270, 280, 290, 300],
          'フラット':   [270, 280, 290, 300, 310, 320],
        },
      },
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000 },
      { id: 'opt_bg', name: 'バックグリップ', no: 'No.1', price: 10000 },
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000 },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    tireBrand: 'IRC'
  }
};

// ===============================
// 背角度（固定表示用ルール）
// ===============================
const BACK_ANGLE_RULES = {
  GWX3: () => '86°',
  SX_SR: (frameParts) => {
    const h = frameParts?.height?.label ?? frameParts?.height ?? '';
    if (String(h).includes('フラット')) return '90°';
    return '88°';
  },
  MX_MR: () => '86°',
  GWE: () => '86°',
  LX_LR: (frameParts) => {
    const h = frameParts?.height?.label ?? frameParts?.height ?? '';
    if (String(h).includes('フラット')) return '90°';
    return '88°';
  },
  FX_FR: (frameParts) => {
    const h = frameParts?.height?.label ?? frameParts?.height ?? '';
    if (String(h).includes('フラット')) return '90°';
    return '88°';
  },
};

const SelectionGroup = ({ title, items, selectionKey, dynamicNameFn, isInvalid, selections, setSelections }) => (
  <div className={`rounded-2xl shadow-sm overflow-hidden mb-6 border-2 ${isInvalid ? 'border-red-500 bg-red-50' : 'border border-slate-200 bg-white'}`}>
    <div className={`px-5 py-3 border-b flex items-center gap-2 font-bold text-slate-800 tracking-widest uppercase text-xs ${isInvalid ? 'border-red-200 bg-red-100' : 'border-slate-200 bg-slate-50'}`}>{title}</div>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {(items || []).map(item => (
        <button key={item.id} type="button" onClick={() => setSelections(prev => ({ ...prev, [selectionKey]: item }))} className={`flex flex-col p-4 border rounded-xl text-left transition-all ${selections[selectionKey]?.id === item.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
          <span className="text-[10px] font-black text-blue-500 uppercase mb-1">{item.no}</span>
          <span className="text-sm font-bold text-slate-700 leading-tight">{dynamicNameFn ? dynamicNameFn(item) : item.name}</span>
          <span className="text-[11px] font-mono font-black text-slate-400 mt-2">{itemPrice(item) === 0 ? "標準" : (itemPrice(item) > 0 ? `+¥${itemPrice(item).toLocaleString()}` : `¥${itemPrice(item).toLocaleString()}`)}</span>
        </button>
      ))}
    </div>
  </div>
);

const App = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
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

  const [dimensions, setDimensions] = useState({ w1: '', l1: '', offset: '', h4Type: '', h4Val: '', sb: '', l8: '', cm: '', lever: '', w2: '' });
  const [remarks, setRemarks] = useState('');
  const [gweUnitDetail, setGweUnitDetail] = useState({ unitId: '', parts: {} });
  const [armrestSel, setArmrestSel] = useState({ kind: '', lh: '', ah: '' });

  const currentCatalog = useMemo(() => selectedSeries ? CATALOG[selectedSeries] : null, [selectedSeries]);

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
    if (currentCatalog.dimensionRules?.l8Map) {
      return currentCatalog.dimensionRules.l8Map[dimensions.offset] || [];
    }
    return currentCatalog.dimensionRules?.l8 || selections.axleType?.l8 || [70, 50, 30];
  }, [currentCatalog, selectedSeries, frameParts.height, selections.axleType, dimensions.offset]);

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
    if (size === '24インチ' && brand[size]) return brand[size];
    return [brand.default(size)];
  }, [currentCatalog, selections.wheelSize]);

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
    const findById = (id) => currentCatalog.options.find(o => o.id === id);
    const findByNameIncludes = (kw) => currentCatalog.options.find(o => (o.name || '').includes(kw));

    const zzrLow = findById('opt_arm_l');
    const zzrHigh = findById('opt_arm_h');
    let armBase = (selectedSeries === 'MX_MR') ? (selections.baseModel?.id === 'mr_base' ? findById('opt_arm_mr') : null) || findById('opt_arm') || findByNameIncludes('アームレスト') : findById('opt_arm') || findById('opt_arm_ln') || findByNameIncludes('アームレスト');

    const flipBase = findById('opt_flip') || findByNameIncludes('はね上げ式アームレスト');

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

    const arm = (zzrLow || zzrHigh) ? { low: zzrLow ? { ...zzrLow, baseId: zzrLow.id, name: 'アームレスト ロー' } : null, high: zzrHigh ? { ...zzrHigh, baseId: zzrHigh.id, name: 'アームレスト ハイ' } : null } : buildFromCombined(armBase, 'アームレスト');
    const flip = buildFromCombined(flipBase, 'はね上げ式アームレスト');
    return { arm, flip };
  }, [currentCatalog, frameParts.height, selectedSeries, selections.baseModel?.id]);

  const upsertArmrestOption = useCallback((next) => {
    setSelectedOptions(prev => {
      const removed = prev.filter(o => !(o && o.__group === 'ARMREST'));
      return next ? [...removed, next] : removed;
    });
  }, []);

  useEffect(() => {
    if (!armrestSel.kind || !armrestSel.lh || !armrestSel.ah) { upsertArmrestOption(null); return; }
    const group = armrestSel.kind === 'arm' ? armrestConfig.arm : armrestConfig.flip;
    const base = armrestSel.lh === 'ロー' ? group?.low : group?.high;
    if (!base) { upsertArmrestOption(null); return; }
    let calculatedPrice = base.price || 0;
    const isStandardZeroSeries = (selectedSeries === 'NEO' || selectedSeries === 'GWE' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base'));
    if (isStandardZeroSeries) {
      calculatedPrice = armrestSel.kind === 'arm' ? 0 : 6000;
    } else if (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mr_base') {
      calculatedPrice = armrestSel.kind === 'arm' ? 22000 : 28000;
    }
    upsertArmrestOption({ id: `${base.id}__${armrestSel.ah}`, name: base.name, no: base.no, price: calculatedPrice, note: `アームレスト高 ${armrestSel.ah}mm`, __group: 'ARMREST' });
  }, [armrestSel, armrestConfig, upsertArmrestOption, selectedSeries, selections.baseModel]);

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(null);

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
  const dimensionOptsMap = useMemo(() => {
    if (!currentCatalog?.dimensionRules) return {};
    const lockSbSeries = new Set(['GWX3', 'MX_MR', 'GWE', 'LX_LR', 'FX_FR', 'SX_SR']);
    const isSbLocked = lockSbSeries.has(selectedSeries) && !!derivedBackAngleValue;
    const sbOpts = isSbLocked ? [derivedBackAngleValue] : (currentCatalog.dimensionRules.sbMap ? (currentCatalog.dimensionRules.sbMap[dimensions.offset] || []) : (currentCatalog.dimensionRules.sb || []));
    let l1Opts = [];
    if (selectedSeries === 'MX_MR' && frameParts.size?.label) {
      l1Opts = frameParts.size.label === 'Sサイズ' ? ['330'] : ['350', '380', '420'];
    } else {
      l1Opts = currentCatalog.dimensionRules.l1Map ? (currentCatalog.dimensionRules.l1Map[dimensions.offset] || []) : (currentCatalog.dimensionRules.l1 || []);
    }
    return {
      offset: (selectedSeries === 'NEOplus' || selectedSeries === 'NEO') ? (currentCatalog.dimensionRules.offset || []) : [],
      h4Type: Object.keys(currentCatalog.dimensionRules.h4 || {}),
      h4Val: (currentCatalog.dimensionRules.h4?.[dimensions.h4Type] || []).map(String),
      l8: (l8Options || []).map(String),
      lever: (currentCatalog.dimensionRules.lever || []).map(String),
      w1: (currentCatalog.dimensionRules.w1 || []).map(String),
      l1: (l1Opts || []).map(String),
      sb: (sbOpts || []).map(String),
      w2: (currentCatalog.dimensionRules.w2 || []).map(String),
      cm: (camberOptions || []).map(String)
    };
  }, [currentCatalog, selectedSeries, dimensions.offset, dimensions.h4Type, frameParts.size, derivedBackAngleValue, l8Options, camberOptions]);

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

  // 確定表示前にチェックする必須項目（オプション・アクセサリー・選択肢1つの寸法は除く）
  const DIMENSION_LABELS = { offset: 'オフセット', h4Type: 'H4 バック高（タイプ）', h4Val: 'H4 バック高（値）', l8: '車軸/ﾚﾊﾞｰ長 (L8)', lever: 'ﾚﾊﾞｰ長', w1: '座幅(W1)', l1: '座奥行(L1)', sb: 'バックレスト角(SB)', w2: 'ハンドリム間隔(W2)', cm: 'キャンバー' };
  const missingRequiredItems = useMemo(() => {
    const missing = [];
    if (!selectedSeries || !currentCatalog) return missing;

    if (selectedSeries !== 'NEO' && currentCatalog.baseModels?.length && !selections.baseModel) missing.push('基本構成モデル');
    if ((selectedSeries === 'MX_MR' || selectedSeries === 'NEO') && !selections.package) missing.push('パッケージ');

    if (currentCatalog.frameOptions) {
      const frameLabels = { type: 'フレームタイプ', shape: selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状', length: '長さ', height: '高さ', pipe: 'フロントパイプ', size: 'サイズ' };
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

    if (currentCatalog.axleTypes?.length && !selections.axleType) missing.push('車軸タイプ');
    if (currentCatalog.casterForks?.length && !selections.casterFork) missing.push('キャスターフォーク');
    if (!casterWheelType) missing.push('キャスターホイール（種類）');
    if (casterWheelType && !casterWheelSize) missing.push('キャスターホイール（サイズ）');

    if (currentCatalog.footrests?.length && !selections.footrest) missing.push('フットレスト');
    if (currentCatalog.brakes?.length && !selections.brake) missing.push('ブレーキシステム');

    if (selectedSeries !== 'GWE') {
      if (currentCatalog.wheels?.length && !selections.wheel) missing.push('メインホイール（種類）');
      if (!selections.wheelSize) missing.push('メインホイール（サイズ）');
      if (currentCatalog?.tireBrand && !selections.tire) missing.push('タイヤカラー');
      if (HANDRIM_OPTIONS?.length && !selections.handrim) missing.push('ハンドリム');
    }

    Object.entries(dimensionOptsMap || {}).forEach(([key, opts]) => {
      const arr = Array.isArray(opts) ? opts : [];
      if (arr.length <= 1) return;
      if (key === 'h4Type' || key === 'h4Val') {
        if (key === 'h4Type' && !dimensions.h4Type) missing.push(DIMENSION_LABELS.h4Type);
        if (key === 'h4Val' && dimensions.h4Type && (!dimensions.h4Val || String(dimensions.h4Val).trim() === '')) missing.push(DIMENSION_LABELS.h4Val);
        return;
      }
      const val = dimensions[key];
      if (val === undefined || val === null || String(val).trim() === '') missing.push(DIMENSION_LABELS[key] || key);
    });

    if (armrestSel.kind && (!armrestSel.lh || !armrestSel.ah)) missing.push('アームレスト（高低・高さ）');

    return missing;
  }, [selectedSeries, currentCatalog, selections, frameParts, dimensionOptsMap, dimensions, casterWheelType, casterWheelSize, gweUnitDetail, armrestSel]);

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

  const totalAmount = useMemo(() => {
    let sum = 0;
    const list = [selections.baseModel, selections.package, selections.axleType, selections.casterFork, selections.brake, selections.footrest, selections.wheel, selections.handrim, casterWheelType];
    list.forEach(item => { if (item) sum += itemPrice(item); });
    
    // 塗装価格計算
    const activePlan = PAINT_PLANS.find(p => p.id === paint.type);
    if (activePlan) sum += getPrice(activePlan.priceKey);

    (selectedOptions || []).forEach(o => sum += itemPrice(o));
    (selectedAccessories || []).forEach(a => sum += itemPrice(a));
    if (selectedSeries === 'GWE' && gweUnitDetail?.unitId) {
      const u = GWE_UNIT_DETAIL_MASTER[gweUnitDetail.unitId];
      sum += getPrice(u.basePriceKey);
      Object.values(gweUnitDetail.parts || {}).forEach(p => { if (p) sum += itemPrice(p); });
    }
    return sum;
  }, [selections, casterWheelType, selectedOptions, selectedAccessories, paint, selectedSeries, gweUnitDetail]);

  const totalLineItems = useMemo(() => {
    const items = [];
    const add = (label, item) => { 
      if (item) {
        let name = item.name || item.type;
        if (label === '車軸' && ['LX_LR', 'FX_FR'].includes(selectedSeries)) name = getAxleDisplayName(item);
        items.push({ label, name, no: item.no, price: itemPrice(item) }); 
      }
    };
    add('本体・機種', selections.baseModel);
    add('パッケージ', selections.package);

    // フレーム構成要素の追加（記入No.があるものを個別行として表示）
    Object.entries(frameParts).forEach(([key, value]) => {
      if (value && value.no) {
        let label = "";
        switch(key) {
          case 'type': label = 'フレームタイプ'; break;
          case 'shape': label = (selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状'); break;
          case 'length': label = '長さ'; break;
          case 'height': label = '高さ'; break;
          case 'pipe': label = 'フロントパイプ'; break;
          case 'size': label = 'サイズ'; break;
          default: label = 'フレーム構成';
        }
        items.push({ label, name: value.label, no: value.no, price: 0 });
      }
    });

   add('車軸', selections.axleType);

// ① キャスターフォーク
add('キャスターフォーク', selections.casterFork);

// ② キャスターホイール
if (casterWheelSize) {
  items.push({
    label: 'キャスターホイール',
    name: `${casterWheelType?.type} ${casterWheelSize.label}`,
    no: casterWheelSize.no,
    price: itemPrice(casterWheelType)
  });
}

// ③ フットレスト
add('フットレスト', selections.footrest);

// ④ ブレーキ
add('ブレーキ', selections.brake);

// ⑤ ホイール
if (selections.wheel) {
  items.push({
    label: 'ホイール',
    name: selections.wheel.name,
    no: getWheelNo(selections.wheel, selections.wheelSize),
    price: selections.wheel.price
  });
}

// ⑥ タイヤ
if (selections.tire && currentCatalog?.tireBrand) {
  items.push({
    label: 'タイヤ',
    name: `${selections.tire.name} (${currentCatalog.tireBrand})`,
    no: selections.tire.no,
    price: 0
  });
}

// ⑦ ハンドリム
add('ハンドリム', selections.handrim);

    
    const activePlan = PAINT_PLANS.find(p => p.id === paint.type);
    if (activePlan) items.push({ label: '塗装プラン', name: activePlan.name, no: '塗装', price: getPrice(activePlan.priceKey) });
    
    let colorDisplay = paint.type === 'standard' ? (paint.standardColor || '選択') : '';
    if (paint.type !== 'standard') {
      const customColors = paint.customColors.filter(c => c.trim() !== '');
      if (customColors.length > 0) colorDisplay = customColors.join(' / ');
    }
    items.push({ label: '塗装色', name: colorDisplay, no: '色', price: 0 });

    if (selectedSeries === 'GWE' && gweUnitDetail?.unitId) {
      const u = GWE_UNIT_DETAIL_MASTER[gweUnitDetail.unitId];
      items.push({ label: '電動ユニット', name: u.name, no: u.no, price: getPrice(u.basePriceKey) });
      Object.entries(gweUnitDetail.parts || {}).forEach(([gk, p]) => { if (p) items.push({ label: 'ユニット詳細', name: p.name, no: p.no, price: itemPrice(p) }); });
    }
    
    return items;
  }, [selections, frameParts, selectedSeries, casterWheelType, casterWheelSize, selectedOptions, selectedAccessories, paint, gweUnitDetail, currentCatalog, getWheelNo, getAxleDisplayName]);

  const performSeriesReset = useCallback((key) => {
    const cat = CATALOG[key];
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
    setDimensions({ w1: '', l1: '', offset: '', h4Type: '', h4Val: '', sb: '', l8: '', cm: '', lever: '', w2: '' });
    setShowMissingRequired([]);
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

  // PDF作成機能の実装
  const handleDownloadPDF = async () => {
    // jsPDFライブラリの動的読み込み
    if (!window.jspdf) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      await new Promise(resolve => {
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
doc.setFont("NotoSansJP", "normal");

   
// 🔥 ここから追加
const fontBase64 = await fetch("./NotoSansJP-Regular.base64.txt").then(r => r.text());

doc.addFileToVFS("NotoSansJP-Regular.ttf", fontBase64);
doc.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
doc.setFont("NotoSansJP");
// 🔥 ここまで追加
 
    // 設定値
    const margin = 12; // 余白 12mm
    const pageWidth = 210;
    const pageHeight = 297;
    const contentWidth = pageWidth - (margin * 2);
    let y = margin;

    // ヘルパー関数: テキスト描画
    const addText = (text, x, y, size = 10, style = 'normal', align = 'left') => {
  doc.setFont("NotoSansJP");
  doc.setFontSize(size);
  if (align === 'right') {
    doc.text(String(text || ""), x, y, { align: 'right' });
  } else {
    doc.text(String(text || ""), x, y);
  }
};


    // ヘッダー描画
    const drawHeader = (pageNum) => {
      doc.setDrawColor(0);
      doc.setLineWidth(0.5);
      addText(`OX ENGINEERING ORDER MANIFEST`, margin, margin + 5, 16);
      addText(`作成日: ${new Date().toISOString().split('T')[0]}  PAGE: ${pageNum}`, pageWidth - margin, margin + 5, 8, 'normal', 'right');
      doc.line(margin, margin + 8, pageWidth - margin, margin + 8);
    };

    // フッター描画（最終ページ固定）
    const drawFinalFooter = () => {
      const totalPages = doc.internal.getNumberOfPages();
      doc.setPage(totalPages);
      doc.setFontSize(8);
      doc.setTextColor(100);
      const footerY = pageHeight - 15;
      doc.text("本注文書を下記メールアドレスへ送付してください", margin, footerY);
      doc.text("送付先：〇〇〇〇＠oxxxxx.co.jp", margin, footerY + 5);
      doc.setTextColor(0);
    };

    // ファイル名生成 (作成日_ox_機種_販売店名.pdf)
    const today = new Date().toISOString().split('T')[0];
    const seriesName = selectedSeries || "unknown";
    const dealer = customerInfo.dealerName || "store";
    const rawFileName = `${today}_ox_${seriesName}_${dealer}.pdf`;
    const fileName = rawFileName.replace(/[\\/:*?"<>|]/g, ""); // 禁止文字の除去

    // 1ページ目開始
    drawHeader(1);
    y = margin + 20;

    // 顧客・販売店情報
    doc.setFillColor(245);
    doc.rect(margin, y - 5, contentWidth, 15, 'F');
    addText(`販売店名: ${customerInfo.dealerName}`, margin + 5, y + 2, 10);
    addText(`担当者名: ${customerInfo.salesPerson}`, margin + 80, y + 2, 10);
    addText(`ユーザー名: ${customerInfo.userName || "---"}`, margin + 140, y + 2, 10);
    y += 25;

    // 仕様明細
    addText("01. 基本構成・パーツ", margin, y, 11);
    y += 8;
    
    doc.setLineWidth(0.1);
    totalLineItems.forEach((item) => {
      // 改ページ判定
      if (y > pageHeight - 40) {
        doc.addPage();
        drawHeader(doc.internal.getNumberOfPages());
        y = margin + 20;
      }

      addText(item.label, margin + 2, y, 9);
      addText(item.name, margin + 40, y, 9);
      addText(item.no, margin + 120, y, 9);
      addText(item.price === 0 ? "込" : yen(item.price), pageWidth - margin - 2, y, 9, 'normal', 'right');
      
      y += 6;
      doc.setDrawColor(230);
      doc.line(margin, y - 1, pageWidth - margin, y - 1);
      doc.setDrawColor(0);
    });

    // 寸法
    y += 10;
    if (y > pageHeight - 50) { doc.addPage(); drawHeader(doc.internal.getNumberOfPages()); y = margin + 20; }
    addText("02. 指定寸法一覧", margin, y, 11);
    y += 8;
    const dimList = Object.entries(dimensions);
    const dimLabels = { offset: 'オフセット', h4Type: 'H4 バック高（タイプ）', h4Val: 'H4 バック高（値）', l8: '車軸/ﾚﾊﾞｰ長 (L8)', lever: 'ﾚﾊﾞｰ長', w1: '座幅(W1)', l1: '座奥行(L1)', sb: 'バックレスト角(SB)', w2: 'ハンドリム間隔(W2)', cm: 'キャンバー' };
    dimList.forEach(([k, v], idx) => {
      const col = idx % 4;
      const row = Math.floor(idx / 4);
      addText(`${dimLabels[k] || k.toUpperCase()}: ${v}`, margin + (col * 45), y + (row * 6), 9);
      if (col === 3 || idx === dimList.length - 1) {
        // 行が終わる際にyを更新（最後の行の計算用）
        if (idx === dimList.length - 1) y += (row * 6) + 10;
      }
    });

    // オプション（別紙扱いになりやすい項目）
    const extras = [...selectedOptions, ...selectedAccessories].filter(o => o.__group !== 'ARMREST');
    if (extras.length > 0) {
      if (y > pageHeight - 40) { doc.addPage(); drawHeader(doc.internal.getNumberOfPages()); y = margin + 20; }
      addText("03. オプション & アクセサリー", margin, y, 11);
      y += 8;
      extras.forEach(opt => {
        if (y > pageHeight - 30) {
          doc.addPage();
          drawHeader(doc.internal.getNumberOfPages());
          y = margin + 20;
        }
        addText(`[${opt.no}] ${opt.name}`, margin + 2, y, 9);
        addText(yen(itemPrice(opt)), pageWidth - margin - 2, y, 9, 'normal', 'right');
        y += 6;
      });
    }

    // 備考
    if (remarks) {
      y += 10;
      if (y > pageHeight - 40) { doc.addPage(); drawHeader(doc.internal.getNumberOfPages()); y = margin + 20; }
      addText("04. 備考・特記事項", margin, y, 11);
      y += 8;
      const splitRemarks = doc.splitTextToSize(remarks, contentWidth - 10);
      doc.text(splitRemarks, margin + 5, y);
      y += (splitRemarks.length * 5) + 10;
    }

    // 合計金額（最終ページの固定位置付近）
    y = Math.max(y, pageHeight - 50);
    doc.setFillColor(30, 41, 59); // Slate-900相当
    doc.rect(margin, y, contentWidth, 15, 'F');
    doc.setTextColor(255);
    addText("合計金額 (概算)", margin + 5, y + 10, 10);
    addText(yen(totalAmount), pageWidth - margin - 5, y + 10, 14, 'bold', 'right');

    // フッター描画
    drawFinalFooter();

    // 出力（iPhone対策）
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// ① Blob を作る
const blob = doc.output("blob");

// ② iPhoneは共有（対応していれば「ファイルに保存」できる）
if (isIOS) {
  try {
    const file = new File([blob], fileName, { type: "application/pdf" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: fileName,
      });
      return; // ここで終了
    }
  } catch (e) {
    // share失敗時は下へ
  }

  // ③ 共有が無理なら、新しいタブでPDFを開く（そこから共有→保存）
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
  return;
}

// ④ PCなどは従来どおりダウンロード
doc.save(fileName);
  };

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

      <nav className="bg-slate-900 text-white p-5 fixed top-0 inset-x-0 z-50 shadow-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2.5 rounded-xl"><Settings size={20} /></div>
            <div>
              <h1 className="font-black text-base md:text-lg leading-none uppercase tracking-widest">Configurator</h1>
              <p className="text-[9px] opacity-40 uppercase tracking-[0.3em] mt-1 font-bold">2025 v5.9 Stable</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-blue-400 uppercase mb-1 leading-none">Subtotal</span>
              <span className="text-2xl font-black font-mono tracking-tighter text-blue-400 leading-none">¥{totalAmount.toLocaleString()}</span>
            </div>
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
              className="bg-blue-600 px-8 py-3 rounded-xl font-black text-xs hover:bg-blue-700 disabled:opacity-20 flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >確定表示 <ChevronRight size={16} /></button>
          </div>
        </div>
      </nav>

      {showMissingRequired.length > 0 && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-amber-500 text-slate-900 shadow-lg border-b border-amber-600">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <AlertTriangle size={20} className="flex-shrink-0 text-amber-700" />
            <p className="font-black text-sm uppercase tracking-wide">未記入があります</p>
          </div>
        </div>
      )}

      <div className={showMissingRequired.length > 0 ? 'h-[52px]' : 'h-[92px]'} />

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {!isConfirmed ? (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            <div className="xl:col-span-8 space-y-4">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <h2 className="text-xl font-black mb-6 flex items-center gap-3 tracking-widest uppercase leading-none">
                  <Truck size={24} className="text-slate-400" /> 1. 機種シリーズ選択
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.keys(CATALOG).map(key => (
                    <button key={key} type="button" onClick={() => handleSeriesSelect(key)} className={`p-4 border-2 rounded-2xl transition-all text-left ${selectedSeries === key ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 bg-white hover:border-blue-300'}`}>
                      <p className={`text-[10px] font-bold mb-1 uppercase tracking-widest ${selectedSeries === key ? 'text-blue-600' : 'text-slate-400'}`}>Model</p>
                      <p className="font-black text-sm md:text-base tracking-tighter uppercase">{CATALOG[key].title}</p>
                    </button>
                  ))}
                </div>
              </div>

              {currentCatalog && (
                <div className="space-y-4 animate-in">
                  <h2 className="text-xl font-black mb-6 flex items-center gap-3 mt-12 border-b border-slate-200 pb-4 uppercase tracking-widest">
                    <Package size={24} className="text-blue-600" /> 2. 仕様パーツ構成
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
                          const frameCatLabel = cat === 'type' ? 'フレームタイプ' : cat === 'shape' ? (selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状') : cat === 'length' ? '長さ' : cat === 'height' ? '高さ' : cat === 'size' ? 'サイズ' : 'フロントパイプ';
                          const frameCatInvalid = showMissingRequired.includes(frameCatLabel);
                          return (
                          <div key={cat} className={`space-y-3 rounded-xl p-3 border-2 ${frameCatInvalid ? 'border-red-500 bg-red-50' : 'border-transparent'}`}>
                            <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">
                              {cat === 'type' ? 'フレームタイプ' : cat === 'shape' ? (selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状') : cat === 'length' ? '長さ' : cat === 'height' ? '高さ' : cat === 'size' ? 'サイズ' : 'フロントパイプ'}
                            </label>
                            <div className="flex flex-col gap-1.5">
                              {(currentCatalog.frameOptions[cat] || []).map(opt => {
                                const optObj = (typeof opt === 'string') ? { label: opt, no: opt } : opt;
                                return (
                                  <button type="button"  key={optObj.label} onClick={() => setFrameParts(p => ({ ...p, [cat]: optObj }))} className={`p-4 text-left border rounded-xl text-xs font-bold transition-all ${frameParts[cat]?.label === optObj.label ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 hover:border-blue-300'}`}>
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="text-xs font-black">{optObj.label}</span>
                                      {optObj.no && <span className={`text-[10px] font-mono font-black ${frameParts[cat]?.label === optObj.label ? 'text-white/90' : 'text-slate-400'}`}>{optObj.no}</span>}
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

                  <SelectionGroup title="車軸タイプ (L8連動)" items={currentCatalog.axleTypes} selectionKey="axleType" dynamicNameFn={getAxleDisplayName} isInvalid={showMissingRequired.includes('車軸タイプ')} selections={selections} setSelections={setSelections} />
                  <SelectionGroup title="キャスターフォーク" items={currentCatalog.casterForks} selectionKey="casterFork" isInvalid={showMissingRequired.includes('キャスターフォーク')} selections={selections} setSelections={setSelections} />
                  
                  {(() => {
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
                  {currentCatalog.brakes && <SelectionGroup title="ブレーキシステム" items={currentCatalog.brakes} selectionKey="brake" isInvalid={showMissingRequired.includes('ブレーキシステム')} selections={selections} setSelections={setSelections} />}

                  {selectedSeries !== 'GWE' && (() => {
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
                                  <button type="button"  key={w.id} onClick={() => setSelections(prev => ({...prev, wheel: w, wheelSize: (WHEEL_SIZE_RULES?.[w.id] || ['24インチ'])[0]}))} className={`p-4 text-left border rounded-xl text-xs font-bold transition-all ${selections.wheel?.id === w.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600 shadow-sm' : 'border-slate-100 bg-white hover:border-blue-300 shadow-sm'}`}>
                                    <span className="text-[9px] block opacity-70 uppercase leading-none mb-1">{getWheelNo(w, selections.wheelSize)}</span>{w.name} (+¥{w.price.toLocaleString()})
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className={`mb-6 ${wheelSizeInvalid ? 'rounded-xl p-3 border-2 border-red-500 bg-red-50' : ''}`}>
                            <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">B. サイズ</label>
                            <select className="w-full bg-slate-50 border-2 rounded-xl p-4 text-sm font-black outline-none transition-all" value={selections.wheelSize} onChange={e => setSelections({...selections, wheelSize: e.target.value})}>
                              { (selectedSeries === 'LX_LR' || selectedSeries === 'FX_FR') ? ['24インチ'].map(v => <option key={v} value={v}>{v}</option>) : (selectedSeries === 'MX_MR' || selectedSeries === 'NEO') ? ['22インチ','23インチ','24インチ','25インチ'].map(v => <option key={v} value={v}>{v}</option>) : (WHEEL_SIZE_RULES?.[selections.wheel?.id] || ['--']).map(v => <option key={v} value={v} disabled={currentCatalog.blockSmallWheels && (v==='22インチ' || v==='23インチ')}>{v}</option>) }
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
                        <SelectionGroup title="ハンドリム" items={HANDRIM_OPTIONS} selectionKey="handrim" isInvalid={showMissingRequired.includes('ハンドリム')} selections={selections} setSelections={setSelections} />
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
                            {PAINT_PLANS.filter(plan => plan.id !== 'mirror' || selectedSeries === 'ZZR').map(plan => {
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

                  <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 mb-8 relative font-bold">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                      <Ruler size={24} className="text-blue-600" />
                      <h3 className="text-xl font-black text-slate-800 tracking-widest uppercase">3. 各機種 詳細寸法指定</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {(selectedSeries === 'NEOplus' || selectedSeries === 'NEO') && (
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
                      <div className={`space-y-2 p-5 rounded-3xl border-2 shadow-inner ${(showMissingRequired.includes('H4 バック高（タイプ）') || showMissingRequired.includes('H4 バック高（値）')) ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200/50'}`}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest italic">H4 バック高</label>
                        <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none mb-2" value={dimensions.h4Type} onChange={e => setDimensions(d => ({...d, h4Type: e.target.value}))}>
                          {Object.keys(currentCatalog.dimensionRules?.h4 || {}).length > 1 && <option value="">選択</option>}
                          {Object.keys(currentCatalog.dimensionRules?.h4 || {}).map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none" value={dimensions.h4Val} onChange={e => setDimensions(d => ({...d, h4Val: e.target.value}))}>
                          {((currentCatalog.dimensionRules?.h4?.[dimensions.h4Type] || []).length > 1) && <option value="">選択</option>}
                          {(currentCatalog.dimensionRules?.h4?.[dimensions.h4Type] || []).map(v => <option key={v} value={v}>{v}mm</option>)}
                        </select>
                      </div>
                      <div className={`space-y-2 p-5 rounded-3xl border-2 shadow-inner ${(showMissingRequired.includes('車軸/ﾚﾊﾞｰ長 (L8)') || showMissingRequired.includes('ﾚﾊﾞｰ長')) ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200/50'}`}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest italic">{['LX_LR', 'FX_FR'].includes(selectedSeries) ? 'ﾚﾊﾞｰ長' : '車軸 / ﾚﾊﾞｰ長'}</label>
                        {!['LX_LR', 'FX_FR'].includes(selectedSeries) && (
                          <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none mb-2" value={dimensions.l8} onChange={e => setDimensions(d => ({...d, l8: e.target.value}))}>
                            {l8Options.length > 1 && <option value="">選択</option>}
                            {l8Options.map(v => <option key={v} value={v}>{v}mm</option>)}
                          </select>
                        )}
                        <select className="w-full bg-white border rounded-xl p-2 text-xs font-bold outline-none" value={dimensions.lever} onChange={e => setDimensions(d => ({...d, lever: e.target.value}))}>
                          {(currentCatalog.dimensionRules?.lever || []).length > 1 && <option value="">選択</option>}
                          {(currentCatalog.dimensionRules?.lever || []).map(v => <option key={v} value={v}>{v}mm(レバー長)</option>)}
                        </select>
                      </div>

                      <div className="bg-blue-50/40 p-5 rounded-[2rem] border border-blue-100 col-span-full flex flex-wrap gap-6 justify-center">
                        {['w1', 'l1', 'sb', 'w2', 'cm'].map(k => {
                          const lockSbSeries = new Set(['GWX3', 'MX_MR', 'GWE', 'LX_LR', 'FX_FR', 'SX_SR']);
                          const isSbLocked = (k === 'sb') && lockSbSeries.has(selectedSeries) && !!derivedBackAngleValue;
                          let opts = [];
                          if (k === 'cm') opts = camberOptions;
                          else if (k === 'sb') opts = isSbLocked ? [derivedBackAngleValue] : (currentCatalog?.dimensionRules?.sbMap ? (currentCatalog.dimensionRules.sbMap[dimensions.offset] || []) : (currentCatalog?.dimensionRules?.sb || []));
                          else if (k === 'l1') {
                            if (selectedSeries === 'MX_MR' && frameParts.size?.label) {
                              opts = frameParts.size.label === 'Sサイズ' ? ['330'] : ['350', '380', '420'];
                            } else opts = currentCatalog?.dimensionRules?.l1Map ? (currentCatalog.dimensionRules.l1Map[dimensions.offset] || []) : (currentCatalog?.dimensionRules?.l1 || []);
                          } else opts = currentCatalog?.dimensionRules?.[k] || [];
                          const dimLabel = { w1: '座幅(W1)', l1: '座奥行(L1)', sb: 'バックレスト角(SB)', w2: 'ハンドリム間隔(W2)', cm: 'キャンバー' }[k];
                          const dimInvalid = showMissingRequired.includes(dimLabel);
                          return (
                            <div key={k} className={`w-20 text-center ${dimInvalid ? 'rounded-xl p-2 border-2 border-red-500 bg-red-50' : ''}`}>
                              <span className="text-[8px] font-black text-slate-400 block mb-1 uppercase tracking-widest">{dimLabel}</span>
                              <select className="w-full bg-white border rounded-xl p-2 text-xs font-black outline-none shadow-sm text-center" value={dimensions[k]} onChange={e => setDimensions(d => ({ ...d, [k]: e.target.value }))} disabled={(k === 'cm' && selections.axleType?.id === 'axle_b') || (k === 'sb' && isSbLocked) || (k === 'l1' && selectedSeries === 'MX_MR' && frameParts.size?.label === 'Sサイズ')}>
                                {opts.length > 1 && <option value="">選択</option>}
                                {opts.map(v => <option key={v} value={v}>{v}{k === 'sb' ? '°' : ''}</option>)}
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
                      <div className={`border-2 rounded-2xl p-5 mb-6 grid grid-cols-1 md:grid-cols-3 gap-3 ${showMissingRequired.includes('アームレスト（高低・高さ）') ? 'border-red-500 bg-red-50' : 'bg-slate-50 border border-slate-200'}`}>
                        <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none" value={armrestSel.kind} onChange={e => setArmrestSel({kind: e.target.value, lh: '', ah: ''})}>
                          {!(selectedSeries === 'NEO' || selectedSeries === 'GWE' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base')) && <option value="">アームレストなし</option>}
                          {armrestConfig.arm && <option value="arm">アームレスト {(selectedSeries === 'NEO' || selectedSeries === 'GWE' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base')) ? '(標準 込)' : '(+¥22,000)'}</option>}
                          {armrestConfig.flip && <option value="flip">はね上げ式 {(selectedSeries === 'NEO' || (selectedSeries === 'MX_MR' && selections.baseModel?.id === 'mx_base')) ? '(+¥6,000)' : '(+¥28,000)'}</option>}
                        </select>
                        <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20" value={armrestSel.lh} disabled={!armrestSel.kind} onChange={e => setArmrestSel(s => ({...s, lh: e.target.value, ah: ''}))}><option value="">-- 高低 --</option><option value="ロー">ロー</option><option value="ハイ">ハイ</option></select>
                        <select className="bg-white border rounded-xl p-3 text-sm font-bold outline-none disabled:opacity-20" value={armrestSel.ah} disabled={!armrestSel.kind || !armrestSel.lh} onChange={e => setArmrestSel(s => ({...s, ah: e.target.value}))}><option value="">-- 高さ --</option>{(armrestSel.lh === 'ロー' ? (armrestSel.kind === 'arm' ? armrestConfig.arm?.low : armrestConfig.flip?.low) : (armrestSel.kind === 'arm' ? armrestConfig.arm?.high : armrestConfig.flip?.high))?.ah?.map(v => <option key={v} value={v}>{v}mm</option>)}</select>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {(currentCatalog.options || []).filter(opt => {
                        const isArmrestGroup = ['opt_arm_l','opt_arm_h','opt_arm','opt_arm_mr','opt_arm_ln'].includes(opt.id);
                        if (opt.id === 'opt_flip' && (Array.isArray(opt.ahLow) || Array.isArray(opt.ahHigh) || Array.isArray(opt.ah))) return false;
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {COMMON_ACCESSORIES.map(acc => (
                        <button key={acc.id} onClick={() => toggleItem(acc, selectedAccessories, setSelectedAccessories)} className={`flex justify-between items-center p-5 border rounded-2xl text-left transition-all ${selectedAccessories.find(a=>a.id===acc.id) ? 'border-blue-600 bg-blue-600 shadow-xl scale-[1.02]' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                          <div><p className="text-[9px] font-bold text-blue-400 mb-1 tracking-widest uppercase leading-none">{acc.no}</p><span className="text-xs font-bold uppercase">{acc.name}</span></div>
                          <span className="text-[10px] font-mono font-black opacity-60">¥{itemPrice(acc).toLocaleString()}</span>
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

            <div className="xl:col-span-4 sticky top-28 hidden xl:block z-30 font-bold">
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
            <div className="bg-slate-900 px-8 py-14 text-white flex flex-col md:flex-row justify-between items-center gap-8 border-b-8 border-blue-600">
              <div className="text-left flex-1">
                <h2 className="text-4xl font-black flex items-center gap-5 tracking-tighter leading-none underline decoration-blue-500 decoration-8 underline-offset-[14px] mb-12"><CheckCircle size={48} className="text-green-500" /> 転記用 Manifest</h2>
                
                {/* マニフェスト用顧客情報表示 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/5 p-6 rounded-3xl border border-white/10">
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
              <button type="button"  onClick={() => setIsConfirmed(false)} className="bg-white/10 px-10 py-5 rounded-2xl font-black text-xs border border-white/10 flex items-center gap-2 hover:bg-white/20 transition-all"><RotateCcw size={18}/> 戻る</button>
            </div>

            <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8 space-y-16">
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 border-l-4 border-blue-600 pl-4 underline underline-offset-8 decoration-slate-100">01. 基本パーツ構成</h3>
                  <table className="w-full text-left">
                    <thead><tr className="text-[10px] text-slate-400 uppercase font-black border-b-2 tracking-widest"><th className="pb-5 w-1/4">項目</th><th className="pb-5">パーツ</th><th className="pb-5 text-center">記入No.</th><th className="pb-5 text-right">加算額</th></tr></thead>
                    <tbody className="divide-y">
                      {totalLineItems.map((row, i) => (
                        <tr key={i} className="group hover:bg-slate-50 transition-colors">
                          <td className="py-7 text-[10px] text-slate-400 font-black tracking-widest">{row.label}</td>
                          <td className="py-7 text-sm font-bold text-slate-800 leading-snug">{row.name}</td>
                          <td className="py-7 text-center"><span className="bg-slate-900 text-white px-6 py-3 rounded-xl font-mono text-base font-black tracking-widest">{row.no}</span></td>
                          <td className="py-7 text-right font-mono font-black text-slate-500 text-xs">{row.price === 0 ? "込" : (row.price > 0 ? `+¥${row.price.toLocaleString()}` : `¥${row.price.toLocaleString()}`)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pt-8 border-t-2 border-dashed">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-10 border-l-4 border-blue-600 pl-4">02. オプション & アクセサリー</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...selectedOptions, ...selectedAccessories].filter(o => o.__group !== 'ARMREST').map((opt, i) => (
                      <div key={i} className="flex justify-between items-center p-6 bg-[#f8fafc] rounded-2xl border transition-all hover:bg-white shadow-sm">
                        <div className="flex items-center gap-5"><span className="bg-blue-600 text-white text-[10px] px-4 py-2 rounded-full font-black font-mono tracking-widest">{opt.no}</span><span className="text-[11px] font-black text-slate-700 tracking-tight">{opt.name}</span></div>
                        <span className="text-xs font-mono font-black text-blue-600">{itemPrice(opt) >= 0 ? '+' : ''}¥{itemPrice(opt).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-8 border-t-2 border-dashed">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 border-l-4 border-blue-600 pl-4">04. 備考・特記事項</h3>
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] border text-sm font-bold text-slate-700 min-h-[120px] whitespace-pre-wrap shadow-inner border-dashed">{remarks || "特記事項なし"}</div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12">
                <div className="bg-slate-50 p-10 rounded-[3.5rem] border shadow-inner text-left">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 italic underline decoration-blue-500 underline-offset-8">03. 指定寸法一覧</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-3"><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ホイール</span><span className="font-black text-lg text-blue-600">{selections.wheelSize}</span></div>
                    {Object.entries(dimensions).map(([k,v]) => (
                      <div key={k} className="flex justify-between items-center border-b pb-3"><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{DIMENSION_LABELS[k] || k}</span><span className="font-black text-lg text-slate-900">{v || '---'} <span className="text-[10px] ml-0.5 text-slate-400 italic font-normal">{isNaN(v)?'':(k==='sb'?'°':'mm')}</span></span></div>
                    ))}
                    {derivedBackAngle && <div className="flex justify-between items-center border-b pb-3"><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">背角度</span><span className="font-black text-lg text-slate-900">{derivedBackAngle ?? '—'}</span></div>}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 rounded-[4rem] text-white shadow-xl text-center border-4 border-white/20">
                  <p className="font-black font-mono tracking-tighter text-4xl"><span className="text-[0.6em] mr-1">¥</span>{totalAmount.toLocaleString()}</p>
                  <p className="text-[9px] opacity-70 font-bold uppercase mt-4 italic">OX ENGINEERING DATA</p>
                </div>
                {/* PDF作成ボタンの実装 */}
                <button 
                  onClick={handleDownloadPDF} 
                  className="w-full bg-slate-900 text-white py-10 rounded-[3.5rem] font-black text-xl flex items-center justify-center gap-5 shadow-2xl tracking-widest border-2 border-slate-700/50 hover:bg-slate-800 transition-all"
                >
                  <FileText size={30}/> PDF作成
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold leading-relaxed px-4">
                  ※作成されるPDFはA4縦サイズで印刷に適したフォーマットになります。
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
      `}</style>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
