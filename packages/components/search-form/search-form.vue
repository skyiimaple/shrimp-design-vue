<!--
    * @Author: suzifeng
    * @Date: 2026-03-13
    * @Description: search-form组件
-->
<template>
  <div class="sp-search-form">
    <a-form>
      <!-- 统一渲染处理后的字段列表 -->
      <a-row :gutter="16">
        <template v-for="(vnode, index) in fieldNodes" :key="Symbol(index)">
          <a-col :span="fieldSpan">
            <component :is="vnode" />
          </a-col>
        </template>
      </a-row>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  useSlots,
  VNode,
  watch,
} from 'vue'
import { searchFormProps } from './search-form'
import { SearchFormEmits, SearchFormField } from './interface'
import SpSearchFormField from './search-form-field.vue'

const props = defineProps(searchFormProps)
const emit = defineEmits<SearchFormEmits>()

const slots = useSlots()
const fieldNodes = ref<VNode[]>([])

const renderFieldNodes = () => {
  console.log('🚀slots:', slots)
  console.log('🚀props:', props)
  if (slots.default) {
    slots.default().forEach((vnode: VNode) => {
      console.log('🚀vnode:', vnode)
      fieldNodes.value.push(vnode)
    })
  }
  if (props.fields) {
    Object.values(props.fields).forEach((field: SearchFormField) => {
      // 设置插槽
      const defaultSlot = field.defaultSlot
        ? {
            default: (slotProps: any) => {
              return field.defaultSlot!(
                slotProps.value,
                slotProps.emits,
                slotProps.props,
              )
            },
          }
        : {}
      const labelSlot = field.labelSlot
        ? {
            label: (slotProps: any) => {
              return field.labelSlot!(slotProps.label, slotProps.props)
            },
          }
        : {}
      fieldNodes.value.push(
        h(
          SpSearchFormField,
          {
            name: field.name,
            ...field,
          },
          {
            ...defaultSlot,
            ...labelSlot,
          },
        ),
      )
    })
  }
}

const fieldSpan = ref<number>(6)
// 窗口大小改变
const resizeHandler = () => {
  let currentMedia: 'xs' | 'sm' | 'md' | 'xl'
  if (window.innerWidth < props.screenMediaMap.xs) {
    currentMedia = 'xs'
  } else if (
    window.innerWidth >= props.screenMediaMap.xs &&
    window.innerWidth < props.screenMediaMap.sm
  ) {
    currentMedia = 'sm'
  } else if (
    window.innerWidth >= props.screenMediaMap.sm &&
    window.innerWidth < props.screenMediaMap.xl
  ) {
    currentMedia = 'md'
  } else {
    currentMedia = 'xl'
  }
  fieldSpan.value = props.fieldSpanMap[currentMedia]
}
// fieldSpanMap/screenMediaMap 变化响应
watch([() => props.fieldSpanMap, () => props.screenMediaMap], () => {
  resizeHandler()
})
onMounted(() => {
  renderFieldNodes()
  window.addEventListener('resize', resizeHandler)
  resizeHandler()
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<style lang="scss" scoped></style>
