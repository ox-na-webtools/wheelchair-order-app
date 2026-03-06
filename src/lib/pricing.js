/**
 * 合計金額・内訳の計算（UI非依存）
 * @param {object} params
 * @param {object} params.catalog - 現在シリーズのカタログ (currentCatalog)
 * @param {object} params.priceMaster - 価格マスター (PRICE_MASTER)
 * @param {object} params.selections - 選択状態
 * @param {object} params.dims - その他計算に必要な状態
 * @param {string} params.dims.selectedSeries
 * @param {object} params.dims.frameParts
 * @param {object} params.dims.paint
 * @param {object} params.dims.gweUnitDetail
 * @param {Array} params.dims.selectedOptions
 * @param {Array} params.dims.selectedAccessories
 * @param {object} params.dims.casterWheelType
 * @param {object} params.dims.casterWheelSize
 * @param {object} params.dims.handrimResolved
 * @param {object} params.dims.paintPlans - PAINT_PLANS
 * @param {object} params.dims.gweUnitDetailMaster - GWE_UNIT_DETAIL_MASTER
 * @param {object} params.dims.wheelNoMaster - WHEEL_NO_MASTER
 * @returns {{ totalAmount: number, totalLineItems: Array<{label:string, name:string, no:string, price:number}> }}
 */
