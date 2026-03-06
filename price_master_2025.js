// =========================
// 価格マスター（2025）
// =========================

// ===============================
// 共通アクセサリー価格（全機種共通・価格改定はここだけ編集）
// ===============================
const COMMON_ACCESSORY_PRICES = {
  'acc.pouch': 2600,
  'acc.armcover': 4800,
  'acc.bottle': 2200,
  'acc.backpack': 8000,
  'acc.bag_s': 7400,
  'acc.net': 5500,
  'acc.suit': 6200,
  'acc.framecover': 4000,
  'acc.belt_a': 5200,
  'acc.belt_e.s': 5500,
  'acc.belt_e.m': 6000,
  'acc.belt_e.l': 6500,
  'acc.belt_h.s': 2400,
  'acc.belt_h.m': 2600,
  'acc.belt_h.l': 2800,
  'acc.tool': 1400,
  'acc.pump': 24200,
  'acc.cushion': 16000,
};

const PRICE_MASTER_2025 = {
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
  'paint.special_1_kids': 0,   // キッズ(コトン以外) 1色塗装は全色無料
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
  // MX/MR・NEO用 ビニールコーティング追加料金
  'handrim.vinyl.mxneo_extra': 5000,
  // キッズカタログ全機種 ビニールコーティング追加料金
  'handrim.vinyl.kids_extra': 3000,
  // アクセサリー（全機種共通 → COMMON_ACCESSORY_PRICES を参照）
  ...COMMON_ACCESSORY_PRICES,
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

  // ===============================
  // 共通フットレスト（COMMON_FOOTRESTS）
  // ===============================
  "common.ft_pj_std": 24000,
  "common.ft_pj_hi": 27000,
  "common.ft_ps_std": 35000,
  "common.ft_ps_hi": 27000,
  "common.ft_pipe": 24000,

  // ===============================
  // ZZR シリーズ
  // ===============================
  "zzr.base.zzr": 278000,
  "zzr.axle.axle_a": 0,
  "zzr.axle.axle_b": 22000,
  "zzr.caster.cz2p": 22000,
  "zzr.caster.sfr2": 39000,
  "zzr.brake.br_h": 26000,
  "zzr.brake.br_o": 26000,
  "zzr.brake.br_u": 26000,
  "zzr.ft.ft_pj_std": 24000,
  "zzr.ft.ft_pipe": 24000,
  "zzr.ft.ft_ps_std": 35000,
  "zzr.wheel.ds3a": 188000,
  "zzr.wheel.ds3z": 188000,
  "zzr.wheel.hhr3": 120000,
  "zzr.wheel.al5": 76000,
  "zzr.wheel.mx4": 36000,
  "zzr.opt.opt_arm_l": 22000,
  "zzr.opt.opt_arm_h": 22000,
  "zzr.opt.opt_grip": 6000,
  "zzr.opt.opt_wheelie": 17000,
  "zzr.opt.opt_sideguard": 20000,
  "zzr.opt.opt_sideguard_fender": 25000,
  "zzr.opt.opt_micro": 22000,
  "zzr.opt.opt_l_flap": 8000,
  "zzr.opt.opt_l_zip": 5000,
  "zzr.opt.opt_mag_cross": 30000,

  // ===============================
  // GWX III シリーズ
  // ===============================
  "gwx3.base.gwx3": 149000,
  "gwx3.caster.cz2p": 22000,
  "gwx3.caster.sfr2": 39000,
  "gwx3.brake.br_h": 26000,
  "gwx3.brake.br_o": 26000,
  "gwx3.brake.br_u": 28000,
  "gwx3.ft.ft_pj_std": 24000,
  "gwx3.ft.ft_pipe": 24000,
  "gwx3.ft.ft_ps_std": 35000,
  "gwx3.wheel.spn_w": 142000,
  "gwx3.wheel.spn_b": 142000,
  "gwx3.wheel.ds3a": 188000,
  "gwx3.wheel.ds3z": 188000,
  "gwx3.wheel.al5": 76000,
  "gwx3.wheel.mx4": 36000,
  "gwx3.opt.opt_arm": 22000,
  "gwx3.opt.opt_flip": 28000,
  "gwx3.opt.opt_grip": 6000,
  "gwx3.opt.opt_wheelie": 17000,
  "gwx3.opt.opt_micro": 22000,
  "gwx3.opt.opt_guard": 15000,
  "gwx3.opt.opt_f_guard": 25000,

  // ===============================
  // SX / SR シリーズ
  // ===============================
  "sx.base.sx": 119000,
  "sx.base.sr": 157000,
  "sx.axle.axle_a": 0,
  "sx.axle.axle_b": 22000,
  "sx.caster.cz2s": 15000,
  "sx.caster.cz2p": 22000,
  "sx.caster.sfr2": 39000,
  "sx.brake.br_u": 26000,
  "sx.brake.br_o": 26000,
  "sx.brake.br_h": 26000,
  "sx.ft.ft_pj_std": 24000,
  "sx.ft.ft_pj_hi": 27000,
  "sx.ft.ft_ps_std": 35000,
  "sx.ft.ft_ps_hi": 27000,
  "sx.ft.ft_pipe": 24000,
  "sx.wheel.ds3a": 188000,
  "sx.wheel.ds3z": 188000,
  "sx.wheel.hhr3": 120000,
  "sx.wheel.al5": 76000,
  "sx.wheel.mx4": 36000,
  "sx.opt.opt_arm": 22000,
  "sx.opt.opt_flip": 28000,
  "sx.opt.opt_grip": 6000,
  "sx.opt.opt_wheelie": 17000,
  "sx.opt.opt_micro": 22000,

  // ===============================
  // MX / MR シリーズ（オプション等）
  // ===============================
  "mxmr.base.mx": 0,
  "mxmr.base.mr": 0,
  "mxmr.brake.br_h": 0,
  "mxmr.brake.br_o": 0,
  "mxmr.brake.br_u": 0,
  "mxmr.opt.opt_arm_mr": 22000,
  "mxmr.opt.opt_flip": 6000,
  "mxmr.opt.opt_grip": 6000,
  "mxmr.opt.opt_wheelie": 17000,
  "mxmr.opt.opt_micro": 22000,
  "mxmr.opt.opt_suit_mx": 6200,
  "mxmr.opt.opt_wide_add": 8000,

  // ===============================
  // Fusion シリーズ
  // ===============================
  "fusion.base.fusion": 62000,
  "fusion.caster.cz2s": 15000,
  "fusion.caster.cz2p": 22000,
  "fusion.caster.sfr2": 39000,
  "fusion.brake.br_o": 26000,
  "fusion.wheel.kaid": 55000,
  "fusion.wheel.hhr3": 120000,
  "fusion.wheel.al5": 76000,
  "fusion.wheel.mx4": 36000,
  "fusion.wheel.fixed": 17000,
  "fusion.opt.opt_grip": 6000,
  "fusion.opt.opt_flip": 28000,
  "fusion.opt.opt_hi_leather": 12000,
  "fusion.opt.opt_arm": 22000,
  "fusion.opt.opt_wheelie": 14000,
  "fusion.opt.opt_tip": 5000,

  // ===============================
  // GW-E フレーム（GWE カタログ）
  // ===============================
  "gwe.base.frame": 140000,
  "gwe.caster.cz2s_e": 15000,
  "gwe.caster.sfr2_e": 39000,
  "gwe.brake.br_o_e": 26000,
  "gwe.brake.br_u_e": 26000,
  "gwe.opt.opt_arm_e": 4000,
  "gwe.opt.opt_ctrl": 4000,
  "gwe.opt.opt_arm": 0,

  // ===============================
  // NEO / NEOplus シリーズ
  // ===============================
  // NEO 本体（価格はパッケージ側で管理しているため 0）
  "neo.base": 0,
  // NEO ブレーキ
  "neo.brake.br_h": 0,
  "neo.brake.br_o": 0,
  "neo.brake.br_u": 0,
  // NEO オプション
  "neo.opt.opt_arm": 0,
  "neo.opt.opt_flip": 6000,
  "neo.opt.opt_arm_detachable": 4000,
  "neo.opt.opt_grip": 6000,
  "neo.opt.opt_assist_grip": 8000,
  "neo.opt.opt_bush_handle_slide": 32000,
  "neo.opt.opt_wheelie": 17000,
  "neo.opt.opt_micro": 22000,
  "neo.opt.opt_fender_neo": 27000,
  "neo.opt.opt_straight_pipe": -5000,
  "neo.opt.opt_wide_add": 8000,

  // NEOplus 本体・構成
  "neop.base.frame": 118000,
  // NEOplus キャスター
  "neop.caster.cz2s_n": 15000,
  "neop.caster.cz2p_n": 22000,
  "neop.caster.sfr2_n": 39000,
  // NEOplus ブレーキ
  "neop.brake.br_u_n": 26000,
  "neop.brake.br_o_n": 26000,
  "neop.brake.br_h_n": 26000,
  // NEOplus フットレスト
  "neop.ft.ft_pj_std_n": 24000,
  "neop.ft.ft_pj_hi_n": 27000,
  "neop.ft.ft_ps_std_n": 35000,
  "neop.ft.ft_ps_hi_n": 27000,
  "neop.ft.ft_pipe_n": 24000,
  // NEOplus ホイール
  "neop.wheel.ds3a": 188000,
  "neop.wheel.ds3z": 188000,
  "neop.wheel.hhr3": 120000,
  "neop.wheel.al5": 76000,
  "neop.wheel.mx4_n": 36000,
  "neop.wheel.kaid_n": 55000,
  // NEOplus オプション
  "neop.opt.opt_grip": 6000,
  "neop.opt.opt_assist_n": 8000,
  "neop.opt.opt_bush_handle_slide": 32000,
  "neop.opt.opt_arm_ln": 22000,
  "neop.opt.opt_flip": 28000,
  "neop.opt.opt_fender_n": 27000,
  "neop.opt.opt_micro": 22000,

  // ===============================
  // LX / LR シリーズ
  // ===============================
  "lxlr.base.lx_base": 169000,
  "lxlr.base.lr_base": 199000,
  // キャスター
  "lxlr.caster.cz2p": 22000,
  "lxlr.caster.sfr2_s": 39000,
  // ブレーキ
  "lxlr.brake.br_h_s": 26000,
  "lxlr.brake.br_o_s": 26000,
  "lxlr.brake.br_u_s": 28000,
  // フットレスト
  "lxlr.ft.ft_pj_std": 24000,
  "lxlr.ft.ft_pipe": 24000,
  "lxlr.ft.ft_ps_std": 35000,
  // ホイール
  "lxlr.wheel.ds3a": 188000,
  "lxlr.wheel.ds3z": 188000,
  "lxlr.wheel.hhr3": 120000,
  "lxlr.wheel.al5": 76000,
  // オプション
  "lxlr.opt.opt_arm": 22000,
  "lxlr.opt.opt_grip": 6000,
  "lxlr.opt.opt_wheelie": 17000,

  // ===============================
  // FX / FR シリーズ
  // ===============================
  "fxfr.base.fx_base": 149000,
  "fxfr.base.fr_base": 180000,
  // キャスター
  "fxfr.caster.cz2s": 15000,
  "fxfr.caster.cz2p": 22000,
  "fxfr.caster.sfr2_s": 39000,
  // ブレーキ
  "fxfr.brake.br_h_s": 26000,
  "fxfr.brake.br_o_s": 26000,
  "fxfr.brake.br_u_s": 28000,
  // フットレスト
  "fxfr.ft.ft_plate": 24000,
  "fxfr.ft.ft_pipe_fx": 24000,
  // ホイール
  "fxfr.wheel.ds3a": 188000,
  "fxfr.wheel.ds3z": 188000,
  "fxfr.wheel.hhr3": 120000,
  "fxfr.wheel.al5": 76000,
  "fxfr.wheel.mx4": 36000,
  // オプション
  "fxfr.opt.opt_arm": 22000,
  "fxfr.opt.opt_grip": 6000,
  "fxfr.opt.opt_bg": 10000,
  "fxfr.opt.opt_wheelie": 17000,

  // ===============================
  // Kids ベースモデル
  // ===============================
  "kids.base.toddler": 162000,
  "kids.base.kids_enjoy": 167000,
  "kids.base.kids_school": 204000,
  "kids.base.jr_enjoy": 167000,
  "kids.base.jr_school": 204000,
  "kids.base.a_kids": 167000,
  "kids.base.a_jr": 167000,
  "kids.base.e_kids": 594000,
  "kids.base.e_jr": 594000,
  "kids.base.coton_s": 230000,
  "kids.base.coton_m": 230000,

  // ===============================
  // Kids フットレスト
  // ===============================
  "kids.footrest.ft_pj_hi": 0,
  "kids.footrest.ft_ps_hi": 0,

  // ===============================
  // Kids ブレーキ
  // ===============================
  "kids.brake.br_dial": 5000,
  "kids.brake.br_dial_u": 5000,
  "kids.brake.br_dial_o": 5000,
  "kids.brake.br_dial_band": 14000,
  "kids.brake.br_std": 0,

  // ===============================
  // Kids ホイール
  // ===============================
  "kids.wheel.mx4_20": 0,
  "kids.wheel.mx4_22": 0,
  "kids.wheel.std_16": 0,
  "kids.wheel.std_20": 0,
  "kids.wheel.std_22": 0,

  // ===============================
  // Kids オプション
  // ===============================
  "kids.option.opt_cushion_caster": 8000,
  "kids.option.opt_wide_caster": 8000,
  "kids.option.opt_arm": 6000,
  "kids.option.opt_arm_std": 0,
  "kids.option.opt_flip_arm": 6000,
  "kids.option.opt_grip": 5000,
  "kids.option.opt_push": 13000,
  "kids.option.opt_push_slide": 32000,
  // ミニネオキッズ・ジュニア パッケージ別
  "kids.option.opt_push_fixed_enjoy": 13000,
  "kids.option.opt_push_fixed_school": 0,
  "kids.option.opt_push_slide_enjoy": 32000,
  "kids.option.opt_push_slide_school": 19000,
  "kids.option.opt_wheelie_fixed_enjoy": 16000,
  "kids.option.opt_wheelie_fixed_school": 0,
  "kids.option.opt_wheelie_fold_enjoy": 27000,
  "kids.option.opt_wheelie_fold_school": 11000,
  "kids.option.opt_fender_s": 10000,
  "kids.option.opt_fender_s_school": 0,
  "kids.option.opt_fender_l_enjoy": 14000,
  "kids.option.opt_fender_l_school": 3000,
  "kids.option.opt_arm_toddler": 21000,
  "kids.option.opt_flip_arm_toddler": 27000,
  "kids.option.opt_fender_l": 14000,
  "kids.option.opt_wheelie": 16000,
  "kids.option.opt_fender": 10000,
  "kids.option.opt_cushion_tbl": 17000,
  "kids.option.opt_clear_tbl": 23000,
  "kids.option.opt_big_pocket": 2000,
  "kids.option.opt_foot_br": 16000,
  "kids.option.opt_kaid_wheel": 21000,
  "kids.option.opt_band_br": 16000,
  "kids.option.opt_joystick": 7500,
  "kids.option.opt_battery_li": 63000,
  "kids.option.opt_wheelie_coton": 8000,
  "kids.option.opt_grab_coton": 8000,

  // ===============================
  // coton シート・アクセサリー
  // ===============================
  "kids.frame.coton_seat_std": 0,
  "kids.frame.coton_seat_palm": 10000,
  "kids.acc.coton_canter": 22000,
  "kids.acc.coton_pillow": 8000,
  "kids.acc.coton_body": 6500,
  "kids.acc.coton_chest": 7000,
  "kids.acc.coton_crotch": 6800,
  "kids.acc.coton_assist": 5200,
  "kids.acc.coton_shoulder": 8000,
  "kids.acc.coton_waist": 4800,
  "kids.acc.coton_table": 17000,
  "kids.acc.coton_net": 5500,
  "kids.acc.coton_ft_cover": 7000,
  "kids.acc.coton_basket": 8800,
  "kids.acc.coton_sun": 20000,
  "kids.acc.coton_rain": 10000,
};

