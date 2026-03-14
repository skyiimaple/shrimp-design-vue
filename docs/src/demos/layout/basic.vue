<template>
  <div
    style="
      height: 400px;
      border: 1px solid #eee;
      border-radius: 8px;
      overflow: hidden;
      padding: 16px;
      background-color: #f0f2f5;
    "
  >
    <sp-layout mode="HAB" v-model:collapsed="collapsed">
      <template #header>
        <div
          style="
            height: 60px;
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
          "
        >
          <h3 style="margin: 0">Shrimp Design Vue</h3>
        </div>
      </template>

      <template #aside>
        <div
          style="
            width: 100%;
            height: 100%;
            background: skyblue;
            color: white;
            padding: 20px;
          "
        >
          侧边栏
        </div>
      </template>

      <main style="padding: 24px; height: 100%">
        <div
          style="
            background: #fff;
            padding: 20px;
            border-radius: 4px;
            height: 100%;
          "
        >
          页面主体内容
          <div style="margin-top: 20px">
            <a-button @click="collapsed = !collapsed">切换折叠</a-button>
          </div>
        </div>
      </main>
    </sp-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SpLayout } from '@shrimp-design-vue/components'

const collapsed = ref(false)
</script>