export function calcPrice({ catalog, priceMaster, selections, dims }) {
  const getPrice = (key) => {
    if (!key) return 0;
    if (priceMaster != null && Object.prototype.hasOwnProperty.call(priceMaster, key))
      return priceMaster[key];
    console.warn('[PRICE_MASTER] 未登録の priceKey:', key);
    return null;
  };
  const effectivePackageId = (dims.selectedSeries === 'MINI_NEO_KIDS' || dims.selectedSeries === 'MINI_NEO_JUNIOR')
    ? selections.baseModel?.id
    : selections.package?.id;
  const isEnjoy = () => effectivePackageId === 'kids_enjoy' || effectivePackageId === 'jr_enjoy';
  const isSchool = () => effectivePackageId === 'kids_school' || effectivePackageId === 'jr_school';
  const itemPrice = (item) => {
    if (!item) return 0;
    if (item.priceKeyEnjoy != null && item.priceKeySchool != null) {
      const key = isEnjoy() ? item.priceKeyEnjoy : (isSchool() ? item.priceKeySchool : item.priceKeyEnjoy);
      return getPrice(key);
    }
    if (item.priceKeySchool != null && (isSchool())) return getPrice(item.priceKeySchool);
    if (item.priceKey) return getPrice(item.priceKey);
    return item.price != null ? item.price : 0;
  };

  const {
    selectedSeries,
    catalogVariant,
    frameParts,
    paint,
    gweUnitDetail,
    selectedOptions,
    selectedAccessories,
    casterWheelType,
    casterWheelSize,
    handrimResolved,
    paintPlans,
    gweUnitDetailMaster,
    wheelNoMaster,
  } = dims;

  const getWheelNo = (wheel, size) => {
    if (!wheel) return '---';
    const isSpecialSeries = ['MX_MR', 'NEO', 'GWE', 'LX_LR', 'FX_FR'].includes(selectedSeries);
    if (isSpecialSeries) return wheel.no;
    const master = wheelNoMaster && wheelNoMaster[wheel.id];
    if (master && master[size]) return master[size];
    return wheel.no;
  };

  const getAxleDisplayName = (item) => {
    if (!item) return '';
    if (['LX_LR', 'FX_FR'].includes(selectedSeries)) {
      const h = frameParts?.height?.label || 'レギュラー';
      const val = h.includes('フラット') ? item.valFlat : item.valReg;
      return `${item.no} ${val}mm`;
    }
    return item.name;
  };

  // totalAmount
  let sum = 0;
  const list = [selections.baseModel, selections.package, selections.axleType, selections.casterFork, selections.brake, selections.footrest, selections.wheel, handrimResolved, casterWheelType];
  list.forEach((item) => {
    if (item) sum += (itemPrice(item) ?? 0);
  });
  const activePlan = paintPlans && paintPlans.find((p) => p.id === paint.type);
  const paintPlanPriceKey = (catalogVariant === 'kids' && selectedSeries !== 'COTON' && paint.type === 'special_1') ? 'paint.special_1_kids' : (activePlan?.priceKey);
  if (activePlan) sum += (getPrice(paintPlanPriceKey) ?? 0);
  if (selectedSeries === 'COTON' && frameParts?.seat?.price) sum += frameParts.seat.price;
  (selectedOptions || []).forEach((o) => sum += (itemPrice(o) ?? 0));
  (selectedAccessories || []).forEach((a) => sum += (itemPrice(a) ?? 0));
  if (selectedSeries === 'GWE' && gweUnitDetail?.unitId && gweUnitDetailMaster) {
    const u = gweUnitDetailMaster[gweUnitDetail.unitId];
    if (u) {
      sum += (getPrice(u.basePriceKey) ?? 0);
      Object.values(gweUnitDetail.parts || {}).forEach((p) => {
        if (p) sum += (itemPrice(p) ?? 0);
      });
    }
  }
  const totalAmount = sum;

  // totalLineItems
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
  Object.entries(frameParts || {}).forEach(([key, value]) => {
    if (value && value.no) {
      let label = '';
      switch (key) {
        case 'type': label = 'フレームタイプ'; break;
        case 'shape': label = selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状'; break;
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
  add('キャスターフォーク', selections.casterFork);
  if (casterWheelSize) {
    items.push({
      label: 'キャスターホイール',
      name: `${casterWheelType?.type || ''} ${casterWheelSize.label}`,
      no: casterWheelSize.no,
      price: itemPrice(casterWheelType),
    });
  }
  add('フットレスト', selections.footrest);
  add('ブレーキ', selections.brake);
  if (selections.wheel) {
    items.push({
      label: 'ホイール',
      name: selections.wheel.name,
      no: getWheelNo(selections.wheel, selections.wheelSize),
      price: selections.wheel.price,
    });
  }
  if (selections.tire && catalog?.tireBrand) {
    items.push({
      label: 'タイヤ',
      name: `${selections.tire.name} (${catalog.tireBrand})`,
      no: selections.tire.no,
      price: 0,
    });
  }
  add('ハンドリム', handrimResolved);
  const armrestOpt = (selectedOptions || []).find((o) => o && o.__group === 'ARMREST');
  if (armrestOpt) {
    const armName = armrestOpt.note ? `${armrestOpt.name} (${armrestOpt.note})` : armrestOpt.name;
    items.push({ label: 'アームレスト', name: armName, no: armrestOpt.no || '-', price: armrestOpt.price != null ? armrestOpt.price : itemPrice(armrestOpt) });
  }
  if (activePlan) items.push({ label: '塗装プラン', name: activePlan.name, no: '塗装', price: getPrice(paintPlanPriceKey) });
  let colorDisplay = paint.type === 'standard' ? (paint.standardColor || '選択') : '';
  if (paint.type !== 'standard') {
    const customColors = (paint.customColors || []).filter((c) => c && c.trim() !== '');
    if (customColors.length > 0) colorDisplay = customColors.join(' / ');
  }
  items.push({ label: '塗装色', name: colorDisplay, no: '色', price: 0 });
  if (selectedSeries === 'GWE' && gweUnitDetail?.unitId && gweUnitDetailMaster) {
    const u = gweUnitDetailMaster[gweUnitDetail.unitId];
    if (u) {
      items.push({ label: '電動ユニット', name: u.name, no: u.no, price: getPrice(u.basePriceKey) });
      Object.entries(gweUnitDetail.parts || {}).forEach(([, p]) => {
        if (p) items.push({ label: 'ユニット詳細', name: p.name, no: p.no, price: itemPrice(p) });
      });
    }
  }

  return { totalAmount, totalLineItems: items };
}
