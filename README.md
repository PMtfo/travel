# 一路向秋｜云南—西安旅行手账

一个移动端优先、可公开分享的纯前端旅行站点。包含 2026 年 9 月 24 日至 10 月 7 日的逐日行程、城市移动路线、可操作待办和 PNG 长图导出。

## 功能

- 14 天完整行程与已确认 / 计划 / 待确认状态
- 响应式 SVG 城市路线图和卡片式日期时间线
- Todo 勾选、全部 / 未完成 / 已完成筛选、重置
- Todo 状态使用 `localStorage` 保存在当前浏览器
- 一键将主要行程区域保存为 PNG 长图
- 所有插图和主视觉均为站点本地资源，无第三方图片跨域依赖
- 公开版本不含旅客姓名、订单截图或其他身份信息

## 本地运行

要求 Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run dev
```

开发服务器默认显示在终端输出的本地地址。

## 检查与构建

```bash
npm run check
npm run build
npm run preview
```

构建产物位于 `dist/`。`vite.config.ts` 使用相对资源路径，可直接部署到支持静态文件的公开托管平台；站点本身没有登录或访问限制。

## PNG 导出说明

点击首页的“保存为 PNG 长图”。导出内容包含路线、每日行程和当前 Todo 完成状态，不包含操作按钮。推荐使用最新版 Chrome、Edge 或 Safari。

站点只使用本地图片与内联 SVG，避免常见的跨域资源污染 Canvas 问题。移动端会根据页面高度自动控制导出像素比，降低超长画布失败风险。

## 内容维护

- 每日行程：`src/data/trip.ts`
- 待办初始值：`src/data/todos.ts`
- 主题颜色：`src/styles/base.css` 的 `:root`
- Hero 主视觉：`public/travel-hero.png`

## 公开部署

站点通过 GitHub Pages 的公开工作流部署，访问地址：

<https://pmtfo.github.io/autumn-travel-journal-2026/>

仓库为公开仓库，运行时不需要登录或后端服务。Todo 勾选只保存在访问者自己的浏览器，不会上传；公开页面仍会展示本手账中的日期、城市、交通与住宿安排。
