/**
 * ミニネオキッズ・ジュニアでスクールパッケージ選択時、
 * プッシュハンドル固定式・ウイリーバー固定式・樹脂製フェンダー小を未選択なら追加する。
 * データ（BASE_IDS, STANDARD_OPTION_IDS）は catalog-kids.js の window に定義される。
 */
const { useEffect } = window.React;

const OPTION_GROUP_BY_ID = {
  opt_push_fixed: ['opt_push_fixed', 'opt_push_slide'],
  opt_wheelie_fixed: ['opt_wheelie_fixed', 'opt_wheelie_fold'],
  opt_fender_s: ['opt_fender_s', 'opt_fender_l'],
};

export function useSyncSchoolPackageOptions(selections, selectedSeries, currentCatalog, setSelectedOptions) {
  useEffect(() => {
    if (!currentCatalog?.options || (selectedSeries !== 'MINI_NEO_KIDS' && selectedSeries !== 'MINI_NEO_JUNIOR')) return;
    const pkgId = selections.baseModel?.id;
    const schoolIds = window.SCHOOL_PACKAGE_BASE_IDS || [];
    if (!schoolIds.includes(pkgId)) return;

    const standardIds = window.SCHOOL_PACKAGE_STANDARD_OPTION_IDS || [];
    const opts = currentCatalog.options;

    setSelectedOptions(prev => {
      let next = [...(prev || [])];
      for (const optId of standardIds) {
        const opt = opts.find(o => o.id === optId);
        if (!opt) continue;
        const hasInGroup = (next || []).some(o => o && OPTION_GROUP_BY_ID[optId]?.includes(o.id));
        if (!hasInGroup) {
          const groupIds = OPTION_GROUP_BY_ID[optId] || [optId];
          next = next.filter(o => o && !groupIds.includes(o.id));
          next.push(opt);
        }
      }
      return next;
    });
  }, [selections.baseModel?.id, selectedSeries, currentCatalog, setSelectedOptions]);
}
