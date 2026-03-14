# Search Form 搜索表单

`SearchForm` 是一个高度集成的搜索表单组件，支持通过配置文件（`fields`）直接渲染出整套搜索界面，也支持通过插槽自定义特定字段。

## 基本用法

<preview path="../demos/search-form/basic.vue"></preview>

## SearchForm Props

| 参数             | 说明                     | 类型                  | 默认值                                      |
| ---------------- | ------------------------ | --------------------- | ------------------------------------------- |
| `modelValue`     | 表单绑定的数据对象       | `Record<string, any>` | `{}`                                        |
| `fields`         | 表单字段配置             | `SearchFormFields`    | -                                           |
| `fieldSpanMap`   | 不同屏幕尺寸下的栅格布局 | `object`              | `{ xs: 12, sm: 12, md: 8, xl: 6 }`          |
| `screenMediaMap` | 屏幕响应断点设置         | `object`              | `{ xs: 980, sm: 1180, md: 1380, xl: 1580 }` |
| `formProps`      | 透传给 `a-form` 的属性   | `Record<string, any>` | -                                           |

## SearchFormField Props

| 参数          | 说明                                 | 类型     | 默认值         |
| ------------- | ------------------------------------ | -------- | -------------- |
| `name`        | 字段名称，对应 `modelValue` 中的 key | `string` | -              |
| `type`        | 控件类型（input, select, date 等）   | `string` | -              |
| `label`       | 标签名称                             | `string` | -              |
| `placeholder` | 占位符                               | `string` | -              |
| `options`     | 选项数据（select, radio 等）         | `array`  | -              |
| `fieldProps`  | 透传给底层 Arco 组件的属性           | `object` | -              |
| `labelCol`    | 标签布局                             | `object` | `{ span: 6 }`  |
| `wrapperCol`  | 控件布局                             | `object` | `{ span: 18 }` |

## Events

| 事件名   | 说明               | 参数                         |
| -------- | ------------------ | ---------------------------- |
| `search` | 点击查询按钮时触发 | `(formValue, originalValue)` |
| `reset`  | 点击重置按钮时触发 | -                            |
| `change` | 字段值变化时触发   | `(value, vNode)`             |
