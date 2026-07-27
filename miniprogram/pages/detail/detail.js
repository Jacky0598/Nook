const mock = require('../../utils/mock.js');

Page({
  data: {
    listing: null,
    reviews: []
  },

  onLoad(query) {
    const listing = mock.getListingById(query.id);
    this.setData({ listing, reviews: mock.getReviews() });
    if (listing) wx.setNavigationBarTitle({ title: listing.seller.name + ' 的服务' });
  },

  onChat() {
    wx.switchTab({ url: '/pages/message/message' });
  },

  onBook() {
    wx.showModal({
      title: '确认预约',
      content: '原型演示：真实环境这里会生成订单（记录金额、时间、双方），线下用 TNG / DuitNow 付款，完成后双方互评。',
      confirmText: '生成订单',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '订单已创建', icon: 'success' });
        }
      }
    });
  },

  onReport() {
    wx.showActionSheet({
      itemList: ['涉嫌代写/代考', '涉嫌售卖版权材料', '虚假信息', '价格欺诈', '其他'],
      success: () => wx.showToast({ title: '举报已提交，24 小时内处理', icon: 'none' })
    });
  }
});
