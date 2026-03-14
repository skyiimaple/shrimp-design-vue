---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Shrimp Design Vue'
  text: '基于 Arco Design Vue 二次开发的业务组件库'
  tagline: 旨在提供更加高效、易用的业务开发组件
  image:
    src: /image/note.svg
    width: 600
    height: 600
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/getting-started
    - theme: alt
      text: 组件预览
      link: /components/search-form

features:
  - icon: 🔍
    title: Search Form 搜索表单
    details: 高度集成的搜索表单，支持配置化渲染和自定义插槽，内置常用的输入框、下拉框等多种控件。
    link: /components/search-form
  - icon: 🖼️
    title: Image 图片预览
    details: 基于 viewerjs 的图片预览组件，支持单图预览、列表预览，内置图片加载错误处理。
    link: /components/img
  - icon: 🏗️
    title: Layout 页面布局
    details: 灵活多变的页面布局组件，支持多种常见的管理后台布局模式（HB, HAB, AB 等），支持侧边栏折叠。
    link: /components/layout
  - icon: ⚡
    title: 开发效率
    details: 基于 Arco Design Vue 的强大能力，针对业务场景深度优化，减少重复代码，提升开发速度。
  - icon: 📦
    title: 按需引入
    details: 支持 ES 模块化导出，配合插件可实现组件及样式的按需加载。
  - icon: 📘
    title: 类型友好
    details: 全量 TypeScript 编写，提供完善的类型定义和智能提示，让开发更安心。
---
