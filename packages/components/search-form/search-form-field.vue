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
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @input="emits('update:modelValue', $event.trim())"
    />

    <!-- 数字输入框 -->
    <a-input-number
      v-else-if="type === 'input-number'"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @input="handleChange"
    />

    <!-- 选择器 -->
    <a-select
      v-else-if="type === 'select'"
      :value="modelValue"
      :placeholder="placeholder"
      :options="options"
      v-bind="fieldProps"
      @change="handleChange"
    />

    <!-- 日期选择器 -->
    <a-date-picker
      v-else-if="type === 'date'"
      :value="modelValue"
      :placeholder="placeholder"
      style="width: 100%"
      v-bind="fieldProps"
      @change="handleChange"
    />

    <!-- 日期范围选择器 -->
    <a-range-picker
      v-else-if="type === 'date-range'"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="fieldProps"
      @change="handleChange"
    />

    <!-- 单选框组 -->
    <a-radio-group
      v-else-if="type === 'radio'"
      :value="modelValue"
      v-bind="fieldProps"
      @change="handleChange"
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
      @change="handleChange"
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
      @change="handleChange"
    />

    <!-- 树形选择器 -->
    <a-tree-select
      v-else-if="type === 'tree-select'"
      :value="modelValue"
      :placeholder="placeholder"
      :data="options"
      v-bind="fieldProps"
      @change="handleChange"
    />
  </a-form-item>
</template>

<script setup lang="ts">
import { SearchFormFieldEmits } from './interface'
import { searchFormFieldProps } from './search-form-field'
defineOptions({
  name: 'SpSearchFormField',
})
const props = defineProps(searchFormFieldProps)
const emits = defineEmits<SearchFormFieldEmits>()

const handleChange = (val: any) => {
  emits('update:modelValue', val)
  emits('change', val)
}
</script>

<style lang="scss" scoped></style>
