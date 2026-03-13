// 根据 type 映射到对应的组件属性类型
// 由于 Arco Design Vue 没有直接导出组件 Props 类型，这里使用 Record<string, any> 作为基础

import { ExtractPropTypes, VNode } from 'vue'
import { searchFormProps } from './search-form'
import { searchFormFieldProps } from './search-form-field'

// 用户可以通过类型断言来获得更好的类型提示
export type ComponentPropsMap = {
  input: Record<string, any>
  'input-number': Record<string, any>
  'input-tag': Record<string, any>
  select: Record<string, any>
  date: Record<string, any>
  'date-range': Record<string, any>
  radio: Record<string, any>
  checkbox: Record<string, any>
  switch: Record<string, any>
  'tree-select': Record<string, any>
  custom: Record<string, any>
}

// 根据 SearchField['type'] 推断 mixProps 类型
export type mixProps<
  T extends SearchFormField['type'] = SearchFormField['type'],
> = T
export interface SearchFormField {
  /**
   * @description: 控件名称
   */
  name?: string
  /**
   * @description: 控件类型
   */
  type:
    | 'input'
    | 'input-number'
    | 'input-tag'
    | 'select'
    | 'date'
    | 'date-range'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'tree-select'
    | 'custom'
  /**
   * @description: 字段选项
   */
  options?: any[]
  /**
   * @description: 字段值
   */
  value?: any
  /**
   * @description: 占位符
   */
  placeholder?: string
  /**
   * @description: 标签
   */
  label?: string
  /**
   * @description: 标签插槽
   */
  labelSlot?: (
    label: SearchFormField['label'],
    props?: Record<string, any>,
  ) => VNode
  /**
   * @description: 字段属性
   */
  fieldProps?: Partial<ComponentPropsMap[SearchFormField['type']]>
  /**
   * @description: 控件插槽
   */
  defaultSlot?: (
    value: SearchFormField['value'],
    props?: Record<string, any>,
    emit?: any,
  ) => VNode
  /**
   * 是否做为simple模式的控件被传送
   */
  teleport?: boolean
  /**
   * 控件的labelCol
   */
  labelCol?: Record<string, any>
  /**
   * 控件的wrapperCol
   */
  wrapperCol?: Record<string, any>
  /**
   * @description: 值改变回调
   */
  onChange?: (value: SearchFormField['value']) => void
}
export type SearchFormFields = {
  [key in Exclude<SearchFormField['name'], undefined>]: SearchFormField
}

/**
 * @description defineEmits
 */
export type SearchFormEmits = {
  search: [value: { [key: string]: any }, formatValue: { [key: string]: any }]
  change: [value: any, vNode: VNode]
  reset: []
}

/**
 * @description defineEmits
 */
export type SearchFormFieldEmits = {
  'update:modelValue': [value: any]
  change: [value: any]
}
/**
 * @description SearchFormProps
 */
export type SearchFormProps = ExtractPropTypes<typeof searchFormProps>
/**
 * @description SearchFormFieldProps
 */
export type SearchFormFieldProps = ExtractPropTypes<typeof searchFormFieldProps>
