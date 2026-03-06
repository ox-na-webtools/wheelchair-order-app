/** 機種カタログ定義（COMMON_FOOTRESTS, MX_NEO_FOOTRESTS, CATALOG）。app.js より先に読み込むこと。キッズ用は catalog-kids.js。 */
const COMMON_FOOTRESTS = [
  {
    id: 'ft_pj_std',
    name: 'プレートジョイント std',
    no: 'No.11',
    price: 24000,
    priceKey: 'common.ft_pj_std',
  },
  {
    id: 'ft_pj_hi',
    name: 'プレートジョイント hi',
    no: 'No.12',
    price: 27000,
    priceKey: 'common.ft_pj_hi',
  },
  {
    id: 'ft_ps_std',
    name: 'プレートセパレート std',
    no: 'No.31',
    price: 35000,
    priceKey: 'common.ft_ps_std',
  },
  {
    id: 'ft_ps_hi',
    name: 'プレートセパレート hi',
    no: 'No.32',
    price: 27000,
    priceKey: 'common.ft_ps_hi',
  },
  {
    id: 'ft_pipe',
    name: 'パイプジョイント std',
    no: 'No.21',
    price: 24000,
    priceKey: 'common.ft_pipe',
  },
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
    baseModels: [
      {
        id: 'zzr',
        name: 'ZZR 本体ユニット',
        no: 'ZZR',
        price: 278000,
        priceKey: 'zzr.base.zzr',
      },
    ],
    frameOptions: { shape: [{label: 'タイプI', no: 'No.1'}, {label: 'タイプII', no: 'No.2'}, {label: 'タイプIII', no: 'No.3'}], length: [{label: 'ショート', no: 'No.1'}, {label: 'ロング', no: 'No.2'}], pipe: [{label: 'ストレート', no: 'No.1'}, {label: 'シボリ', no: 'No.2'}] },
    axleTypes: [
      {
        id: 'axle_a',
        name: '車軸A (エキセン)',
        no: 'No.4',
        price: 0,
        l8: [70, 50, 30],
        priceKey: 'zzr.axle.axle_a',
      },
      {
        id: 'axle_b',
        name: '車軸B (サス)',
        no: 'No.5',
        price: 22000,
        l8: [60, 40],
        priceKey: 'zzr.axle.axle_b',
      },
    ],
    casterForks: [
      {
        id: 'cz2p',
        name: 'CZ2-Pro (カーボン)',
        no: 'No.23',
        price: 22000,
        priceKey: 'zzr.caster.cz2p',
      },
      {
        id: 'sfr2',
        name: 'SFR2 (サス付)',
        no: 'No.13',
        price: 39000,
        priceKey: 'zzr.caster.sfr2',
      },
    ],
    brakes: [
      {
        id: 'br_h',
        name: 'ホリゾンタル',
        no: 'No.11',
        price: 26000,
        priceKey: 'zzr.brake.br_h',
      },
      {
        id: 'br_o',
        name: 'ダイヤル上付け',
        no: 'No.21',
        price: 26000,
        priceKey: 'zzr.brake.br_o',
      },
      {
        id: 'br_u',
        name: 'ダイヤル下付け',
        no: 'No.22',
        price: 26000,
        priceKey: 'zzr.brake.br_u',
      },
    ],
    footrests: [
      {
        id: 'ft_pj_std',
        name: 'プレートジョイント std',
        no: 'No.11',
        price: 24000,
        priceKey: 'zzr.ft.ft_pj_std',
      },
      {
        id: 'ft_pipe',
        name: 'パイプジョイント std',
        no: 'No.21',
        price: 24000,
        priceKey: 'zzr.ft.ft_pipe',
      },
      {
        id: 'ft_ps_std',
        name: 'プレートセパレート std',
        no: 'No.31',
        price: 35000,
        priceKey: 'zzr.ft.ft_ps_std',
      },
    ],
    wheels: [
      {
        id: 'ds3a',
        name: 'DS3 (A面)',
        no: 'No.251',
        price: 188000,
        priceKey: 'zzr.wheel.ds3a',
      },
      {
        id: 'ds3z',
        name: 'DS3 (Z面)',
        no: 'No.252',
        price: 188000,
        priceKey: 'zzr.wheel.ds3z',
      },
      {
        id: 'hhr3',
        name: 'HHR3',
        no: 'No.13',
        price: 120000,
        priceKey: 'zzr.wheel.hhr3',
      },
      {
        id: 'al5',
        name: 'AL-5',
        no: 'No.75',
        price: 76000,
        priceKey: 'zzr.wheel.al5',
      },
      {
        id: 'mx4',
        name: 'MX4',
        no: 'No.45',
        price: 36000,
        priceKey: 'zzr.wheel.mx4',
      },
    ],
    options: [
      {
        id: 'opt_arm_l',
        name: 'アームレスト ロー',
        no: 'No.11',
        price: 22000,
        ah: [240, 250, 260, 270],
        priceKey: 'zzr.opt.opt_arm_l',
      },
      {
        id: 'opt_arm_h',
        name: 'アームレスト ハイ',
        no: 'No.13',
        price: 22000,
        ah: [260, 270, 280, 290, 300, 310],
        priceKey: 'zzr.opt.opt_arm_h',
      },
      {
        id: 'opt_grip',
        name: 'グリップ',
        no: 'No.11',
        price: 6000,
        priceKey: 'zzr.opt.opt_grip',
      },
      {
        id: 'opt_wheelie',
        name: 'ウィリーバー',
        no: 'No.1',
        price: 17000,
        priceKey: 'zzr.opt.opt_wheelie',
      },
      {
        id: 'opt_sideguard',
        name: 'サイドガード',
        no: 'No.3',
        price: 20000,
        priceKey: 'zzr.opt.opt_sideguard',
      },
      {
        id: 'opt_sideguard_fender',
        name: 'サイドガード＋簡易フェンダー',
        no: 'No.4',
        price: 25000,
        priceKey: 'zzr.opt.opt_sideguard_fender',
      },
      {
        id: 'opt_micro',
        name: 'リアマイクロホイール',
        no: 'No.2',
        price: 22000,
        priceKey: 'zzr.opt.opt_micro',
      },
      {
        id: 'opt_l_flap',
        name: '軽量レザー (フラップ式)',
        no: 'No.1-3',
        price: 8000,
        priceKey: 'zzr.opt.opt_l_flap',
      },
      {
        id: 'opt_l_zip',
        name: '軽量レザー (ファスナー式)',
        no: 'No.4',
        price: 5000,
        priceKey: 'zzr.opt.opt_l_zip',
      },
      {
        id: 'opt_mag_cross',
        name: 'マグネシウムクロスメンバー',
        no: 'No.1',
        price: 30000,
        priceKey: 'zzr.opt.opt_mag_cross',
      },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], camber: ['0°', '2°'], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], sb: [86, 88, 90], w2: [5, 10, 15, 20, 25, 30] },
    hasMirrorPaint: true, blockSmallWheels: true, tireBrand: 'IRC'
  },
  GWX3: {
    title: "GWX III",
    baseModels: [
      {
        id: 'gwx3',
        name: 'GWX III フレーム',
        no: 'GWX3',
        price: 149000,
        priceKey: 'gwx3.base.gwx3',
      },
    ],
    frameOptions: { shape: [{label:'タイプI', no:'1'}, {label:'タイプII', no:'2'}], length: [{label:'ショート', no:'1'}, {label:'ロング', no:'2'}], height: [{label:'レギュラー', no:'1'}, {label:'ハイ', no:'2'}] },
    frameMap: { 'タイプI-ショート-レギュラー': 'No.111', 'タイプI-ショート-ハイ': 'No.112', 'タイプI-ロング-レギュラー': 'No.121', 'タイプI-ロング-ハイ': 'No.122', 'タイプII-ショート-レギュラー': 'No.211', 'タイプII-ショート-ハイ': 'No.212', 'タイプII-ロング-レギュラー': 'No.221', 'タイプII-ロング-ハイ': 'No.222' },
    casterForks: [
      {
        id: 'cz2p',
        name: 'CZ2-Pro (カーボン)',
        no: 'No.23',
        price: 22000,
        priceKey: 'gwx3.caster.cz2p',
      },
      {
        id: 'sfr2',
        name: 'SFR2 ショート',
        no: 'No.14',
        price: 39000,
        priceKey: 'gwx3.caster.sfr2',
      },
    ],
    brakes: [
      {
        id: 'br_h',
        name: 'ホリゾンタル',
        no: 'No.11',
        price: 26000,
        priceKey: 'gwx3.brake.br_h',
      },
      {
        id: 'br_o',
        name: 'ダイヤル上付け',
        no: 'No.21',
        price: 26000,
        priceKey: 'gwx3.brake.br_o',
      },
      {
        id: 'br_u',
        name: 'ダイヤル下付け',
        no: 'No.22',
        price: 28000,
        priceKey: 'gwx3.brake.br_u',
      },
    ],
    footrests: [
      {
        id: 'ft_pj_std',
        name: 'プレートジョイント std',
        no: 'No.11',
        price: 24000,
        priceKey: 'gwx3.ft.ft_pj_std',
      },
      {
        id: 'ft_pipe',
        name: 'パイプジョイント std',
        no: 'No.21',
        price: 24000,
        priceKey: 'gwx3.ft.ft_pipe',
      },
      {
        id: 'ft_ps_std',
        name: 'プレートセパレート std',
        no: 'No.31',
        price: 35000,
        priceKey: 'gwx3.ft.ft_ps_std',
      },
    ],
    wheels: [
      {
        id: 'spn_w',
        name: 'スピナジー (白)',
        no: 'No.351',
        price: 142000,
        priceKey: 'gwx3.wheel.spn_w',
      },
      {
        id: 'spn_b',
        name: 'スピナジー (黒)',
        no: 'No.352',
        price: 142000,
        priceKey: 'gwx3.wheel.spn_b',
      },
      {
        id: 'ds3a',
        name: 'DS3 (A面)',
        no: 'No.251',
        price: 188000,
        priceKey: 'gwx3.wheel.ds3a',
      },
      {
        id: 'ds3z',
        name: 'DS3 (Z面)',
        no: 'No.252',
        price: 188000,
        priceKey: 'gwx3.wheel.ds3z',
      },
      {
        id: 'al5',
        name: 'AL-5',
        no: 'No.75',
        price: 76000,
        priceKey: 'gwx3.wheel.al5',
      },
      {
        id: 'mx4',
        name: 'MX4',
        no: 'No.45',
        price: 36000,
        priceKey: 'gwx3.wheel.mx4',
      },
    ],
    options: [
      {
        id: 'opt_arm',
        name: 'アームレスト',
        no: 'No.11/13',
        price: 22000,
        ah: [255, 265, 275, 285, 295, 305],
        priceKey: 'gwx3.opt.opt_arm',
      },
      {
        id: 'opt_flip',
        name: 'はね上げ式アームレスト',
        no: 'No.21/23',
        price: 28000,
        ah: [265, 275, 285, 295, 305, 315],
        priceKey: 'gwx3.opt.opt_flip',
      },
      {
        id: 'opt_grip',
        name: 'グリップ',
        no: 'No.11',
        price: 6000,
        priceKey: 'gwx3.opt.opt_grip',
      },
      {
        id: 'opt_wheelie',
        name: 'ウィリーバー',
        no: 'No.1',
        price: 17000,
        priceKey: 'gwx3.opt.opt_wheelie',
      },
      {
        id: 'opt_micro',
        name: 'リアマイクロホイール',
        no: 'No.2',
        price: 22000,
        priceKey: 'gwx3.opt.opt_micro',
      },
      {
        id: 'opt_guard',
        name: 'サイドガード',
        no: 'No.3',
        price: 15000,
        priceKey: 'gwx3.opt.opt_guard',
      },
      {
        id: 'opt_f_guard',
        name: 'サイドガード+簡易フェンダー',
        no: 'No.4',
        price: 25000,
        priceKey: 'gwx3.opt.opt_f_guard',
      },
    ],
    dimensionRules: { h4: { 'ロー': [280, 290, 300, 310, 320, 330], 'ミディアム': [330, 340, 350, 360, 370, 380], 'ハイ': [380, 390, 400, 410, 420, 430] }, lever: [55, 75, 110, 140], l8: [70, 60, 50, 40],camber: ['0°'], w1: [320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    casterLimit: 105, blockSmallWheels: true, tireBrand: 'IRC'
  },
  SX_SR: {
    title: "SX / SR シリーズ",
    baseModels: [
      {
        id: 'sx',
        name: 'No.1 SX [サイドレザー]',
        no: 'No.1',
        price: 119000,
        priceKey: 'sx.base.sx',
      },
      {
        id: 'sr',
        name: 'No.2 SR [サイドカバー]',
        no: 'No.2',
        price: 157000,
        priceKey: 'sx.base.sr',
      },
    ],
    frameOptions: { shape: ['タイプII', 'タイプIII'], length: ['ショート', 'ロング'], height: ['レギュラー', 'ハイ', 'フラット'] },
    frameMap: { 'タイプII-ショート-レギュラー': 'No.211', 'タイプII-ショート-ハイ': 'No.212', 'タイプII-ショート-フラット': 'No.213', 'タイプII-ロング-レギュラー': 'No.221', 'タイプII-ロング-ハイ': 'No.222', 'タイプII-ロング-フラット': 'No.223', 'タイプIII-ショート-レギュラー': 'No.311', 'タイプIII-ショート-ハイ': 'No.312', 'タイプIII-ショート-フラット': 'No.313', 'タイプIII-ロング-レギュラー': 'No.321', 'タイプIII-ロング-ハイ': 'No.322', 'タイプIII-ロング-フラット': 'No.323' },
    axleTypes: [
      {
        id: 'axle_a',
        name: '車軸A (エキセン)',
        no: 'No.4',
        price: 0,
        l8: [70, 50, 30],
        priceKey: 'sx.axle.axle_a',
      },
      {
        id: 'axle_b',
        name: '車軸B (サス)',
        no: 'No.5',
        price: 22000,
        l8: [60, 40],
        priceKey: 'sx.axle.axle_b',
      },
    ],
    casterForks: [
      {
        id: 'cz2s',
        name: 'CZ2-Std (アルミ)',
        no: 'No.24',
        price: 15000,
        priceKey: 'sx.caster.cz2s',
      },
      {
        id: 'cz2p',
        name: 'CZ2-Pro (カーボン)',
        no: 'No.23',
        price: 22000,
        priceKey: 'sx.caster.cz2p',
      },
      {
        id: 'sfr2',
        name: 'SFR2 (サス付)',
        no: 'No.13',
        price: 39000,
        priceKey: 'sx.caster.sfr2',
      },
    ],
    brakes: [
      {
        id: 'br_u',
        name: 'ダイヤル下付け',
        no: 'No.22',
        price: 26000,
        priceKey: 'sx.brake.br_u',
      },
      {
        id: 'br_o',
        name: 'ダイヤル上付け',
        no: 'No.21',
        price: 26000,
        priceKey: 'sx.brake.br_o',
      },
      {
        id: 'br_h',
        name: 'ホリゾンタル',
        no: 'No.11',
        price: 26000,
        priceKey: 'sx.brake.br_h',
      },
    ],
    footrests: [
      {
        id: 'ft_pj_std',
        name: 'プレートジョイント std',
        no: 'No.11',
        price: 24000,
        priceKey: 'sx.ft.ft_pj_std',
      },
      {
        id: 'ft_pj_hi',
        name: 'プレートジョイント hi',
        no: 'No.12',
        price: 27000,
        priceKey: 'sx.ft.ft_pj_hi',
      },
      {
        id: 'ft_ps_std',
        name: 'プレートセパレート std',
        no: 'No.31',
        price: 35000,
        priceKey: 'sx.ft.ft_ps_std',
      },
      {
        id: 'ft_ps_hi',
        name: 'プレートセパレート hi',
        no: 'No.32',
        price: 27000,
        priceKey: 'sx.ft.ft_ps_hi',
      },
      {
        id: 'ft_pipe',
        name: 'パイプジョイント std',
        no: 'No.21',
        price: 24000,
        priceKey: 'sx.ft.ft_pipe',
      },
    ],
    wheels: [
      {
        id: 'ds3a',
        name: 'DS3 (A面)',
        no: 'No.251',
        price: 188000,
        priceKey: 'sx.wheel.ds3a',
      },
      {
        id: 'ds3z',
        name: 'DS3 (Z面)',
        no: 'No.252',
        price: 188000,
        priceKey: 'sx.wheel.ds3z',
      },
      {
        id: 'hhr3',
        name: 'HHR3',
        no: 'No.13',
        price: 120000,
        priceKey: 'sx.wheel.hhr3',
      },
      {
        id: 'al5',
        name: 'AL-5',
        no: 'No.75',
        price: 76000,
        priceKey: 'sx.wheel.al5',
      },
      {
        id: 'mx4',
        name: 'MX4',
        no: 'No.45',
        price: 36000,
        priceKey: 'sx.wheel.mx4',
      },
    ],
    options: [
      {
        id: 'opt_arm',
        name: 'アームレスト',
        no: 'No.11/13',
        price: 22000,
        ah: [250, 260, 270, 280, 290, 300, 310],
        priceKey: 'sx.opt.opt_arm',
      },
      {
        id: 'opt_flip',
        name: 'はね上げ式アームレスト',
        no: 'No.21/23',
        price: 28000,
        ah: [270, 280, 290, 300, 310, 320, 330],
        priceKey: 'sx.opt.opt_flip',
      },
      {
        id: 'opt_grip',
        name: 'グリップ',
        no: 'No.11',
        price: 6000,
        priceKey: 'sx.opt.opt_grip',
      },
      {
        id: 'opt_wheelie',
        name: 'ウィリーバー',
        no: 'No.1',
        price: 17000,
        priceKey: 'sx.opt.opt_wheelie',
      },
      {
        id: 'opt_micro',
        name: 'リアマイクロホイール',
        no: 'No.2',
        price: 22000,
        priceKey: 'sx.opt.opt_micro',
      },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], camber: ['0°', '2°'], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    tireBrand: 'KENDA'
  },
  MX_MR: {
    title: "MX / MR シリーズ",
    baseModels: [
      {
        id: 'mx_base',
        name: 'MX [サイドレザー]',
        no: 'MX',
        price: 0,
        priceKey: 'mxmr.base.mx',
      },
      {
        id: 'mr_base',
        name: 'MR [サイドカバー]',
        no: 'MR',
        price: 0,
        priceKey: 'mxmr.base.mr',
      },
    ],
    frameOptions: { 
      size: [
        { label: 'Sサイズ', no: 'No.1' }, 
        { label: 'Mサイズ', no: 'No.2' }, 
        { label: 'Lサイズ', no: 'No.3' }
      ] 
    },
    footrests: MX_NEO_FOOTRESTS,
    brakes: [
      { id: 'br_h', name: 'ホリゾンタル', no: '', price: 0, priceKey: 'mxmr.brake.br_h' },
      { id: 'br_o', name: 'ダイヤル上付け', no: '', price: 0, priceKey: 'mxmr.brake.br_o' },
      { id: 'br_u', name: 'ダイヤル下付け', no: '', price: 0, priceKey: 'mxmr.brake.br_u' },
    ],
    options: [
      {
        id: 'opt_arm_mr',
        name: 'アームレスト (MR用)',
        no: 'No.1',
        price: 22000,
        ahLow: [250, 260, 270],
        ahHigh: [270, 280, 290, 300, 310],
        priceKey: 'mxmr.opt.opt_arm_mr',
      },
      {
        id: 'opt_flip',
        name: 'はね上げ式アームレスト',
        no: 'No.1',
        price: 6000,
        ahLow: [260, 270, 280, 290, 300],
        ahHigh: [300, 310, 320, 330, 340],
        priceKey: 'mxmr.opt.opt_flip',
      },
      {
        id: 'opt_grip',
        name: 'グリップ',
        no: 'No.11',
        price: 6000,
        priceKey: 'mxmr.opt.opt_grip',
      },
      {
        id: 'opt_wheelie',
        name: 'ウイリーバー',
        no: 'No.1',
        price: 17000,
        priceKey: 'mxmr.opt.opt_wheelie',
      },
      {
        id: 'opt_micro',
        name: 'リア・マイクロホイール',
        no: 'No.2',
        price: 22000,
        priceKey: 'mxmr.opt.opt_micro',
      },
      {
        id: 'opt_suit_mx',
        name: 'スーツガード (MX用)',
        no: 'No.1',
        price: 6200,
        priceKey: 'mxmr.opt.opt_suit_mx',
      },
      {
        id: 'opt_wide_add',
        name: 'ワイドキャスター加算',
        no: 'No.2',
        price: 8000,
        priceKey: 'mxmr.opt.opt_wide_add',
      },
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
    brakes: [
      { id: 'br_h', name: 'ホリゾンタル', no: '', price: 0, priceKey: 'neo.brake.br_h' },
      { id: 'br_o', name: 'ダイヤル上付け', no: '', price: 0, priceKey: 'neo.brake.br_o' },
      { id: 'br_u', name: 'ダイヤル下付け', no: '', price: 0, priceKey: 'neo.brake.br_u' },
    ],
    options: [
      {
        id: 'opt_arm',
        name: 'アームレスト',
        no: '標準',
        price: 0,
        ahLow: [260, 270, 280, 290, 300, 310],
        ahHigh: [290, 300, 310, 320, 330, 340, 350],
        priceKey: 'neo.opt.opt_arm',
      },
      {
        id: 'opt_flip',
        name: 'はね上げ式アームレスト',
        no: 'No.1',
        price: 6000,
        ahLow: [270, 280, 290, 300, 310],
        ahHigh: [310, 320, 330, 340, 350],
        priceKey: 'neo.opt.opt_flip',
      },
      {
        id: 'opt_arm_detachable',
        name: 'アームレスト着脱加工',
        no: 'No.1',
        price: 4000,
        priceKey: 'neo.opt.opt_arm_detachable',
      },
      {
        id: 'opt_grip',
        name: 'グリップ',
        no: 'No.11',
        price: 6000,
        priceKey: 'neo.opt.opt_grip',
      },
      {
        id: 'opt_assist_grip',
        name: '介助用グリップ',
        no: 'No.12',
        price: 8000,
        priceKey: 'neo.opt.opt_assist_grip',
      },
      {
        id: 'opt_bush_handle_slide',
        name: 'ブッシュハンドルスライド式',
        no: 'No.2/4',
        price: 32000,
        priceKey: 'neo.opt.opt_bush_handle_slide',
      },
      {
        id: 'opt_wheelie',
        name: 'ウイリーバー',
        no: 'No.1',
        price: 17000,
        priceKey: 'neo.opt.opt_wheelie',
      },
      {
        id: 'opt_micro',
        name: 'リア・マイクロホイール',
        no: 'No.2',
        price: 22000,
        priceKey: 'neo.opt.opt_micro',
      },
      {
        id: 'opt_fender_neo',
        name: '樹脂製フェンダー',
        no: 'No.1',
        price: 27000,
        priceKey: 'neo.opt.opt_fender_neo',
      },
      {
        id: 'opt_straight_pipe',
        name: 'ストレートパイプ',
        no: 'No.1',
        price: -5000,
        priceKey: 'neo.opt.opt_straight_pipe',
      },
      {
        id: 'opt_wide_add',
        name: 'ワイドキャスター加算',
        no: 'No.2',
        price: 8000,
        priceKey: 'neo.opt.opt_wide_add',
      },
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
    baseModels: [
      {
        id: 'neop_base',
        name: 'NEOplus フレームユニット',
        no: 'ATO方式',
        price: 118000,
        priceKey: 'neop.base.frame',
      },
    ],
    frameOptions: { shape: ['アップ', 'スムーズ'], length: ['ショート', 'ロング'], height: ['ロー', 'ミディアム', 'ハイ'] },
    frameMap: { 'アップ-ショート-ロー': 'No.111', 'スムーズ-ショート-ロー': 'No.112', 'アップ-ショート-ミディアム': 'No.121', 'スムーズ-ショート-ミディアム': 'No.122', 'アップ-ロング-ロー': 'No.211', 'スムーズ-ロング-ロー': 'No.212', 'アップ-ロング-ミディアム': 'No.221', 'スムーズ-ロング-ミディアム': 'No.222', 'アップ-ロング-ハイ': 'No.231', 'スムーズ-ロング-ハイ': 'No.232' },
    casterForks: [
      { id: 'cz2s_n', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000, priceKey: 'neop.caster.cz2s_n' },
      { id: 'cz2p_n', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000, priceKey: 'neop.caster.cz2p_n' },
      { id: 'sfr2_n', name: 'SFR2 (サス付)', no: 'No.13', price: 39000, priceKey: 'neop.caster.sfr2_n' },
    ],
    brakes: [
      { id: 'br_u_n', name: 'ダイヤル下付け', no: 'No.22', price: 26000, priceKey: 'neop.brake.br_u_n' },
      { id: 'br_o_n', name: 'ダイヤル上付け', no: 'No.21', price: 26000, priceKey: 'neop.brake.br_o_n' },
      { id: 'br_h_n', name: 'ホリゾンタル', no: 'No.11', price: 26000, priceKey: 'neop.brake.br_h_n' },
    ],
    footrests: [
      { id: 'ft_pj_std_n', name: 'プレートジョイント std', no: 'No.11', price: 24000, priceKey: 'neop.ft.ft_pj_std_n' },
      { id: 'ft_pj_hi_n', name: 'プレートジョイント hi', no: 'No.12', price: 27000, priceKey: 'neop.ft.ft_pj_hi_n' },
      { id: 'ft_ps_std_n', name: 'プレートセパレート std', no: 'No.31', price: 35000, priceKey: 'neop.ft.ft_ps_std_n' },
      { id: 'ft_ps_hi_n', name: 'プレートセパレート hi', no: 'No.32', price: 27000, priceKey: 'neop.ft.ft_ps_hi_n' },
      { id: 'ft_pipe_n', name: 'パイプジョイント std', no: 'No.21', price: 24000, priceKey: 'neop.ft.ft_pipe_n' },
    ],
    wheels: [
      { id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000, priceKey: 'neop.wheel.ds3a' },
      { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000, priceKey: 'neop.wheel.ds3z' },
      { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000, priceKey: 'neop.wheel.hhr3' },
      { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000, priceKey: 'neop.wheel.al5' },
      { id: 'mx4_n', name: 'MX4', no: 'No.45', price: 36000, priceKey: 'neop.wheel.mx4_n' },
      { id: 'kaid_n', name: '介助ブレーキ付', no: 'No.65', price: 55000, priceKey: 'neop.wheel.kaid_n' },
    ],
    options: [
      { id: 'opt_grip', name: 'グリップ', no: 'No.34', price: 6000, priceKey: 'neop.opt.opt_grip' },
      { id: 'opt_assist_n', name: '介助用グリップ', no: 'No.12', price: 8000, priceKey: 'neop.opt.opt_assist_n' },
      {
        id: 'opt_bush_handle_slide',
        name: 'ブッシュハンドルスライド式',
        no: 'No.2',
        price: 32000,
        priceKey: 'neop.opt.opt_bush_handle_slide',
      },
      {
        id: 'opt_arm_ln',
        name: 'アームレスト (No.11/13)',
        no: 'No.11/13',
        price: 22000,
        ahLow: [260, 270, 280, 290, 300, 310],
        ahHigh: [290, 300, 310, 320, 330, 340, 350],
        priceKey: 'neop.opt.opt_arm_ln',
      },
      {
        id: 'opt_flip',
        name: 'はね上げ式アームレスト',
        no: 'No.21/23',
        price: 28000,
        ahLow: [290, 300, 310, 320, 330],
        ahHigh: [310, 320, 330, 340, 350],
        priceKey: 'neop.opt.opt_flip',
      },
      { id: 'opt_fender_n', name: '樹脂製フェンダー', no: 'No.1', price: 27000, priceKey: 'neop.opt.opt_fender_n' },
      { id: 'opt_micro', name: 'リアマイクロホイール', no: 'No.2', price: 22000, priceKey: 'neop.opt.opt_micro' },
    ],
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
    baseModels: [
      {
        id: 'fusion',
        name: 'Fusion フレーム',
        no: 'Fusion',
        price: 62000,
        priceKey: 'fusion.base.fusion',
      },
    ],
    frameOptions: { length: ['ショート', 'ロング'], height: ['フラット', 'レギュラー'] },
    frameMap: { 'ショート-フラット': 'No.1', 'ショート-レギュラー': 'No.2', 'ロング-フラット': 'No.3', 'ロング-レギュラー': 'No.4' },
    casterForks: [
      { id: 'cz2s', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000, priceKey: 'fusion.caster.cz2s' },
      { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000, priceKey: 'fusion.caster.cz2p' },
      { id: 'sfr2', name: 'SFR2 (サス付)', no: 'No.13', price: 39000, priceKey: 'fusion.caster.sfr2' },
    ],
    brakes: [
      { id: 'br_o', name: 'ダイヤル上付け', no: 'No.1', price: 26000, priceKey: 'fusion.brake.br_o' },
    ],
    footrests: COMMON_FOOTRESTS,
    wheels: [
      { id: 'kaid', name: '介助ブレーキ付', no: 'No.65', price: 55000, priceKey: 'fusion.wheel.kaid' },
      { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000, priceKey: 'fusion.wheel.hhr3' },
      { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000, priceKey: 'fusion.wheel.al5' },
      { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000, priceKey: 'fusion.wheel.mx4' },
      { id: 'fixed', name: 'ワイヤースポーク固定式', no: 'No.51', price: 17000, priceKey: 'fusion.wheel.fixed' },
    ],
    options: [
      { id: 'opt_grip', name: 'グリップ', no: 'No.34', price: 6000, priceKey: 'fusion.opt.opt_grip' },
      {
        id: 'opt_flip',
        name: 'はね上げ式アームレスト',
        no: 'No.3/4',
        price: 28000,
        ahLow: [260, 270, 280, 290, 300, 310],
        ahHigh: [300, 310, 320, 330, 340, 350],
        priceKey: 'fusion.opt.opt_flip',
      },
      { id: 'opt_hi_leather', name: 'ハイグレードレザーSET', no: 'No.1', price: 12000, priceKey: 'fusion.opt.opt_hi_leather' },
      {
        id: 'opt_arm',
        name: 'アームレスト (ロー/ハイ)',
        no: 'No.1/2',
        price: 22000,
        ahLow: [250, 260, 270, 280, 290, 300],
        ahHigh: [290, 300, 310, 320, 330, 340],
        priceKey: 'fusion.opt.opt_arm',
      },
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 14000, priceKey: 'fusion.opt.opt_wheelie' },
      { id: 'opt_tip', name: 'ティッピングバー', no: 'No.2', price: 5000, priceKey: 'fusion.opt.opt_tip' },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450], 'スーパーハイ': [460,470,480,490,500] }, lever: [55, 75, 110, 140], l8Map: { 'レギュラー': [70, 50, 30, 10, -10], 'フラット': [60, 40, 20, 0, -20] }, camber: ['0°'], sb: [83, 90, 97], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 410], w2: [5, 10, 15, 20, 25, 30] },
    hasCushionCaster: true, tireBrand: 'KENDA'
  },
  GWE: {
    title: "GW-E (電動車いす)",
    baseModels: [
      {
        id: 'gwe',
        name: 'GW-E フレーム',
        no: 'GW-E',
        price: 140000,
        priceKey: 'gwe.base.frame',
      },
    ],
    frameOptions: {
      shape: [{ label: 'タイプI', no: 'No.1' }, { label: 'タイプIII', no: 'No.3' }],
      height: [{ label: 'レギュラー', no: 'No.1' }, { label: 'フラット', no: 'No.3' }],
      pipe: [{ label: 'ストレート', no: 'No.1' }, { label: 'シボリ', no: 'No.2' }],
    },
    frameMap: { 'タイプI-レギュラー-ストレート': 'No.1', 'タイプIII-レギュラー-ストレート': 'No.3' },
    casterForks: [
      { id: 'cz2s_e', name: 'CZ2-Std (アルミ)', no: 'No.52', price: 15000, priceKey: 'gwe.caster.cz2s_e' },
      { id: 'sfr2_e', name: 'SFR2 (サス付)', no: 'No.13', price: 39000, priceKey: 'gwe.caster.sfr2_e' },
    ],
    brakes: [
      { id: 'br_o_e', name: 'ダイヤル上付け', no: 'No.21', price: 26000, priceKey: 'gwe.brake.br_o_e' },
      { id: 'br_u_e', name: 'ダイヤル下付け', no: 'No.22', price: 26000, priceKey: 'gwe.brake.br_u_e' },
    ],
    footrests: COMMON_FOOTRESTS,
    options: [
      { id: 'opt_arm_e', name: 'アームレスト着脱加工', no: 'No.1', price: 4000, priceKey: 'gwe.opt.opt_arm_e' },
      { id: 'opt_ctrl', name: 'コントローラースタンド', no: 'No.1', price: 4000, priceKey: 'gwe.opt.opt_ctrl' },
      // ★GW-E 標準アームレスト
      {
        id: 'opt_arm',
        name: 'アームレスト',
        no: '標準',
        price: 0,
        ahLowByHeight: {
          レギュラー: [250, 260, 270, 280],
          フラット: [260, 270, 280, 290],
        },
        ahHighByHeight: {
          レギュラー: [290, 300, 310, 320, 330],
          フラット: [300, 310, 320, 330, 340],
        },
        priceKey: 'gwe.opt.opt_arm',
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
      { id: 'lx_base', name: 'LX [サイドレザー]', no: 'No.11', price: 169000, priceKey: 'lxlr.base.lx_base' },
      { id: 'lr_base', name: 'LR [サイドカバー]', no: 'No.12', price: 199000, priceKey: 'lxlr.base.lr_base' }
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
    casterForks: [
      { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000, priceKey: 'lxlr.caster.cz2p' },
      { id: 'sfr2_s', name: 'SFR2 ショート', no: 'No.14', price: 39000, priceKey: 'lxlr.caster.sfr2_s' },
    ],
    brakes: [
      { id: 'br_h_s', name: 'ホリゾンタル (S)', no: 'No.11', price: 26000, priceKey: 'lxlr.brake.br_h_s' },
      { id: 'br_o_s', name: 'ダイヤル上付け (S)', no: 'No.21', price: 26000, priceKey: 'lxlr.brake.br_o_s' },
      { id: 'br_u_s', name: 'ダイヤル下付け (S)', no: 'No.22', price: 28000, priceKey: 'lxlr.brake.br_u_s' },
    ],
    footrests:[
      { id: 'ft_pj_std', name: 'プレートジョイント std', no: 'No.11', price: 24000, priceKey: 'lxlr.ft.ft_pj_std' }, 
      { id: 'ft_pipe', name: 'パイプジョイント std', no: 'No.21', price: 24000, priceKey: 'lxlr.ft.ft_pipe' }, 
      { id: 'ft_ps_std', name: 'プレートセパレート std', no: 'No.31', price: 35000, priceKey: 'lxlr.ft.ft_ps_std' }
    ],
    wheels: [
      { id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000, priceKey: 'lxlr.wheel.ds3a' },
      { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000, priceKey: 'lxlr.wheel.ds3z' },
      { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000, priceKey: 'lxlr.wheel.hhr3' },
      { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000, priceKey: 'lxlr.wheel.al5' }
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
        priceKey: 'lxlr.opt.opt_arm',
      },
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000, priceKey: 'lxlr.opt.opt_grip' },
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000, priceKey: 'lxlr.opt.opt_wheelie' },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    tireBrand: 'IRC'
  },
  FX_FR: {
    title: "FX / FR シリーズ",
    baseModels: [
      { id: 'fx_base', name: 'FX [サイドレザー]', no: 'No.1', price: 149000, priceKey: 'fxfr.base.fx_base' },
      { id: 'fr_base', name: 'FR [サイドカバー]', no: 'No.2', price: 180000, priceKey: 'fxfr.base.fr_base' }
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
    casterForks: [
      { id: 'cz2s', name: 'CZ2-Std (アルミ)', no: 'No.24', price: 15000, priceKey: 'fxfr.caster.cz2s' },
      { id: 'cz2p', name: 'CZ2-Pro (カーボン)', no: 'No.23', price: 22000, priceKey: 'fxfr.caster.cz2p' },
      { id: 'sfr2_s', name: 'SFR2 ショート', no: 'No.14', price: 39000, priceKey: 'fxfr.caster.sfr2_s' }
    ],
    brakes: [
      { id: 'br_h_s', name: 'ホリゾンタル (S)', no: 'No.11', price: 26000, priceKey: 'fxfr.brake.br_h_s' },
      { id: 'br_o_s', name: 'ダイヤル上付け (S)', no: 'No.21', price: 26000, priceKey: 'fxfr.brake.br_o_s' },
      { id: 'br_u_s', name: 'ダイヤル下付け (S)', no: 'No.22', price: 28000, priceKey: 'fxfr.brake.br_u_s' }
    ],
    footrests: [
      { id: 'ft_plate', name: 'アルミプレート', no: 'No.11', price: 24000, priceKey: 'fxfr.ft.ft_plate' },
      { id: 'ft_pipe_fx', name: 'パイプ', no: 'No.21', price: 24000, priceKey: 'fxfr.ft.ft_pipe_fx' }
    ],
    wheels: [
      { id: 'ds3a', name: 'DS3 (A面)', no: 'No.251', price: 188000, priceKey: 'fxfr.wheel.ds3a' },
      { id: 'ds3z', name: 'DS3 (Z面)', no: 'No.252', price: 188000, priceKey: 'fxfr.wheel.ds3z' },
      { id: 'hhr3', name: 'HHR3', no: 'No.13', price: 120000, priceKey: 'fxfr.wheel.hhr3' },
      { id: 'al5', name: 'AL-5', no: 'No.75', price: 76000, priceKey: 'fxfr.wheel.al5' },
      { id: 'mx4', name: 'MX4', no: 'No.45', price: 36000, priceKey: 'fxfr.wheel.mx4' }
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
        priceKey: 'fxfr.opt.opt_arm',
      },
      { id: 'opt_grip', name: 'グリップ', no: 'No.11', price: 6000, priceKey: 'fxfr.opt.opt_grip' },
      { id: 'opt_bg', name: 'バックグリップ', no: 'No.1', price: 10000, priceKey: 'fxfr.opt.opt_bg' },
      { id: 'opt_wheelie', name: 'ウィリーバー', no: 'No.1', price: 17000, priceKey: 'fxfr.opt.opt_wheelie' },
    ],
    dimensionRules: { h4: { 'ロー': [300, 310, 320, 330, 340, 350], 'ミディアム': [350, 360, 370, 380, 390, 400], 'ハイ': [400, 410, 420, 430, 440, 450] }, lever: [55, 75, 110, 140], w1: [280, 300, 320, 340, 360, 380, 400, 420], l1: [350, 380, 420], w2: [5, 10, 15, 20, 25, 30] },
    tireBrand: 'IRC',
  },
};
