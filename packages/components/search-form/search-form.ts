import { PropType } from 'vue'
import { SearchFormFields } from './interface'

export const searchFormProps = {
  modelValue: Object as PropType<Record<string, any>>,
  fields: Object as PropType<SearchFormFields>,
  /**
   * @description 栅格化列设置
   */
  fieldSpanMap: {
    type: Object as PropType<{
      xs: number
      sm: number
      md: number
      xl: number
    }>,
    default: () => ({ xs: 12, sm: 12, md: 8, xl: 6 }),
  },
  /**
   * @description 屏幕响应阈值
   */
  screenMediaMap: {
    type: Object as PropType<{
      xs: number
      sm: number
      md: number
      xl: number
    }>,
    default: () => ({ xs: 980, sm: 1180, md: 1380, xl: 1580 }),
  },
  /**
   * @description 传给a-form的props
   */
  formProps: Object as PropType<Record<string, any>>,
} as const
