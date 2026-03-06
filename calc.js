;(function (global) {
  // ===============================
  // 価格取得・加算ルール
  // ===============================
  function getPrice(key) {
    if (!key) return 0;

    // 年指定マスター（PRICE_MASTERS / PRICE_MASTER_YEAR）があればそちらを優先
    const masters = global.PRICE_MASTERS || null;
    const year = global.PRICE_MASTER_YEAR || 2025;
    const masterByYear = masters && masters[year];

    // なければ従来どおり単一の PRICE_MASTER を見る（互換用）
    const master = masterByYear || global.PRICE_MASTER || {};

    if (master[key] != null) {
      return master[key];
    }

    // デバッグ時のみ未定義キーを警告
    if (global.PRICE_DEBUG) {
      console.warn('[PRICE] 未定義の priceKey が使用されました:', {
        key,
        year,
        hasMasterByYear: !!masterByYear,
      });
    }

    return 0;
  }

  function itemPrice(item) {
    if (!item) return 0;
    if (item.priceKey) return getPrice(item.priceKey);
    return item.price || 0;
  }

  // ===============================
  // 合計金額の計算
  // ===============================
  function calcTotalAmount(params) {
    const {
      selections,
      handrimResolved,
      casterWheelType,
      selectedOptions,
      selectedAccessories,
      paint,
      selectedSeries,
      gweUnitDetail,
      frameParts,
      PAINT_PLANS,
      GWE_UNIT_DETAIL_MASTER,
    } = params;

    let sum = 0;
    // 注意: selections.tire はタイヤ色選択のみで現状価格=0。有料タイヤ追加時は list に含めること
    const list = [
      selections.baseModel,
      selections.package,
      selections.axleType,
      selections.casterFork,
      selections.brake,
      selections.footrest,
      selections.wheel,
      handrimResolved,
      casterWheelType,
    ];
    list.forEach((item) => {
      if (item) sum += itemPrice(item);
    });

    // 塗装価格計算
    const activePlan =
      (PAINT_PLANS || []).find((p) => p.id === paint.type) || null;
    if (activePlan) sum += getPrice(activePlan.priceKey);

    if (selectedSeries === 'COTON' && frameParts.seat && frameParts.seat.price) {
      sum += frameParts.seat.price;
    }

    (selectedOptions || []).forEach((o) => (sum += itemPrice(o)));
    (selectedAccessories || []).forEach((a) => (sum += itemPrice(a)));

    if (selectedSeries === 'GWE' && gweUnitDetail && gweUnitDetail.unitId) {
      const master = GWE_UNIT_DETAIL_MASTER || {};
      const u = master[gweUnitDetail.unitId];
      if (u) {
        sum += getPrice(u.basePriceKey);
        Object.values(gweUnitDetail.parts || {}).forEach((p) => {
          if (p) sum += itemPrice(p);
        });
      }
    }

    return sum;
  }

  // ===============================
  // 明細行の算出
  // ===============================
  function calcTotalLineItems(params) {
    const {
      selections,
      handrimResolved,
      frameParts,
      selectedSeries,
      casterWheelType,
      casterWheelSize,
      selectedOptions,
      selectedAccessories,
      paint,
      gweUnitDetail,
      currentCatalog,
      getWheelNo,
      getAxleDisplayName,
      PAINT_PLANS,
      GWE_UNIT_DETAIL_MASTER,
    } = params;

    const items = [];
    const add = (label, item) => {
      if (item) {
        let name = item.name || item.type;
        if (
          label === '車軸' &&
          ['LX_LR', 'FX_FR'].includes(selectedSeries) &&
          typeof getAxleDisplayName === 'function'
        ) {
          name = getAxleDisplayName(item);
        }
        items.push({ label, name, no: item.no, price: itemPrice(item) });
      }
    };

    add('本体・機種', selections.baseModel);
    add('パッケージ', selections.package);

    // フレーム構成要素の追加（記入No.があるものを個別行として表示）
    Object.entries(frameParts || {}).forEach(([key, value]) => {
      if (value && value.no) {
        let label = '';
        switch (key) {
          case 'type':
            label = 'フレームタイプ';
            break;
          case 'shape':
            label = selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状';
            break;
          case 'length':
            label = '長さ';
            break;
          case 'height':
            label = '高さ';
            break;
          case 'pipe':
            label = 'フロントパイプ';
            break;
          case 'size':
            label = 'サイズ';
            break;
          default:
            label = 'フレーム構成';
        }
        items.push({
          label,
          name: value.label,
          no: value.no,
          price: 0,
        });
      }
    });

    add('車軸', selections.axleType);

    // ① キャスターフォーク
    add('キャスターフォーク', selections.casterFork);

    // ② キャスターホイール
    if (casterWheelSize) {
      items.push({
        label: 'キャスターホイール',
        name: `${casterWheelType && casterWheelType.type} ${
          casterWheelSize.label
        }`,
        no: casterWheelSize.no,
        price: itemPrice(casterWheelType),
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
        no:
          typeof getWheelNo === 'function'
            ? getWheelNo(selections.wheel, selections.wheelSize)
            : selections.wheel.no,
        price: selections.wheel.price,
      });
    }

    // ⑥ タイヤ
    if (selections.tire && currentCatalog && currentCatalog.tireBrand) {
      items.push({
        label: 'タイヤ',
        name: `${selections.tire.name} (${currentCatalog.tireBrand})`,
        no: selections.tire.no,
        price: 0,
      });
    }

    // ⑦ ハンドリム
    add('ハンドリム', handrimResolved);

    // ⑧ アームレスト（ロー/ハイ・番号・金額をマニュフェストに表示）
    const armrestOpt = (selectedOptions || []).find(
      (o) => o && o.__group === 'ARMREST',
    );
    if (armrestOpt) {
      const armName = armrestOpt.note
        ? `${armrestOpt.name} (${armrestOpt.note})`
        : armrestOpt.name;
      items.push({
        label: 'アームレスト',
        name: armName,
        no: armrestOpt.no || '-',
        price:
          armrestOpt.price != null
            ? armrestOpt.price
            : itemPrice(armrestOpt),
      });
    }

    const activePlan =
      (PAINT_PLANS || []).find((p) => p.id === paint.type) || null;
    if (activePlan) {
      items.push({
        label: '塗装プラン',
        name: activePlan.name,
        no: '塗装',
        price: getPrice(activePlan.priceKey),
      });
    }

    let colorDisplay =
      paint.type === 'standard' ? paint.standardColor || '選択' : '';
    if (paint.type !== 'standard') {
      const customColors = (paint.customColors || []).filter(
        (c) => c.trim() !== '',
      );
      if (customColors.length > 0) colorDisplay = customColors.join(' / ');
    }
    items.push({
      label: '塗装色',
      name: colorDisplay,
      no: '色',
      price: 0,
    });

    if (selectedSeries === 'GWE' && gweUnitDetail && gweUnitDetail.unitId) {
      const master = GWE_UNIT_DETAIL_MASTER || {};
      const u = master[gweUnitDetail.unitId];
      if (u) {
        items.push({
          label: '電動ユニット',
          name: u.name,
          no: u.no,
          price: getPrice(u.basePriceKey),
        });
        Object.entries(gweUnitDetail.parts || {}).forEach(([gk, p]) => {
          if (p) {
            items.push({
              label: 'ユニット詳細',
              name: p.name,
              no: p.no,
              price: itemPrice(p),
            });
          }
        });
      }
    }

    return items;
  }

  // ===============================
  // 必須チェック
  // ===============================
  function calcMissingRequiredItems(params) {
    const {
      selectedSeries,
      currentCatalog,
      selections,
      frameParts,
      dimensionOptsMap,
      dimensions,
      casterWheelType,
      casterWheelSize,
      gweUnitDetail,
      armrestSel,
      catalogVariant,
      armrestConfig,
      HANDRIM_OPTIONS,
      GWE_UNIT_DETAIL_MASTER,
      DIMENSION_LABELS,
    } = params;

    const missing = [];
    if (!selectedSeries || !currentCatalog) return missing;

    if (
      selectedSeries !== 'NEO' &&
      currentCatalog.baseModels &&
      currentCatalog.baseModels.length &&
      !selections.baseModel
    ) {
      missing.push('基本構成モデル');
    }

    if (
      (selectedSeries === 'MX_MR' || selectedSeries === 'NEO') &&
      !selections.package
    ) {
      missing.push('パッケージ');
    }

    if (currentCatalog.frameOptions) {
      const frameLabels = {
        type: 'フレームタイプ',
        shape: selectedSeries === 'NEO' ? 'フレーム前方形状' : '前方形状',
        length: '長さ',
        height: '高さ',
        pipe: 'フロントパイプ',
        size: 'サイズ',
        seat: 'シート',
      };
      Object.keys(currentCatalog.frameOptions).forEach((cat) => {
        if (!frameParts[cat]) missing.push(frameLabels[cat] || cat);
      });
    }

    if (selectedSeries === 'GWE') {
      const unitMaster = GWE_UNIT_DETAIL_MASTER || {};
      if (!gweUnitDetail || !gweUnitDetail.unitId) {
        missing.push('電動ユニット（GW-E）');
      } else if (unitMaster[gweUnitDetail.unitId]?.groups) {
        unitMaster[gweUnitDetail.unitId].groups.forEach((g) => {
          if (!gweUnitDetail.parts || !gweUnitDetail.parts[g.key]) {
            missing.push(`電動ユニット - ${g.label}`);
          }
        });
      }
    }

    if (selectedSeries !== 'COTON') {
      if (
        currentCatalog.axleTypes &&
        currentCatalog.axleTypes.length &&
        !selections.axleType
      ) {
        missing.push('車軸タイプ');
      }
      if (
        currentCatalog.casterForks &&
        currentCatalog.casterForks.length &&
        !selections.casterFork
      ) {
        missing.push('キャスターフォーク');
      }
      if (catalogVariant !== 'kids') {
        if (!casterWheelType) missing.push('キャスターホイール（種類）');
        if (casterWheelType && !casterWheelSize) {
          missing.push('キャスターホイール（サイズ）');
        }
      }
      if (
        currentCatalog.footrests &&
        currentCatalog.footrests.length &&
        !selections.footrest
      ) {
        missing.push('フットレスト');
      }
      if (
        currentCatalog.brakes &&
        currentCatalog.brakes.length &&
        !selections.brake
      ) {
        missing.push('ブレーキシステム');
      }
    }

    if (selectedSeries !== 'GWE') {
      const hasMainWheel =
        currentCatalog.wheels && currentCatalog.wheels.length > 0;
      if (hasMainWheel && !selections.wheel) {
        missing.push('メインホイール（種類）');
      }
      if (hasMainWheel && !selections.wheelSize) {
        missing.push('メインホイール（サイズ）');
      }
      if (
        currentCatalog.tireBrand &&
        !selections.tire &&
        catalogVariant !== 'kids'
      ) {
        missing.push('タイヤカラー');
      }
      if ((HANDRIM_OPTIONS || []).length && !selections.handrim) {
        missing.push('ハンドリム');
      }
    }

    const cotonSkipDims =
      selectedSeries === 'COTON' ? ['l8', 'w2', 'cm', 'sb'] : [];

    Object.entries(dimensionOptsMap || {}).forEach(([key, opts]) => {
      if (cotonSkipDims.includes(key)) return;
      const arr = Array.isArray(opts) ? opts : [];
      if (arr.length <= 1) return;

      if (key === 'h4Type' || key === 'h4Val') {
        if (key === 'h4Type' && !dimensions.h4Type) {
          missing.push(DIMENSION_LABELS.h4Type);
        }
        if (
          key === 'h4Val' &&
          dimensions.h4Type &&
          (!dimensions.h4Val ||
            String(dimensions.h4Val).trim() === '')
        ) {
          missing.push(DIMENSION_LABELS.h4Val);
        }
        return;
      }

      if (key === 'h2' && !dimensions.casterWheel) return; // キャスター未選択時は h2 は問わない
      if (key === 'h3' && arr.length <= 1) return; // 後座高が選択肢なし or 1つのみの機種は問わない

      const val = dimensions[key];
      if (
        val === undefined ||
        val === null ||
        String(val).trim() === ''
      ) {
        missing.push(DIMENSION_LABELS[key] || key);
      }
    });

    if (
      armrestSel.kind &&
      (!armrestSel.lh || !armrestSel.ah)
    ) {
      missing.push('アームレスト（高低・高さ）');
    }

    if (
      armrestSel.kind &&
      armrestConfig &&
      armrestConfig.armrestLengths &&
      armrestConfig.armrestLengths.length &&
      (selectedSeries === 'MINI_NEO_KIDS' ||
        selectedSeries === 'MINI_NEO_JUNIOR') &&
      !armrestSel.al
    ) {
      missing.push('アームレスト長');
    }

    return missing;
  }

  // ===============================
  // 公開API
  // ===============================
  global.calcGetPrice = getPrice;
  global.calcItemPrice = itemPrice;
  global.calcTotalAmount = calcTotalAmount;
  global.calcTotalLineItems = calcTotalLineItems;
  global.calcMissingRequiredItems = calcMissingRequiredItems;
})(window);

