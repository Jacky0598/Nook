App({
  globalData: {
    // 当前登录用户（原型阶段写死，真实环境走 wx.login + 后端换 openid）
    user: {
      id: 'u_001',
      nickname: 'Jacky',
      initial: 'J',
      avatar: '',
      school: 'Monash Malaysia',
      year: '大三',
      verifyLevel: 1,          // 0 未认证 / 1 学生认证 / 2 学霸认证 / 3 持牌认证
      campusEmail: 'jlii0598@student.monash.edu',
      earnings: 840
    },
    // 当前筛选的学校，影响全站信息流
    currentSchool: 'Monash Malaysia'
  },

  onLaunch() {
    // 真实环境：
    // wx.login({ success: res => { /* res.code 送后端换 openid + session */ } })
    console.log('[Campus] launched');
  },

  setSchool(school) {
    this.globalData.currentSchool = school;
  }
});
