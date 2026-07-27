const mock = require('../../utils/mock.js');
const app = getApp();

Page({
  data: {
    school: '',
    schools: mock.SCHOOLS,
    schoolIndex: 0,
    categories: mock.CATEGORIES,
    hotListings: [],
    requests: [],
    keyword: ''
  },

  onLoad() {
    this.refresh();
  },

  onShow() {
    this.setData({ school: app.globalData.currentSchool });
  },

  refresh() {
    this.setData({
      school: app.globalData.currentSchool,
      schoolIndex: mock.SCHOOLS.indexOf(app.globalData.currentSchool),
      hotListings: mock.getHotListings(),
      requests: mock.getOpenRequests()
    });
  },

  onSchoolChange(e) {
    const school = mock.SCHOOLS[e.detail.value];
    app.setSchool(school);
    this.setData({ school, schoolIndex: e.detail.value });
    wx.showToast({ title: '已切换到 ' + school, icon: 'none' });
  },

  onSearchInput(e) {
    this.setData({ keyword: e.detail.value });
  },

  onSearchConfirm() {
    wx.switchTab({
      url: '/pages/explore/explore',
      success: () => {
        const page = getCurrentPages().find(p => p.route === 'pages/explore/explore');
        if (page) page.applyKeyword(this.data.keyword);
      }
    });
  },

  goCategory(e) {
    const key = e.currentTarget.dataset.key;
    wx.switchTab({
      url: '/pages/explore/explore',
      success: () => {
        const page = getCurrentPages().find(p => p.route === 'pages/explore/explore');
        if (page) page.applyCategory(key);
      }
    });
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },

  onTakeRequest(e) {
    wx.showModal({
      title: '向该需求报价',
      content: '原型演示：真实环境这里会打开报价表单，填写价格与说明后提交给需求方。',
      showCancel: false,
      confirmText: '知道了'
    });
  },

  onPullDownRefresh() {
    this.refresh();
    wx.stopPullDownRefresh();
  }
});