// （旧レガシー PRICE_MASTER 初期化ブロックは整理）

// =========================
// 価格マスター（2026・暫定）
//   → 価格改定時にこちらだけ更新
// =========================
const PRICE_MASTER_2026 = {
  ...PRICE_MASTER_2025,
};

// 年ごとのマスターをまとめたマップ
const PRICE_MASTERS = {
  2025: PRICE_MASTER_2025,
  2026: PRICE_MASTER_2026,
};

// IIFE で window に公開（既存互換も維持）
;(function (global) {
  // 年ごとのマスター
  global.PRICE_MASTER_2025 = PRICE_MASTER_2025;
  global.PRICE_MASTER_2026 = PRICE_MASTER_2026;
  global.PRICE_MASTERS = PRICE_MASTERS;

  // 現在利用中の年（必要になったら 2026 に変更）
  global.PRICE_MASTER_YEAR = global.PRICE_MASTER_YEAR || 2025;

  // 既存コード向けの互換レガシー（単一マスター）
  //   → デフォルトは 2025 
  global.PRICE_MASTER = global.PRICE_MASTER || PRICE_MASTER_2025;

  // 年切り替え用API
  global.setPriceMasterYear = function (year) {
    if (PRICE_MASTERS[year]) {
      global.PRICE_MASTER_YEAR = year;
      // 事故防止のため PRICE_MASTER も選択年に追従させる
      global.PRICE_MASTER = PRICE_MASTERS[year];
    }
  };
})(window);
