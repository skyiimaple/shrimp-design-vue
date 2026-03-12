<!--
    * @Author: suzifeng
    * @Date: 2026-03-12
    * @Description: layout组件
-->
<template>
  <div
    class="sp-layout-container"
    :class="{
      [`mode-${mode.toLocaleLowerCase()}`]: true,
      'full-height': fullHeight,
    }"
  >
    <header v-if="mode.includes('H')" class="sp-layout-header">
      <slot name="header" />
    </header>
    <!-- <div class="sp-layout-content"> -->
    <div
      v-if="mode.includes('A')"
      class="sp-layout-aside"
      :class="{ border: asideBorder, collapsed }"
      :style="{ width: collapsed ? 0 : asideWidth }"
    >
      <div class="sp-layout-aside_wrapper">
        <div class="sp-layout-aside_wrapper_content">
          <slot name="aside" />
        </div>
        <div
          v-if="isCanCollapse"
          class="sp-layout-aside_wrapper_collapse"
          :title="(collapsed ? '展开' : '收起') + '侧边栏'"
          @click="handleCollapse"
        >
          <RightOutlined v-if="collapsed" />
          <LeftOutlined v-else />
        </div>
      </div>
    </div>
    <main class="sp-layout-main">
      <slot v-bind="props"></slot>
    </main>
    <!-- </div> -->
    <footer v-if="mode.includes('F')" class="sp-layout-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { layoutProps } from './layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'
const props = defineProps(layoutProps)

const collapsed = defineModel<boolean>('collapsed', {
  default: false,
})
const asideWidth = computed(() => {
  if (typeof props.asideWidth === 'number') {
    return props.asideWidth + 'px'
  } else {
    return props.asideWidth
  }
})
const handleCollapse = () => {
  collapsed.value = !collapsed.value
}
</script>

<style lang="scss" scoped>
@import '@shrimp-design-vue/styles/components/layout.scss';
</style>
