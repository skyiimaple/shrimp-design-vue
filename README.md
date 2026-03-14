# Shrimp Design Vue 🦐

<p align="center">
  <img src="./docs/src/public/image/logo-light.svg" width="120" alt="Shrimp Design Vue Logo">
</p>

<p align="center">
  基于 <b>Arco Design Vue</b> 二次开发的业务组件库，旨在提供更高效、更贴合业务场景的 Vue 3 组件。
</p>

<p align="center">
  <a href="https://skyiimaple.github.io/shrimp-design-vue/">📚 在线文档</a>
</p>

---

## ✨ 特性

- 🚀 **基于 Vue 3**: 利用组合式 API 提供更好的性能和开发体验。
- 🎨 **Arco Design 生态**: 深度集成 Arco Design Vue，保持视觉一致性。
- 📦 **业务组件封装**: 针对搜索表单、复杂布局、图片预览等高频场景提供开箱即用的组件。
- 📘 **TypeScript 支持**: 全量使用 TypeScript 编写，提供完善的类型推断。
- 🏗️ **Monorepo 架构**: 使用 pnpm workspace 管理，结构清晰，依赖隔离。

## 🛠️ 技术栈

- **框架**: [Vue 3](https://vuejs.org/)
- **基础组件库**: [Arco Design Vue](https://arco.design/vue/docs/start)
- **文档工具**: [VitePress](https://vitepress.dev/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **包管理**: [pnpm](https://pnpm.io/)

## 📂 项目结构

```text
shrimp-design-vue
├── docs                # 文档中心 (VitePress)
├── packages            # 核心包目录
│   ├── components      # 组件库源码
│   ├── hooks           # 通用组合式函数
│   ├── styles          # 组件样式文件
│   └── utils           # 工具函数集
└── play                # 组件演练场 (用于开发调试)
```

## 🚀 快速开始

### 1. 克隆项目并安装依赖

```bash
git clone https://github.com/skyiimaple/shrimp-design-vue.git
cd shrimp-design-vue
pnpm install
```

### 2. 本地开发调试

启动演练场（Playground），实时预览组件修改：

```bash
pnpm --filter play dev
```

### 3. 查看文档

启动 VitePress 文档服务：

```bash
pnpm --filter @shrimp-web/docs docs:dev
```

### 4. 构建文档

```bash
pnpm docs:build
```

## 📦 包管理指南

项目采用 pnpm monorepo 架构，常用操作如下：

- **全局安装依赖**: `pnpm add axios -w`
- **为特定包安装依赖**: `pnpm add lodash --filter @shrimp-design-vue/components`
- **安装 workspace 内部包**: `pnpm add "@shrimp-design-vue/styles@workspace:*" --filter @shrimp-design-vue/components`

## 📄 开源协议

[ISC](./LICENSE)
