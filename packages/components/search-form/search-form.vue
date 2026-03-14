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
            <component :is="vnode" v-model="value[vnode.props?.name]" />
          </a-col>
        </template>
        <!-- 在末尾增加重置和查询按钮 -->
        <a-col :span="fieldSpan" style="text-align: right">
          <a-form-item>
            <a-space align="end">
              <!-- <a-button @click="reset">重置</a-button> -->
              <a-button type="primary" @click="search">查询</a-button>
            </a-space>
          </a-form-item>
        </a-col>
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
  reactive,
  ref,
  useSlots,
  VNode,
  watch,
} from 'vue'
import { searchFormProps } from './search-form'
import { SearchFormEmits, SearchFormField } from './interface'
import SpSearchFormField from './search-form-field.vue'

const props = defineProps(searchFormProps)
const emits = defineEmits<SearchFormEmits>()

const slots = useSlots()
const fieldNodes = ref<VNode[]>([])

const renderFieldNodes = () => {
  if (slots.default) {
    slots.default().forEach((vnode: VNode) => {
      if ((vnode.type as any).name === 'SpSearchFormField') {
        if (vnode.props?.modelValue || vnode.props?.['modal-value']) {
          value[vnode.props?.name] =
            vnode.props.modelValue || vnode.props?.['modal-value']
        }
        fieldNodes.value.push(vnode)
      }
    })
  }
  const fields = props.fields
  if (fields) {
    Object.entries(fields).forEach(([key, field]) => {
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
      // 优先使用 field.name，如果没有则使用对象 key
      const fieldName = field.name || key
      if (field.value) {
        value[fieldName] = field.value
      }
      fieldNodes.value.push(
        h(
          SpSearchFormField,
          {
            name: fieldName,
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

const value = reactive(props.modelValue || {})
const reset = () => {
  emits('reset')
}
const search = () => {
  emits('search', value, value)
}
</script>

<style lang="scss" scoped></style>
