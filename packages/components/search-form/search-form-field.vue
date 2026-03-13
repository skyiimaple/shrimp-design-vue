<!--
    * @Author: suzifeng
    * @Date: 2026-03-13
    * @Description: search-field组件
-->
<template>
  <a-form-item
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    v-bind="fieldProps"
  >
    <template #label>
      <slot name="label">{{ label }}</slot>
    </template>
    <!-- 自定义插槽 -->
    <template v-if="type === 'custom'">
      <slot :value="modelValue" :emits="emits" :props="props"></slot>
    </template>

    <!-- 输入框 -->
    <a-input
      v-else-if="type === 'input'"
      v-model:value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 数字输入框 -->
    <a-input-number
      v-else-if="type === 'input-number'"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 标签输入框 -->
    <a-input-tag
      v-else-if="type === 'input-tag'"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 选择器 -->
    <a-select
      v-else-if="type === 'select'"
      :value="modelValue"
      :placeholder="placeholder"
      :options="options"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 日期选择器 -->
    <a-date-picker
      v-else-if="type === 'date'"
      :value="modelValue"
      :placeholder="placeholder"
      style="width: 100%"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 日期范围选择器 -->
    <a-range-picker
      v-else-if="type === 'date-range'"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 单选框组 -->
    <a-radio-group
      v-else-if="type === 'radio'"
      :value="modelValue"
      v-bind="fieldProps"
      @update:value="handleChange"
    >
      <a-radio
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
      >
        {{ option.label }}
      </a-radio>
    </a-radio-group>

    <!-- 复选框组 -->
    <a-checkbox-group
      v-else-if="type === 'checkbox'"
      :value="modelValue"
      v-bind="fieldProps"
      @update:value="handleChange"
    >
      <a-checkbox
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
      >
        {{ option.label }}
      </a-checkbox>
    </a-checkbox-group>

    <!-- 开关 -->
    <a-switch
      v-else-if="type === 'switch'"
      :value="modelValue"
      v-bind="fieldProps"
      @update:value="handleChange"
    />

    <!-- 树形选择器 -->
    <a-tree-select
      v-else-if="type === 'tree-select'"
      :value="modelValue"
      :placeholder="placeholder"
      :data="options"
      v-bind="fieldProps"
      @update:value="handleChange"
    />
  </a-form-item>
</template>

<script setup lang="ts">
import { SearchFormFieldEmits } from './interface'
import { searchFormFieldProps } from './search-form-field'

const props = defineProps(searchFormFieldProps)
const emits = defineEmits<SearchFormFieldEmits>()

const handleChange = (val: any) => {
  emits('update:modelValue', val)
  emits('change', val)
}
</script>

<style lang="scss" scoped></style>
