# 开始使用

`Shrimp Design Vue` 是基于 `Arco Design Vue` 的二次开发组件库，旨在为业务开发提供更加高效、易用的组件。

## 安装

你可以通过 `npm`、`yarn` 或 `pnpm` 来安装：

```bash
# 使用 npm
npm install @shrimp-design-vue/components

# 使用 pnpm
pnpm add @shrimp-design-vue/components
```

## 依赖说明

由于 `Shrimp Design Vue` 是基于 `Arco Design Vue` 开发的，因此你的项目中需要安装 `@arco-design/web-vue`。

```bash
# 安装 Arco Design Vue
npm install @arco-design/web-vue
```

## 引入组件

在你的 Vue 组件中直接引入即可使用：

```vue
<script setup lang="ts">
import { SpSearchForm } from '@shrimp-design-vue/components'
import '@shrimp-design-vue/styles/index.css' // 引入样式
</script>

<template>
  <sp-search-group />
</template>
```

## 样式引入

如果你需要全局引入样式，可以在项目的入口文件（如 `main.ts`）中加入：

```typescript
import '@shrimp-design-vue/styles/index.css'
```
