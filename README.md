# 校园帮 · Campus Marketplace

面向在马来西亚中国留学生的学业与落地服务撮合平台。微信小程序原型 + 产品需求文档。

> 把散落在小红书、微信群、WhatsApp 群里的碎片化供需信息，变成可搜索、可比价、可信任的结构化服务。

---

## 在线预览

**https://resonant-elf-0d405f.netlify.app**

手机打开会自动全屏，体验接近真实小程序。三个值得点的地方：

- 「找服务」页开 **⚖️ 比价** —— 选 2-3 个服务并排对比价格、评分、资质
- 「发布」页标题里写「代写」 —— 看违禁词拦截
- 「我的」页切换买家 / 卖家 —— 同一账号双重身份

---

## 仓库结构

```
.
├── README.md                        本文件
├── PRD-马来西亚校园服务平台-v1.md      产品需求文档（定位/合规/排期/冷启动）
├── 预览-小程序原型.html               单文件 HTML 原型，双击即可打开
├── web-preview/
│   └── index.html                   同上，用于部署到 Netlify / GitHub Pages
└── miniprogram/                     微信小程序原生代码
    ├── README.md                    如何运行、如何接后端
    ├── app.js / app.json / app.wxss
    ├── utils/mock.js                全部假数据（接后端只改这个文件）
    └── pages/                       7 个页面
```

---

## 快速开始

**只想看效果** —— 双击 `预览-小程序原型.html`，或打开上面的在线预览链接。

**跑小程序代码** —— 用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)导入 `miniprogram/` 目录，AppID 选测试号或游客模式。详见 [`miniprogram/README.md`](miniprogram/README.md)。

---

## 当前范围

只实现了 PRD 里的 **P0 MVP**：课程辅导 + 选课咨询两个类目，加上双向发布、搜索比价、订单与评价的骨架。

**房产和留学两条业务线暂未开放** —— 涉及马来西亚 Act 242（房产中介须 BOVAEP 注册）等合规问题，详见 PRD 第 6 节。

---

## 三条红线

1. 不做代写、代考、代刷课、代签到 —— 学术不端，会直接毁掉平台在留学生圈的信誉
2. 不售卖学校讲义、slides、past papers —— 版权归学校
3. 房产撮合抽佣须持牌（BOVAEP REN/REA）—— 否则违反 Act 242

---

## 状态

原型阶段，尚未上线。下一步是拿这个原型做用户访谈，验证需求真实性后再投入后端开发。
