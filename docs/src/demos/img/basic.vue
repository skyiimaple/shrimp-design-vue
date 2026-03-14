<template>
  <div
    style="
      display: flex;
      gap: 20px;
      align-items: flex-start;
      padding: 20px;
      background: white;
      border-radius: 8px;
    "
  >
    <div>
      <p style="margin-bottom: 8px; color: #666">基础展示</p>
      <sp-img :src="src" :preview="true" style="width: 150px; height: 150px" />
    </div>

    <div>
      <p style="margin-bottom: 8px; color: #666">加载错误示例</p>
      <sp-img
        src="invalid-path"
        :preview="true"
        style="width: 150px; height: 150px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpImg } from '@shrimp-design-vue/components'

const src =
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a823095b8ca24fddad4af022a371da9e.png~tplv-uwbnlip3yd-webp.webp'
</script>
