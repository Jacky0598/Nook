/**
 * 原型阶段的假数据。
 * 接后端时，把这里每个函数换成 wx.request 即可，页面代码不用改。
 */

const CATEGORIES = [
  { key: 'tutoring',  name: '课程辅导', icon: '📘', desc: '学长学姐带你过' },
  { key: 'advice',    name: '选课咨询', icon: '🧭', desc: '选课/转专业/GPA' },
  { key: 'guide',     name: '课程测评', icon: '📝', desc: '免费攻略避雷' },
  { key: 'rent',      name: '学生转租', icon: '🏠', desc: '同学间直租' },
  { key: 'study',     name: '留学咨询', icon: '✈️', desc: '申校/签证/落地' }
];

const LISTINGS = [
  {
    id: 'l_001',
    category: 'tutoring',
    title: 'ETC1000 商业统计 期末冲刺辅导',
    desc: '本人 ETC1000 期末 HD（89），带过 15 位同学，平均提分 2 个 grade。重点讲 hypothesis testing 和 regression 两块必考。只讲知识点和方法，不碰你的 assignment。',
    price: 80,
    unit: '每小时',
    courseCodes: ['ETC1000'],
    school: 'Monash Malaysia',
    seller: {
      id: 'u_101', name: 'Kevin', year: '大三', major: 'Bachelor of Business',
      rating: 4.9, reviewCount: 23, orderCount: 15,
      badges: [{ type: 'verify', text: '✅ 学生认证' }, { type: 'hd', text: '🎓 HD 认证' }]
    },
    tags: ['线上/线下均可', '当天可约', '可试听 15 分钟'],
    hot: true
  },
  {
    id: 'l_002',
    category: 'advice',
    title: '商科选课 1v1 · 帮你排完整学期',
    desc: 'Monash 商学院大四，做过两届迎新 mentor。帮你按毕业要求 + 难度 + 讲师风格排课，避开公认地狱课。附一份我整理的课程难度表。',
    price: 50,
    unit: '每次 · 30分钟',
    courseCodes: [],
    school: 'Monash Malaysia',
    seller: {
      id: 'u_102', name: 'Lisa', year: '大四', major: 'Bachelor of Business',
      rating: 5.0, reviewCount: 41, orderCount: 41,
      badges: [{ type: 'verify', text: '✅ 学生认证' }]
    },
    tags: ['选课季热门', '含课程难度表'],
    hot: true
  },
  {
    id: 'l_003',
    category: 'tutoring',
    title: 'FIT1045 Python 编程 入门到 Assignment 思路',
    desc: 'CS 大三，FIT1045 拿 HD。讲语法、讲算法思路、帮你 debug 并解释错在哪。不代写、不提供答案 —— 这是平台红线也是我的底线。',
    price: 65,
    unit: '每小时',
    courseCodes: ['FIT1045', 'FIT1008'],
    school: 'Monash Malaysia',
    seller: {
      id: 'u_103', name: 'Ryan', year: '大三', major: 'Computer Science',
      rating: 4.7, reviewCount: 56, orderCount: 38,
      badges: [{ type: 'verify', text: '✅ 学生认证' }, { type: 'hd', text: '🎓 HD 认证' }]
    },
    tags: ['接单最多', '支持录屏回放'],
    hot: true
  },
  {
    id: 'l_004',
    category: 'tutoring',
    title: 'ETC1000 统计 · 小班 3 人拼课',
    desc: '大四，做过两学期 TA。3 人成班，人均更便宜。每周固定时段，跟着 tutorial 进度走。',
    price: 120,
    unit: '每小时 · 3人班',
    courseCodes: ['ETC1000'],
    school: 'Monash Malaysia',
    seller: {
      id: 'u_104', name: 'Amy', year: '大四', major: 'Econometrics',
      rating: 5.0, reviewCount: 8, orderCount: 4,
      badges: [{ type: 'verify', text: '✅ 学生认证' }, { type: 'hd', text: '🎓 HD 认证' }]
    },
    tags: ['前 TA', '小班拼课'],
    hot: false
  },
  {
    id: 'l_005',
    category: 'rent',
    title: 'Sunway Geo 一房一厅 转租（本人自住转出）',
    desc: '我毕业回国，8 月起转租。步行到 Monash 约 8 分钟，家具家电全齐，押金可跟房东直接过户。仅限本人房间转租，非中介。',
    price: 1400,
    unit: '每月',
    courseCodes: [],
    school: 'Monash Malaysia',
    seller: {
      id: 'u_105', name: 'Coco', year: '大四', major: 'Bachelor of Design',
      rating: 4.8, reviewCount: 6, orderCount: 2,
      badges: [{ type: 'verify', text: '✅ 学生认证' }, { type: 'ghost', text: '🏠 个人转租' }]
    },
    tags: ['步行 8 分钟', '家具全齐', '8月起租'],
    hot: true
  },
  {
    id: 'l_006',
    category: 'study',
    title: 'Monash 硕士申请 · 材料梳理与 EMGS 流程答疑',
    desc: '持证留学顾问，专注马来西亚方向 5 年。帮你梳理材料清单、EMGS 提交流程和时间线。不承诺包录取包签证 —— 谁这么说你就该跑。',
    price: 500,
    unit: '每次 · 完整方案',
    courseCodes: [],
    school: '全马',
    seller: {
      id: 'u_106', name: '睿途留学 · 陈老师', year: '机构', major: '持证顾问',
      rating: 4.6, reviewCount: 112, orderCount: 90,
      badges: [{ type: 'license', text: '🏅 机构认证' }]
    },
    tags: ['机构入驻', '含 EMGS 时间线'],
    hot: false
  }
];

