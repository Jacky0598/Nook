Page({
  data: {},

  goPublish(e) {
    const mode = e.currentTarget.dataset.mode; // offer | request
    wx.navigateTo({ url: '/pages/publish/publish?mode=' + mode });
  }
});
