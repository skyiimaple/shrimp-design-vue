import { PropType } from 'vue'
import { SearchFormField } from './interface'

export const searchFormFieldProps = {
  /**
   * @description 表单数据
   */
  modelValue: Object as PropType<Record<string, any>>,
  /**
   * @description 表单名称
   */
  name: String as PropType<SearchFormField['name']>,
  /**
   * @description 表单类型
   */
  type: String as PropType<SearchFormField['type']>,
  /**
   * @description 表单选项
   */
  options: Array as PropType<SearchFormField['options']>,
  /**
   * @description 表单占位符
   */
  placeholder: String as PropType<SearchFormField['placeholder']>,
  /**
   * @description 表单标签
   */
  label: String as PropType<SearchFormField['label']>,
  /**
   * @description 表单标签插槽
   */
  labelSlot: Function as PropType<SearchFormField['labelSlot']>,
  teleport: Boolean as PropType<SearchFormField['teleport']>,
  /**
   * @description label 标签布局
   */
  labelCol: {
    type: Object as PropType<SearchFormField['labelCol']>,
    default: () => ({ span: 6 }),
  },
  /**
   * @description 控件布局
   */
  wrapperCol: {
    type: Object as PropType<SearchFormField['wrapperCol']>,
    default: () => ({ span: 18 }),
  },
  fieldProps: Object as PropType<SearchFormField['fieldProps']>,
} as const
