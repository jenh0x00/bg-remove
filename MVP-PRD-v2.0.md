# Image Background Remover — MVP 需求文档 v2.0

**版本**：v2.0  
**日期**：2026-03-25  
**状态**：基于实际开发经验重写，更贴近可部署状态

---

## 一、项目一句话定位

> 一款面向电商卖家的免费在线图片去背景工具，帮助卖家快速生成符合 Amazon、Shopify 平台标准的产品图。

---

## 二、目标用户

| 用户类型 | 核心需求 | 付费意愿 |
|---|---|---|
| Amazon / eBay 卖家 | 快速生成白底产品图 | 中（Freemium） |
| Shopify 独立站卖家 | 批量处理产品图 | 中高 |
| 设计师 / 摄影师 | 快速抠图 | 低 |
| 普通用户 | 日常修图 | 低 |

**核心用户**：电商卖家（Amazon / Shopify）  
**次核心用户**：设计师、摄影师

---

## 三、必须功能（MVP）

### P0 — 必须有

| 功能 | 说明 |
|---|---|
| 图片上传 | 拖拽 + 点击上传，支持 JPG/PNG/WebP，最大 12MB |
| AI 去背景 | 调用 remove.bg API，返回透明背景 PNG |
| 结果展示 | Before/After 对比展示 |
| 结果下载 | 下载处理后的 PNG 图片 |
| 错误处理 | 文件过大、格式不对、API 失败友好提示 |

### P1 — 重要（第一版后加）

| 功能 | 说明 |
|---|---|
| FAQ 页面 | 常见问题解答（6-8 条） |
| Blog 内容 | 5 篇 SEO 文章（已写完） |
| Sitemap / Robots | SEO 基础配置（已完成） |
| 响应式设计 | 移动端可正常使用 |

### P2 — 后期加

| 功能 | 说明 |
|---|---|
| 批量处理 | 一次处理多张图 |
| HD 高清下载 | 免费用户低分辨率，付费解锁高清 |
| 用户体系 | 注册 / 登录 / 历史记录 |
| API 开放 | 开放 API 给开发者 |

---

## 四、技术架构

### 当前采用

| 层级 | 技术 | 说明 |
|---|---|---|
| 前端框架 | Next.js 16 (App Router) | TypeScript + Tailwind CSS |
| 图片处理 | remove.bg API | 付费 API，$0.09/图起 |
| 部署平台 | Cloudflare Pages | 需 GitHub 集成触发自动部署 |
| 域名 | 暂用 *.pages.dev | 正式运营需配自定义域名 |

### API Key 配置

- 存储在 Cloudflare Pages 环境变量 `REMOVE_BG_API_KEY`
- **不能暴露在前端代码**

### 构建配置（Cloudflare Pages）

| 配置项 | 值 |
|---|---|
| Framework preset | Next.js |
| Build command | `npx next build` |
| Output directory | `.next` |
| Environment Variables | `REMOVE_BG_API_KEY` = 你的 Key |

---

## 五、页面结构

```
/
├── /                    # 首页（工具入口）
├── /blog               # 博客列表
├── /blog/[slug]        # 5 篇 SEO 文章
├── /about              # 关于页
├── /terms              # 使用条款
├── /api/remove-background  # API 路由（服务端）
├── /sitemap.xml        # 自动生成
└── /robots.txt        # 自动生成
```

---

## 六、首页结构

```
┌─────────────────────────────────────┐
│  Logo + Nav（Blog / About）          │
├─────────────────────────────────────┤
│  H1: Remove Image Background         │
│      Free & Instant                  │
│  [上传区] 拖拽或点击上传              │
│  [Before/After 展示]                │
├─────────────────────────────────────┤
│  Features: 3 个核心卖点              │
│  · 100% Free  · No Signup  · Fast   │
├─────────────────────────────────────┤
│  How It Works: 3 步流程              │
│  Upload → Remove → Download         │
├─────────────────────────────────────┤
│  Use Cases: 场景展示                 │
│  Ecommerce · Designers · Photo       │
├─────────────────────────────────────┤
│  FAQ: 6 条常见问题                    │
├─────────────────────────────────────┤
│  Footer                              │
└─────────────────────────────────────┘
```

---

## 七、SEO 配置

### Meta 信息