const REQUESTS = [
  {
    id: 'r_001',
    title: '求 FIT1045 Python 辅导，本周三前',
    desc: 'Week 6 的 loop 和 list comprehension 完全没听懂，想找人系统讲一遍，最好能带我做几道练习。',
    budgetMin: 100, budgetMax: 150,
    deadline: '本周三 18:00',
    location: 'Monash Sunway / 线上均可',
    school: 'Monash Malaysia',
    quoteCount: 3,
    buyer: { name: 'Wendy', year: '大一' },
    createdText: '2 小时前'
  },
  {
    id: 'r_002',
    title: '找人帮我看一下选课表，商科大二',
    desc: '下学期想修 4 门，不确定难度会不会太集中，想找学长学姐帮我看看排得合不合理。',
    budgetMin: 30, budgetMax: 60,
    deadline: '本周内',
    location: '线上',
    school: 'Monash Malaysia',
    quoteCount: 7,
    buyer: { name: 'Ken', year: '大二' },
    createdText: '5 小时前'
  },
  {
    id: 'r_003',
    title: '求 ETC1000 期末带练，预算好商量',
    desc: '期末周了有点慌，想找人带着刷 past tutorial 的题型（不是 past exam），一周 2 次。',
    budgetMin: 200, budgetMax: 400,
    deadline: '11 月中前',
    location: 'Monash 图书馆',
    school: 'Monash Malaysia',
    quoteCount: 1,
    buyer: { name: 'Sara', year: '大二' },
    createdText: '昨天'
  }
];

const CONVERSATIONS = [
  { id: 'c_001', name: 'Kevin', last: '好的，那我们周三下午 3 点图书馆 B 座见？', time: '10:24', unread: 2, badge: '🎓 HD 认证' },
  { id: 'c_002', name: 'Lisa',  last: '你的选课表我看过了，FIT1045 和 ETC1000 放同一学期压力会很大', time: '昨天', unread: 0, badge: '✅ 学生认证' },
  { id: 'c_003', name: 'Coco',  last: '房间照片我发你微信了，随时可以来看房', time: '昨天', unread: 0, badge: '🏠 个人转租' },
  { id: 'c_004', name: '系统通知', last: '你的「学霸认证」已通过审核，现在可以挂牌辅导服务了', time: '7月25日', unread: 1, badge: '' }
];

const REVIEWS = [
  { id: 'v1', name: 'Wendy', rating: 5, tags: ['讲得清楚', '有耐心'], content: '第一次找线上辅导，本来担心浪费钱。Kevin 直接从我错的那道题倒推，把 hypothesis testing 整个逻辑讲通了。期中从 P 提到 C。', date: '2026-06-12' },
  { id: 'v2', name: 'Ken', rating: 5, tags: ['准时', '性价比高'], content: '约了三次，每次都提前 5 分钟到。会先问我这周卡在哪，不是照着 slides 念。', date: '2026-05-28' },
  { id: 'v3', name: 'Sara', rating: 4, tags: ['专业'], content: '知识点讲得很好，就是有时候讲太快了，需要我主动喊停。整体还是推荐的。', date: '2026-05-14' }
];

const SCHOOLS = ['Monash Malaysia', 'Sunway University', "Taylor's University", 'Universiti Malaya', 'APU'];

// WXML 表达式不支持字符串下标和方法调用，头像首字母必须在 JS 里预先算好
LISTINGS.forEach(l => { l.seller.initial = l.seller.name.charAt(0); });
CONVERSATIONS.forEach(c => { c.initial = c.name === '系统通知' ? '🔔' : c.name.charAt(0); });
REVIEWS.forEach(r => {
  r.initial = r.name.charAt(0);
  r.starText = '⭐'.repeat(r.rating);
});

module.exports = {
  CATEGORIES,
  SCHOOLS,

  getHotListings() {
    return LISTINGS.filter(l => l.hot);
  },

  getListings(category, keyword, sortBy) {
    let list = LISTINGS.slice();
    if (category && category !== 'all') {
      list = list.filter(l => l.category === category);
    }
    if (keyword) {
      const k = keyword.toUpperCase();
      list = list.filter(l =>
        l.title.toUpperCase().indexOf(k) > -1 ||
        l.courseCodes.some(c => c.indexOf(k) > -1)
      );
    }
    if (sortBy === 'price') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'orders') list.sort((a, b) => b.seller.orderCount - a.seller.orderCount);
    else list.sort((a, b) => b.seller.rating - a.seller.rating);
    return list;
  },

  getListingById(id) {
    return LISTINGS.find(l => l.id === id);
  },

  getOpenRequests() {
    return REQUESTS;
  },

  getConversations() {
    return CONVERSATIONS;
  },

  getReviews() {
    return REVIEWS;
  }
};
