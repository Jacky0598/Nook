const app = getApp();

Page({
  data: {
    user: {},
    role: 'buyer'   // buyer | seller
  },

  onShow() {
    this.setData({ user: app.globalData.user });
  },

  switchRole(e) {
    this.setData({ role: e.currentTarget.dataset.role });
  },

  onCell(e) {
    wx.showToast({ title: e.currentTarget.dataset.name + '（原型未实现）', icon: 'none' });
  },

  goVerify() {
    wx.showModal({
      title: '学霸认证',
      content: '上传成绩单截图（可遮盖学号），人工审核后即可挂牌该门课的辅导服务，并在名片上显示 HD / D 标识。\n\n审核通常在 24 小时内完成。',
      confirmText: '去上传',
      success: (res) => {
        if (res.confirm) wx.showToast({ title: '原型未实现上传', icon: 'none' });
      }
    });
  }
});