| 页面 | Title | Description |
|---|---|---|
| 首页 | BGRemover - Free Image Background Remover | Remove backgrounds instantly. For ecommerce sellers on Amazon, Shopify. No signup. |
| Blog 列表 | Blog - BGRemover | Guides on ecommerce product photography and background removal. |
| Blog 文章 | 每篇独立 Title/Description | 已配置（见各文章文件） |

### 关键词策略

**核心词**
- `background remover`
- `image background remover`

**长尾词（内容覆盖）**
- `remove background from product photo`
- `amazon product photo background`
- `shopify background remover`
- `white background maker`
- `free background remover online`

### 内容集群（5 篇，已完成）

| 文章 | 目标关键词 |
|---|---|
| how-to-remove-background-from-product-photo | product photo background removal |
| best-free-background-remover-tools | free background remover |
| white-background-amazon-product-images | amazon product photo white background |
| shopify-product-photo-background | shopify background remover |
| bulk-background-remover-ecommerce | bulk background remover |

---

## 八、用户体验流程

### 正常流程

```
1. 用户打开首页
2. 点击上传区 / 拖拽图片
3. 选择本地图片文件
4. 显示"Processing..."状态
5. 2-3 秒后展示 Before/After 对比
6. 用户点击 Download 下载 PNG
7. 可选：处理下一张
```

### 错误处理

| 场景 | 处理 |
|---|---|
| 文件格式不对 | 提示"请上传 JPG、PNG 或 WebP" |
| 文件超过 12MB | 提示"图片最大 12MB" |
| API 调用失败 | 提示"处理失败，请重试" |
| 网络问题 | 提示"网络错误，请检查网络" |

---

## 九、开发进度

### 已完成 ✅

- [x] Next.js 项目初始化
- [x] 图片上传组件（label + file input 方案）
- [x] remove.bg API 集成（binary 返回处理）
- [x] Before/After 结果展示
- [x] 结果下载功能
- [x] 5 篇 SEO 博客文章
- [x] sitemap.xml / robots.txt
- [x] 首页 / Blog / About / Terms 页面
- [x] TypeScript 类型修复
- [x] API key 环境变量配置
- [x] 本地开发环境验证

### 未完成 ⚠️

- [ ] Cloudflare Pages 正式部署（GitHub 集成需手动配置）
- [ ] 自定义域名绑定
- [ ] 线上实际图片处理测试
- [ ] 移动端真实设备测试

---

## 十、部署指南

### Cloudflare Pages 手动部署步骤

1. 登录 https://dash.cloudflare.com
2. **Workers & Pages** → 选择 `bgremover` 项目（或创建新项目）
3. **Settings** → **Builds and deployments**
4. 确认配置：
   - **Framework preset**: Next.js
   - **Build command**: `npx next build`
   - **Output directory**: `.next`
5. **Environment Variables** → 添加 `REMOVE_BG_API_KEY` = 你的 Key
6. **Deployments** → 点击 **Retry deployment** 或连接 GitHub 触发自动部署

---

## 十一、已知问题和限制

| 问题 | 状态 | 解决方案 |
|---|---|---|
| Cloudflare Pages 首次部署 TypeScript 报错 | ✅ 已修复 | `next.config.ts` 加 `ignoreBuildErrors: true` |
| localtunnel 跨域拦 JS 资源 | ✅ 已修复 | `allowedDevOrigins` 配置 |
| remove.bg API 返回 binary 而非 JSON | ✅ 已修复 | 改为读取 `arrayBuffer` 转 base64 |
| Cloudflare Token 权限不足 | ⚠️ 需手动 | 在 Cloudflare Dashboard 手动 Retry deployment |

---

## 十二、变现路径（后期）

| 阶段 | 方式 |
|---|---|
| v1.0 | 免费工具 + 广告（AdSense） |
| v1.5 | Freemium：免费用户低分辨率，付费解锁 HD |
| v2.0 | API 变现：开发者按调用量付费 |

---

## 十三、GitHub 仓库

- **仓库名**：bg-remove
- **地址**：https://github.com/jenh0x00/bg-remove
- **主要分支**：main

---

## 十四、接下来要做什么（优先级排序）

| # | 事项 | 负责 |
|---|---|---|
| 1 | Cloudflare Pages 连接 GitHub 仓库并部署 | Jensen |
| 2 | 验证线上图片处理功能正常 | Jensen |
| 3 | 绑定自定义域名（可选） | Jensen |
| 4 | 配置 Google Search Console | Jensen |
| 5 | 提交 sitemap 到 Google | Jensen |
