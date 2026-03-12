<!--
    * @Author: suzifeng
    * @Date: 2026-03-10
    * @Description: img组件
-->
<template>
  <div ref="imgWrapper" class="sp-img" :class="{ preview }">
    <slot :show="show" :viewer="viewer" :error="error">
      <img v-bind="imgProps" :src="src" :alt="alt" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, useSlots, useTemplateRef } from 'vue'
import { imgProps } from './img'
import Viewer from 'viewerjs'
// viewerjs
import 'viewerjs/dist/viewer.css'

defineOptions({
  name: 'PImg',
})

const props = defineProps(imgProps)
const emits = defineEmits(['error'])

const slots = useSlots()

const imgWrapper = useTemplateRef<HTMLDivElement>('imgWrapper')
const viewer = ref<Viewer | null>(null)
const error = (playload: Event) => {
  const img = playload.target as HTMLImageElement
  if (img) {
    img.src = props.errorSrc
    emits('error', playload)
  }
}

const show = () => {
  console.log(imgWrapper.value)
  if (viewer.value) {
    viewer.value.show()
  }
}

onMounted(() => {
  if (imgWrapper.value && props.preview) {
    viewer.value = new Viewer(imgWrapper.value)
  }
})

onUnmounted(() => {
  if (viewer.value) {
    viewer.value.destroy()
  }
})
</script>

<style lang="scss" scoped>
@use '@shrimp-design-vue/styles/components/img.scss';
</style>
