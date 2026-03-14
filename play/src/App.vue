<script setup lang="ts">
import { SpLayout, SpSearchGroup, SpSearchFormField } from '@shrimp-design-vue/components'
import type { SearchFormFields } from '@shrimp-design-vue/components/search-form/interface'

// fields 配置
const fieldsConfig: SearchFormFields = {
  status: {
    type: 'select',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: '1' },
      { label: '禁用', value: '0' },
    ],
  },
  date: {
    type: 'date',
    label: '日期',
    placeholder: '请选择日期',
  },
}
</script>

<template>
  <div style="width: 100%; height: 100%; padding: 16px; background-color: #f0f2f5">
    <sp-layout mode="HAB" :full-height="false">
      <template #header>
        <h2 style="margin: 0; padding: 16px">组件测试</h2>
      </template>
      <template #aside> </template>
      <main style="padding: 24px">
        <!-- 方式一：使用插槽 -->
        <div style="margin-bottom: 32px; background: white; padding: 24px; border-radius: 8px">
          <h3 style="margin-top: 0">方式一：使用插槽渲染</h3>
          <sp-search-group :fields="fieldsConfig">
            <sp-search-form-field
              type="input"
              label="用户名"
              placeholder="请输入用户名"
              name="username"
            />
            <sp-search-form-field
              type="input-number"
              label="年龄"
              placeholder="请输入年龄"
              name="age"
            />
            <sp-search-form-field type="input" label="邮箱" placeholder="请输入邮箱" name="email" />
            <sp-search-form-field type="custom" label="自定义" placeholder="请输入" name="tags">
              <template #default="{ value, props, emits }">
                <a-input-tag :value="value" v-bind="props" @change="emits('change', $event)" />
              </template>
            </sp-search-form-field>
          </sp-search-group>
        </div>
      </main>
    </sp-layout>
  </div>
</template>
