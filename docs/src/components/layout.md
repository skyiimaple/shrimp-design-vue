# Layout 页面布局

`Layout` 提供了常见的后台管理系统页面布局，支持多种组合模式，集成了侧边栏折叠和全高设置等功能。

## 基本用法

<preview path="../demos/layout/basic.vue"></preview>

## Props

| 参数            | 说明               | 类型               | 默认值  |
| --------------- | ------------------ | ------------------ | ------- |
| `mode`          | 布局模式           | `string`           | `'HB'`  |
| `isCollapse`    | 初始折叠状态       | `boolean`          | `false` |
| `isCanCollapse` | 是否支持侧边栏折叠 | `boolean`          | `true`  |
| `fullHeight`    | 是否开启全高模式   | `boolean`          | `true`  |
| `asideBorder`   | 侧边栏是否显示边框 | `boolean`          | `true`  |
| `asideWidth`    | 侧边栏宽度         | `string \| number` | `300`   |

### `mode` 详解

- `B`: 只有主体内容 (Body)
- `HB`: 头部 + 主体内容 (Header + Body)
- `HAB`: 头部 + 侧边栏 + 主体内容 (Header + Aside + Body)
- `HBF`: 头部 + 主体内容 + 底部 (Header + Body + Footer)
- `AB`: 侧边栏 + 主体内容 (Aside + Body)
- `BF`: 主体内容 + 底部 (Body + Footer)

## Slots

| 插槽名    | 说明             |
| --------- | ---------------- |
| `header`  | 页面头部区域内容 |
| `aside`   | 侧边栏区域内容   |
| `default` | 主体内容区域内容 |
| `footer`  | 页面底部区域内容 |

## Events

| 事件名             | 说明               | 参数               |
| ------------------ | ------------------ | ------------------ |
| `update:collapsed` | 折叠状态变化时触发 | `(value: boolean)` |
