/**
 * UI用データ定義（塗装・カラー・タイヤ・ホイール・オプション・アクセント等）
 * catalog.js / catalog-kids.js / price_master_2025.js の後に読み込み、app.js の前に読み込むこと。
 */
// =========================
// 塗装プラン定義
// =========================
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
  fixed: { '24インチ': 'No.51' }
};
// ===============================
// キャスターホイールデータ
// ===============================
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
// ===============================
// 共通アクセサリー
// ===============================
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
  { id: 'acc_belt_e_s', name: 'エラスティックベルト (S)',    no: 'No.1',   priceKey: 'acc.belt_e.s' },
  { id: 'acc_belt_e_m', name: 'エラスティックベルト (M)',    no: 'No.2',   priceKey: 'acc.belt_e.m' },
  { id: 'acc_belt_e_l', name: 'エラスティックベルト (L)',    no: 'No.3',   priceKey: 'acc.belt_e.l' },
  { id: 'acc_belt_h_s', name: 'ホールディングベルト (S)',    no: 'No.1',   priceKey: 'acc.belt_h.s' },
  { id: 'acc_belt_h_m', name: 'ホールディングベルト (M)',    no: 'No.2',   priceKey: 'acc.belt_h.m' },
  { id: 'acc_belt_h_l', name: 'ホールディングベルト (L)',    no: 'No.3',   priceKey: 'acc.belt_h.l' },
  { id: 'acc_tool',    name: '工具セット',                 no: 'No.1',   priceKey: 'acc.tool' },
  { id: 'acc_pump',    name: '充電式空気入れ',             no: 'No.1',   priceKey: 'acc.pump' },
  { id: 'acc_cushion', name: 'クッション',                 no: 'No.1',   priceKey: 'acc.cushion' },
];
// ===============================
// ハンドリムオプション
// ===============================
const HANDRIM_OPTIONS = [
  { id: 'hr_alu',   name: 'アルマイト',             no: 'No.11', priceKey: 'handrim.alu' },
  { id: 'hr_vinyl', name: 'ビニールコーティング',  no: 'No.21', priceKey: 'handrim.vinyl' },
];
// ===============================
// ホイールサイズルール（機種別）
// ===============================
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
// ===============================
// GW-E 電動ユニット詳細マスター
// ===============================
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
// ===============================
// 寸法表示ラベル（必須入力チェック・CSV・メール等）
// ===============================
const DIMENSION_LABELS = {
  offset: 'オフセット', h4Type: 'H4 バック高（タイプ）', h4Val: 'H4 バック高（値）',
  l8: '車軸前後位置 (L8)', lever: 'ブレーキレバー長', w1: '座幅(W1)', l1: '座奥行(L1)',
  sb: 'バックレスト角(SB)', w2: 'ハンドリム間隔(W2)', cm: 'キャンバー',
  casterWheel: 'D2 キャスターホイール径', h2: 'H2 前座高', h3: 'H3 後座高'
};
// ===============================
// テーマ（オーダー / キッズ）
// ===============================
const ACCENT_ORDER = { navIcon: 'bg-blue-600', subtotal: 'text-blue-400', confirmBtn: 'bg-green-600 hover:bg-green-700 shadow-green-500/30', sectionBar: 'bg-blue-600', sectionIcon: 'text-blue-600', sectionBorder: 'border-blue-600', sectionBg: 'bg-blue-50', sectionRing: 'ring-blue-600' };
const ACCENT_KIDS = { navIcon: 'bg-amber-500', subtotal: 'text-amber-400', confirmBtn: 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/30', sectionBar: 'bg-amber-500', sectionIcon: 'text-amber-600', sectionBorder: 'border-amber-500', sectionBg: 'bg-amber-50', sectionRing: 'ring-amber-500' };
