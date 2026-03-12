<script setup lang="ts">
import { SpImg } from '@shrimp-design-vue/components'
import { SpLayout } from '@shrimp-design-vue/components'
</script>

<template>
  <div style="width: 100%; height: 100%; padding: 16px; background-color: #f0f2f5">
    <sp-layout mode="HAB" :full-height="false">
      <template #header>123</template>
      <template #aside>woshiaside</template>
      <!-- <sp-img
      src="https://pss.bdstatic.com/static/superman/img/logo/logo_redBlue-0a7c20fcaa.png"
      alt="baidu"
      preview
      style="cursor: pointer"
    /> -->
    </sp-layout>
  </div>
</template>

<style scoped></style>
