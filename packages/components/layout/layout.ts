import type { ExtractPropTypes, PropType } from 'vue'

export const layoutProps = {
  /**
   * @description: 布局类型
   */
  mode: {
    type: String as PropType<'B' | 'HB' | 'HAB' | 'HBF' | 'AB' | 'BF'>,
    default: 'HB',
  },

  /**
   * @description: 是否折叠
   */
  isCollapse: {
    type: Boolean,
    default: false,
  },

  /**
   * @description: 是否可以折叠
   */
  isCanCollapse: {
    type: Boolean,
    default: true,
  },
  /**
   * @description: 是否全高
   */
  fullHeight: {
    type: Boolean,
    default: true,
  },
  /**
   * @description: 是否显示边框
   */
  asideBorder: {
    type: Boolean,
    default: true,
  },
  /**
   * @description: 侧边栏宽度
   */
  asideWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 300,
  },
}

export type LayoutProps = ExtractPropTypes<typeof layoutProps>
