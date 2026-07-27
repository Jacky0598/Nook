const mock = require('../../utils/mock.js');
const app = getApp();

const SORTS = [
  { key: 'rating', name: '好评优先' },
  { key: 'price',  name: '价格低到高' },
  { key: 'orders', name: '接单量' }
];

Page({
  data: {
    tabs: [{ key: 'all', name: '全部' }].concat(
      mock.CATEGORIES.map(c => ({ key: c.key, name: c.name }))
    ),
    activeTab: 'all',
    sorts: SORTS,
    activeSort: 'rating',
    keyword: '',
    list: [],
    compareMode: false,
    selected: [],       // 比价选中的 id
    compareList: []
  },

  onLoad() {
    this.load();
  },

  // 供首页跳转时调用
  applyCategory(key) {
    this.setData({ activeTab: key }, this.load);
  },
  applyKeyword(kw) {
    this.setData({ keyword: kw }, this.load);
  },

  load() {
    const selected = this.data.selected || [];
    // WXML 表达式不支持 indexOf 等方法调用，选中态必须在 JS 里算成布尔字段
    const list = mock.getListings(this.data.activeTab, this.data.keyword, this.data.activeSort)
      .map(l => Object.assign({}, l, { checked: selected.indexOf(l.id) > -1 }));
    this.setData({ list });
  },

  onTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.key }, this.load);
  },

  onSort(e) {
    this.setData({ activeSort: e.currentTarget.dataset.key }, this.load);
  },

  onKeyword(e) {
    this.setData({ keyword: e.detail.value });
  },

  onSearch() {
    this.load();
  },

  clearKeyword() {
    this.setData({ keyword: '' }, this.load);
  },

  toggleCompare() {
    this.setData(
      { compareMode: !this.data.compareMode, selected: [], compareList: [] },
      this.load
    );
  },

  onSelect(e) {
    const id = e.currentTarget.dataset.id;
    let selected = this.data.selected.slice();
    const i = selected.indexOf(id);
    if (i > -1) {
      selected.splice(i, 1);
    } else {
      if (selected.length >= 3) {
        wx.showToast({ title: '最多对比 3 个', icon: 'none' });
        return;
      }
      selected.push(id);
    }
    this.setData(
      { selected, compareList: selected.map(sid => mock.getListingById(sid)) },
      this.load
    );
  },

  goDetail(e) {
    if (this.data.compareMode) return this.onSelect(e);
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  }
});
