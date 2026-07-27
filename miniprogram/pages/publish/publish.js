const mock = require('../../utils/mock.js');

Page({
  data: {
    mode: 'offer',
    title: '',
    categories: mock.CATEGORIES,
    catIndex: 0,
    desc: '',
    price: '',
    budgetMin: '',
    budgetMax: '',
    deadline: '',
    agreed: false
  },

  onLoad(query) {
    const mode = query.mode || 'offer';
    this.setData({ mode });
    wx.setNavigationBarTitle({ title: mode === 'offer' ? '发布服务' : '发布需求' });
  },

  onInput(e) {
    this.setData({ [e.currentTarget.dataset.field]: e.detail.value });
  },

  onCat(e) {
    this.setData({ catIndex: e.detail.value });
  },

  toggleAgree() {
    this.setData({ agreed: !this.data.agreed });
  },

  submit() {
    if (!this.data.title) {
      return wx.showToast({ title: '请填写标题', icon: 'none' });
    }
    if (!this.data.agreed) {
      return wx.showToast({ title: '请先阅读并同意发布规范', icon: 'none' });
    }
    // 前端粗筛：真实环境这套规则必须同时放在后端，前端只是提前拦截
    const banned = ['代写', '代考', '代课', '代刷', '代签到', '包过', '答案', 'past exam', 'ghostwrit'];
    const text = (this.data.title + this.data.desc).toLowerCase();
    const hit = banned.find(w => text.indexOf(w.toLowerCase()) > -1);
    if (hit) {
      return wx.showModal({
        title: '内容不符合规范',
        content: '检测到敏感词「' + hit + '」。平台禁止代写代考、售卖答案等学术不端相关服务，也禁止转售受版权保护的课程材料。请修改后再提交。',
        showCancel: false
      });
    }
    wx.showModal({
      title: '已提交',
      content: '原型演示：真实环境会写入数据库并进入人工审核队列，审核通过后展示在信息流中。',
      showCancel: false,
      success: () => wx.navigateBack()
    });
  }
});
