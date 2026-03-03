/** キッズカタログ用機種定義（CATALOG_KIDS）。catalog.js の後に読み込むこと。キッズカタログ2025に基づく。 */
const KIDS_FOOTRESTS_HI = [
  { id: 'ft_pj_hi', name: 'プレートジョイント hi', no: 'プレートジョイントhi', price: 0 },
  { id: 'ft_ps_hi', name: 'プレートセパレート hi', no: 'プレートセパレートhi', price: 0 },
];

const CATALOG_KIDS = {
  MINI_NEO_TODDLER: {
    title: 'ミニネオトドラー',
    baseModels: [{ id: 'toddler', name: 'ミニネオトドラー', no: 'miniNEO Toddler', price: 0 }],
    axleTypes: [],
    casterForks: [],
    frameOptions: {
      shape: [
        { label: 'スムーズ', no: 'No.111' },
        { label: 'スムーズワイド', no: 'No.112' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [{ id: 'br_dial', name: 'ダイヤルブレーキ', no: 'No.21/22', price: 5000 }],
    wheels: [{ id: 'mx4', name: 'MX4（着脱可能）', no: '23-451 (20in)', price: 0 }],
    wheelSizes: ['20インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      { id: 'opt_arm', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000 },
      { id: 'opt_grip', name: 'グリップ', no: 'No.1', price: 5000 },
      { id: 'opt_push', name: 'プッシュハンドル', no: 'No.1/2', price: 13000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1', price: 0 },
      { id: 'opt_fender', name: '樹脂製フェンダー', no: 'No.1/2', price: 10000 },
      { id: 'opt_foot_br', name: 'フットブレーキ', no: 'No.1', price: 16000 },
    ],
    dimensionRules: {
      // H3: 後座高〔mm〕（規格寸法。±5mm程度の誤差あり）
      h3: [320, 340, 360],
      h4: { 'ロー': [300, 310, 320], 'ミディアム': [350, 360, 370], 'ハイ': [400, 410, 420] },
      lever: [55, 75, 110, 140],
      offset: ['-40'],
      w1: [200],
      l1: [240],
      w2: [5, 10, 15, 20, 25, 30],
      camber: ['0', '-4'],
      sb: [86, 90, 94, 98, 102, 106],
    },
    tireBrand: null,
  },
  MINI_NEO_KIDS: {
    title: 'ミニネオキッズ',
    axleTypes: [],
    casterForks: [],
    baseModels: [
      { id: 'kids_enjoy', name: 'キッズエンジョイ', no: 'Enjoy', price: 167000 },
      { id: 'kids_school', name: 'キッズスクール', no: 'School', price: 204000 },
    ],
    frameOptions: {
      shape: [
        { label: 'スムーズ', no: 'No.111' },
        { label: 'スムーズワイド', no: 'No.112' },
        { label: 'アップ', no: 'No.113' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [
      { id: 'br_dial_u', name: 'ダイヤルブレーキ下付け', no: 'No.22', price: 5000 },
      { id: 'br_dial_o', name: 'ダイヤルブレーキ上付け', no: 'No.21', price: 5000 },
    ],
    wheels: [{ id: 'mx4', name: 'MX4（着脱可能）', no: '23-451 (20in)', price: 0 }],
    wheelSizes: ['20インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      // 標準で高低可。No.11 ロー / No.13 ハイ。アームレスト長は dimensionRules.armrestLengths
      { id: 'opt_arm_std', name: 'アームレスト（標準）', no: 'No.11/13', price: 0, ahLow: [200, 210, 220, 230, 240, 250], ahHigh: [250, 260, 270, 280, 290] },
      { id: 'opt_flip_arm', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000, ahLow: [210, 220, 230, 240, 250], ahHigh: [260, 270, 280, 290] },
      { id: 'opt_grip', name: 'グリップ', no: 'No.1', price: 5000 },
      { id: 'opt_push', name: 'プッシュハンドル', no: 'No.1/2', price: 13000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1固定/折りたたみ', price: 16000 },
      { id: 'opt_fender', name: '樹脂製フェンダー', no: 'No.1小/No.2大', price: 10000 },
      { id: 'opt_cushion_tbl', name: 'クッションテーブル', no: 'No.1/2/3', price: 17000 },
      { id: 'opt_clear_tbl', name: '透明テーブル', no: 'No.4', price: 23000 },
      { id: 'opt_foot_br', name: 'フットブレーキ', no: 'No.1', price: 16000 },
      { id: 'opt_kaid_wheel', name: '介助ブレーキ付きホイール', no: 'No.1', price: 21000 },
    ],
    dimensionRules: {
      // ﾐﾆﾈｵキッズ 各部寸法表（PDF「ﾐﾆﾈｵキッズ」1ページ目）に基づく
      // D2: キャスターホイール径 → H2: 前座高の選択肢が連動（図「キャスターホイール径と前座高」参照）
      casterWheel: [
        { value: '1', label: 'No.1 92mm' },
        { value: '2', label: 'No.2 105mm / ワイドキャスター 100mm' },
        { value: '3', label: 'No.3 127mm / クッションキャスター 125mm / ワイドキャスター 125mm' },
      ],
      // H2: 前座高[mm]。キャスターホイール径によって選べる範囲が異なる（No.3のときは350mmは不可）
      h2Map: {
        '1': [350, 360, 370, 380, 390],
        '2': [350, 360, 370, 380, 390],
        '3': [360, 370, 380, 390],
      },
      // H3: 後座高〔mm〕（規格寸法。±5mm程度の誤差あり）
      h3: [320, 340, 360],
      // H4: バックレスト高[mm]
      h4: {
        'ロー': [280, 290, 300, 310, 320, 330],
        'ミディアム': [330, 340, 350, 360, 370, 380],
        'ハイ': [380, 390, 400, 410, 420, 430],
        'スーパーハイ': [440, 450, 460, 470, 480],
      },
      // レバー長[mm]
      lever: [55, 75, 110, 140],
      // L1: シート奥行[mm] と バックレスト寸法の組み合わせ（0 / -20 / -40）
      // ※offset は「バックレストを前に出す量（0 / -20 / -40mm）」を表す
      offset: ['0', '-20', '-40'],
      l1Map: { '0': [280, 300], '-20': [260, 280], '-40': [240, 260] },
      // L8: 車軸前後位置寸法[mm]（前出し）。offset によって選択範囲が変わる（NEOplus と同様の考え方）
      //  0mm:   90～10
      // -20mm:  70～-10
      // -40mm:  50～-30
      l8Map: {
        '0':   [90, 80, 70, 60, 50, 40, 30, 20, 10],
        '-20': [70, 60, 50, 40, 30, 20, 10, 0, -10],
        '-40': [50, 40, 30, 20, 10, 0, -10, -20, -30],
      },
      // キャンバー-4°選択時は車軸前後位置は3か所のみ。オフセットで0から-20,-40ずつシフト
      l8MapCamberMinus4: {
        '0':   [90, 50, 10],
        '-20': [70, 30, -10],
        '-40': [50, 10, -30],
      },
      // W1: シート幅[mm]
      w1: [240, 260, 280, 300, 320, 340],
      // W2: ハンドリム取付間隔[mm]
      w2: [5, 10, 15, 20, 25, 30],
      // CM: キャンバー角[°]（0 / -4）
      camber: ['0', '-4'],
      sb: [86, 90, 94, 98, 102, 106],
      // AL: アームレスト長（No.1 標準 / No.2 +50mm）
      armrestLengths: [{ no: 'No.1', label: '標準' }, { no: 'No.2', label: '+50mm' }],
    },
    tireBrand: 'KENDA',
  },
  MINI_NEO_JUNIOR: {
    title: 'ミニネオジュニア',
    axleTypes: [],
    casterForks: [],
    baseModels: [
      { id: 'jr_enjoy', name: 'ジュニアエンジョイ', no: 'Enjoy', price: 167000 },
      { id: 'jr_school', name: 'ジュニアスクール', no: 'School', price: 204000 },
    ],
    frameOptions: {
      length: [{ label: 'ショート＆ロー', no: 'No.21x' }, { label: 'ショート＆ミディアム', no: 'No.22x' }],
      shape: [
        { label: 'スムーズ', no: 'No.211/221' },
        { label: 'スムーズワイド', no: 'No.212/222' },
        { label: 'アップ', no: 'No.213/223' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [
      { id: 'br_dial_u', name: 'ダイヤルブレーキ下付け', no: 'No.22', price: 5000 },
      { id: 'br_dial_o', name: 'ダイヤルブレーキ上付け', no: 'No.21', price: 5000 },
    ],
    wheels: [{ id: 'mx4', name: 'MX4（着脱可能）', no: '25-501 (22in)', price: 0 }],
    wheelSizes: ['22インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      // 標準で高低可。No.11 ロー / No.13 ハイ。アームレスト長は dimensionRules.armrestLengths
      { id: 'opt_arm_std', name: 'アームレスト（標準）', no: 'No.11/13', price: 0, ahLow: [250, 260, 270, 280, 290], ahHigh: [270, 280, 290, 300, 310] },
      { id: 'opt_flip_arm', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000, ahLow: [260, 270, 280, 290], ahHigh: [280, 290, 300, 310] },
      { id: 'opt_grip', name: 'グリップ', no: 'No.1', price: 5000 },
      { id: 'opt_push', name: 'プッシュハンドル', no: 'No.1/2', price: 13000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1固定/折りたたみ', price: 16000 },
      { id: 'opt_fender', name: '樹脂製フェンダー', no: 'No.1小/No.2大', price: 10000 },
      { id: 'opt_cushion_tbl', name: 'クッションテーブル', no: 'No.1/2/3', price: 17000 },
      { id: 'opt_clear_tbl', name: '透明テーブル', no: 'No.4', price: 23000 },
      { id: 'opt_foot_br', name: 'フットブレーキ', no: 'No.1', price: 16000 },
      { id: 'opt_kaid_wheel', name: '介助ブレーキ付きホイール', no: 'No.1', price: 21000 },
    ],
    dimensionRules: {
      h4: { 'ロー': [280, 290, 300, 310, 320, 330], 'ミディアム': [330, 340, 350, 360, 370, 380], 'ハイ': [380, 390, 400, 410, 420, 430], 'スーパーハイ': [440, 450, 460, 470, 480] },
      lever: [55, 75, 110, 140],
      offset: ['0', '-40'],
      l1Map: { '0': [350, 380], '-40': [310, 340] },
      l8Map: {
        '0':   [90, 80, 70, 60, 50, 40, 30, 20, 10],
        '-40': [50, 40, 30, 20, 10, 0, -10, -20, -30],
      },
      l8MapCamberMinus4: { '0': [90, 50, 10], '-40': [50, 10, -30] },
      w1: [280, 300, 320, 340],
      w2: [5, 10, 15, 20, 25, 30],
      camber: ['0', '-4'],
      sb: [86, 90, 94, 98, 102, 106],
      armrestLengths: [{ no: 'No.1', label: '標準' }, { no: 'No.2', label: '+50mm' }],
    },
    tireBrand: 'KENDA',
  },
  MINI_NEO_A_KIDS: {
    title: 'ミニネオエーキッズ',
    axleTypes: [],
    casterForks: [],
    baseModels: [{ id: 'a_kids', name: 'ミニネオエーキッズ', no: 'miniNEO A-Kids', price: 167000 }],
    frameOptions: {
      shape: [
        { label: 'スムーズ', no: 'No.111' },
        { label: 'スムーズワイド', no: 'No.112' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [{ id: 'br_dial', name: '連動ブレーキ', no: 'No.1', price: 14000 }],
    wheels: [{ id: 'std', name: '標準（40-305 16in）', no: '40-305', price: 0 }],
    wheelSizes: ['16インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      { id: 'opt_arm_std', name: 'アームレスト（標準）', no: '標準', price: 0, ahLow: [260, 270, 280, 290, 300, 310], ahHigh: [290, 300, 310, 320, 330, 340, 350] },
      { id: 'opt_flip_arm', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000, ahLow: [270, 280, 290, 300, 310], ahHigh: [310, 320, 330, 340, 350] },
      { id: 'opt_push', name: 'プッシュハンドル（スライド式）', no: 'No.2', price: 19000 },
      { id: 'opt_band_br', name: 'バンド式介助ブレーキ', no: 'No.1', price: 16000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1固定/折りたたみ', price: 16000 },
      { id: 'opt_foot_br', name: 'フットブレーキ', no: 'No.1', price: 16000 },
      { id: 'opt_cushion_tbl', name: 'クッションテーブル', no: 'No.1/2/3', price: 17000 },
      { id: 'opt_clear_tbl', name: '透明テーブル', no: 'No.4', price: 23000 },
    ],
    dimensionRules: {
      h4: { 'ロー': [280, 290, 300, 310, 320], 'ミディアム': [330, 340, 350, 360, 370], 'ハイ': [380, 390, 400, 410, 420], 'スーパーハイ': [450, 460] },
      lever: [55, 75, 110, 140],
      offset: ['0', '-20', '-40'],
      l1Map: { '0': [280, 300], '-20': [260, 280], '-40': [240, 260] },
      w1: [240, 260, 280, 300, 320, 340],
      w2: [5, 10, 15, 20, 25, 30],
      sb: [86, 90, 94, 98, 102, 106],
    },
    tireBrand: null,
  },
  MINI_NEO_A_JUNIOR: {
    title: 'ミニネオエージュニア',
    axleTypes: [],
    casterForks: [],
    baseModels: [{ id: 'a_jr', name: 'ミニネオエージュニア', no: 'miniNEO A-Junior', price: 167000 }],
    frameOptions: {
      shape: [
        { label: 'スムーズ', no: 'No.221' },
        { label: 'スムーズワイド', no: 'No.222' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [{ id: 'br_dial', name: '連動ブレーキ', no: 'No.1', price: 14000 }],
    wheels: [{ id: 'std', name: '標準（40-305 16in）', no: '40-305', price: 0 }],
    wheelSizes: ['16インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      { id: 'opt_arm_std', name: 'アームレスト（標準）', no: '標準', price: 0, ahLow: [260, 270, 280, 290, 300, 310], ahHigh: [290, 300, 310, 320, 330, 340, 350] },
      { id: 'opt_flip_arm', name: 'はね上げ式アームレスト', no: 'No.1', price: 6000, ahLow: [270, 280, 290, 300, 310], ahHigh: [310, 320, 330, 340, 350] },
      { id: 'opt_push', name: 'プッシュハンドル（スライド式）', no: 'No.2', price: 19000 },
      { id: 'opt_band_br', name: 'バンド式介助ブレーキ', no: 'No.1', price: 16000 },
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1固定/折りたたみ', price: 16000 },
      { id: 'opt_foot_br', name: 'フットブレーキ', no: 'No.1', price: 16000 },
      { id: 'opt_cushion_tbl', name: 'クッションテーブル', no: 'No.1/2/3', price: 17000 },
      { id: 'opt_clear_tbl', name: '透明テーブル', no: 'No.4', price: 23000 },
    ],
    dimensionRules: {
      h4: { 'ロー': [280, 290, 300, 310, 320], 'ミディアム': [330, 340, 350, 360, 370], 'ハイ': [380, 390, 400, 410, 420], 'スーパーハイ': [450, 460] },
      lever: [55, 75, 110, 140],
      w1: [280, 300, 320, 340],
      l1: [310, 340, 350, 360, 380],
      w2: [5, 10, 15, 20, 25, 30],
      sb: [86, 90, 94, 98, 102, 106],
    },
    tireBrand: null,
  },
  MINI_NEO_E_KIDS: {
    title: 'ミニネオイーキッズ',
    axleTypes: [],
    casterForks: [],
    baseModels: [{ id: 'e_kids', name: 'ミニネオイーキッズ（電動）', no: 'miniNEO E-Kids', price: 594000 }],
    frameOptions: {
      shape: [
        { label: 'スーパーショート＆スムーズ', no: 'No.111' },
        { label: 'スーパーショート＆スムーズワイド', no: 'No.112' },
        { label: 'スーパーショート＆アップ', no: 'No.113' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [{ id: 'br_std', name: '標準ブレーキ', no: '-', price: 0 }],
    wheels: [{ id: 'std', name: '37-451 (20in)', no: '37-451', price: 0 }],
    wheelSizes: ['20インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      { id: 'opt_grip', name: 'グリップ', no: 'No.1', price: 5000 },
      { id: 'opt_joystick', name: 'ジョイスティックレバー', no: 'No.2～7', price: 7500 },
      { id: 'opt_battery_li', name: 'リチウムイオンバッテリー', no: '+63,000', price: 63000 },
    ],
    dimensionRules: {
      h4: { 'ロー': [300, 310, 320], 'ミディアム': [350, 360, 370], 'ハイ': [400, 410, 420], 'スーパーハイ': [450, 460] },
      lever: [55, 75, 110, 140],
      w1: [240, 260, 280, 300, 320, 340],
      l1: [260, 280],
      w2: [5, 10, 15, 20, 25, 30],
      sb: [86, 90, 94, 98, 102, 106],
    },
    tireBrand: null,
  },
  MINI_NEO_E_JUNIOR: {
    title: 'ミニネオイージュニア',
    axleTypes: [],
    casterForks: [],
    baseModels: [{ id: 'e_jr', name: 'ミニネオイージュニア（電動）', no: 'miniNEO E-Junior', price: 594000 }],
    frameOptions: {
      type: [
        { label: 'ショート＆ロー＆スムーズ', no: 'No.211' },
        { label: 'ショート＆ロー＆スムーズワイド', no: 'No.212' },
        { label: 'ショート＆ロー＆アップ', no: 'No.213' },
        { label: 'ショート＆ミディアム＆スムーズ', no: 'No.221' },
        { label: 'ショート＆ミディアム＆スムーズワイド', no: 'No.222' },
        { label: 'ショート＆ミディアム＆アップ', no: 'No.223' },
      ],
    },
    footrests: KIDS_FOOTRESTS_HI,
    brakes: [{ id: 'br_std', name: '標準ブレーキ', no: '-', price: 0 }],
    wheels: [
      { id: 'tire_20', name: '37-451 (20in)', no: '37-451', price: 0 },
      { id: 'tire_22', name: '37-501 (22in)', no: '37-501', price: 0 },
    ],
    wheelSizes: ['20インチ', '22インチ'],
    options: [
      { id: 'opt_cushion_caster', name: 'クッションキャスター', no: 'No.1', price: 8000 },
      { id: 'opt_wide_caster', name: 'ワイドキャスター', no: 'No.2', price: 8000 },
      { id: 'opt_grip', name: 'グリップ', no: 'No.1', price: 5000 },
      { id: 'opt_joystick', name: 'ジョイスティックレバー', no: 'No.2～7', price: 7500 },
      { id: 'opt_battery_li', name: 'リチウムイオンバッテリー', no: '+63,000', price: 63000 },
    ],
    dimensionRules: {
      h4: { 'ロー': [280, 290, 300, 310, 320], 'ミディアム': [330, 340, 350, 360, 370], 'ハイ': [380, 390, 400, 410, 420], 'スーパーハイ': [450, 460] },
      lever: [55, 75, 110, 140],
      w1: [280, 300, 320, 340],
      l1: [330, 350, 360, 380],
      w2: [5, 10, 15, 20, 25, 30],
      sb: [86, 90, 94, 98, 102, 106],
    },
    tireBrand: null,
  },
  // coton（コトン）: PDF p.22-25 構成。バギーで他機種と異なり、フレームサイズでシート奥行・バックレスト高が連動。
  COTON: {
    title: 'coton（コトン）',
    axleTypes: [],
    casterForks: [],
    baseModels: [
      { id: 'coton_s', name: 'coton Sサイズ', no: 'S (シート幅280mm)', price: 230000 },
      { id: 'coton_m', name: 'coton Mサイズ', no: 'M (シート幅320mm)', price: 230000 },
    ],
    frameOptions: {
      // サイズは基本構成モデル(S/M)で選択するため、フレーム構成では重複表示しない
      seat: [
        { label: '標準シート', no: '標準', price: 0 },
        { label: 'パームシート', no: 'パームシート', price: 10000 },
      ],
    },
    footrests: [],
    brakes: [],
    wheels: [],
    options: [
      { id: 'opt_wheelie', name: 'ウイリーバー', no: 'No.1', price: 8000 },
      { id: 'opt_grab', name: 'グラブバー（着脱・5段階調節）', no: 'No.1', price: 8000 },
    ],
    // シート奥行・バックレスト高・座幅はフレームサイズで連動（l1BySize, h4BySize, w1BySize）
    dimensionRules: {
      l1BySize: {
        'Sサイズ': [180, 200, 220, 240],
        'Mサイズ': [240, 260, 280, 300],
      },
      h4BySize: {
        'Sサイズ': [460, 470, 480, 490, 500, 510],
        'Mサイズ': [510, 520, 530, 540, 550, 560],
      },
      w1BySize: {
        'Sサイズ': [280],
        'Mサイズ': [320],
      },
      lever: [],
      w2: [],
      // アームレストは標準装備・5段階調節。高低タイプと高さ[mm]
      armrestAhByType: {
        'ロー': [136, 148, 160, 172],
        'ミディアム': [181, 199, 217],
        'ハイ': [226, 244, 262],
      },
    },
    tireBrand: null,
    // coton専用アクセサリー（PDF p.23）
    accessories: [
      { id: 'coton_canter', name: 'coton用カンタークッション', no: 'S:幅280×奥行280 / M:幅340×奥行340', price: 22000 },
      { id: 'coton_pillow', name: 'まくら', no: '面ファスナー固定', price: 8000 },
      { id: 'coton_body', name: '体幹パッド', no: '片側', price: 6500 },
      { id: 'coton_chest', name: '胸ベルト', no: '面ファスナー・バックル併用', price: 7000 },
      { id: 'coton_crotch', name: '股ベルト', no: 'バックルタイプ', price: 6800 },
      { id: 'coton_assist', name: 'アシストベルト', no: 'バックルタイプ', price: 5200 },
      { id: 'coton_shoulder', name: '肩ベルト', no: 'バックルタイプ', price: 8000 },
      { id: 'coton_waist', name: '腰ベルト', no: '面ファスナータイプ', price: 4800 },
      { id: 'coton_table', name: 'クッションテーブル', no: '差し込みタイプ', price: 17000 },
      { id: 'coton_net', name: 'アンダーネット', no: 'No.1', price: 5500 },
      { id: 'coton_ft_cover', name: 'フットレストカバー', no: 'No.1', price: 7000 },
      { id: 'coton_basket', name: 'バスケット', no: '簡易着脱', price: 8800 },
      { id: 'coton_sun', name: 'サンシェイド', no: '差し込み・簡易着脱', price: 20000 },
      { id: 'coton_rain', name: 'レインカバー', no: 'No.1', price: 10000 },
    ],
  },
};
