const mock = require('../../utils/mock.js');

Page({
  data: { list: [] },

  onShow() {
    this.setData({ list: mock.getConversations() });
  },

  openChat(e) {
    wx.showModal({
      title: e.currentTarget.dataset.name,
      content: '原型演示：真实环境这里是完整的站内 IM 会话页（文本 + 图片 + 订单卡片）。\n\n站内聊天是平台留存交易的关键 —— 一旦用户跳到微信私聊，后面的订单、评价、纠纷记录就全丢了。',
      showCancel: false
    });
  }
});
