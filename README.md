# 英钠新能源 官网 Demo

钠离子电池聚阴离子正极材料企业官网原型，基于 Vite + React + TypeScript + Tailwind CSS 构建。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发预览（默认 http://localhost:5173）
npm run dev

# 生产构建（输出至 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

## 目录结构

```
src/
├── components/       # 页面各模块组件
│   ├── Navbar.tsx    # 顶部导航（含移动端折叠菜单）
│   ├── Hero.tsx      # 首屏 Hero + 数据卡片
│   ├── About.tsx     # 关于英钠
│   ├── Products.tsx  # 技术与产品
│   ├── RD.tsx        # 研发实力
│   ├── Production.tsx# 产业化能力
│   ├── Applications.tsx # 应用场景
│   ├── News.tsx      # 新闻动态
│   ├── Careers.tsx   # 加入我们
│   ├── Contact.tsx   # 联系我们（含演示表单）
│   └── Footer.tsx    # 页脚
└── data/
    └── content.ts    # 所有文案与数据（统一管理，方便替换）
```

## 网站模块

| 模块 | 说明 |
|------|------|
| 首屏 | 大标题、副标题、CTA 按钮、数据卡片、科技感插图 |
| 关于英钠 | 公司定位、四大核心支柱 |
| 技术与产品 | 三类产品卡片 + 技术亮点列表 |
| 研发实力 | 材料结构设计、工艺开发、测试评价、产业转化 |
| 产业化能力 | 六步产业化流程图 + 能力卡片 |
| 应用场景 | 储能、两轮车、低速动力、工商业储能 |
| 新闻动态 | 4 条占位新闻卡片 |
| 加入我们 | 6 个招聘方向展示 |
| 联系我们 | 公司信息 + 演示联系表单 |

## 后续修改指引

### 替换文案与数据
所有文案统一在 `src/data/content.ts` 中管理，包括：
- 公司名称、地址、电话、邮箱
- 统计数据卡片
- 产品、技术亮点、研发能力描述
- 新闻内容
- 招聘岗位

### 需由公司确认替换的内容
- `COMPANY.address` / `COMPANY.email` / `COMPANY.phone` — 真实联系方式
- `STATS` 中的"万吨级"产能数据、核心团队研发年限
- `NEWS` 中所有新闻日期、内容
- `JOBS` 中的具体岗位 JD 链接
- 版权主体（当前为占位）

### 接入后端
联系表单位于 `src/components/Contact.tsx`，当前为纯前端演示。
正式上线时替换 `handleSubmit` 中的逻辑，接入后端 API 或邮件服务即可。

### 添加真实图片
将图片放入 `public/` 目录，通过绝对路径引用（如 `/images/hero.webp`），
或放入 `src/assets/` 通过 import 引入。

## 注意事项

- 所有无法确认的数据均已标注"待公司确认"或"占位文案"
- 未使用任何第三方侵权图片，插图全部为 SVG/CSS 自制
- 不含"第一""唯一""绝对领先"等广告法风险词
