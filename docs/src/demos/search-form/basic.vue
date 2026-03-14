<template>
  <div>
    <sp-search-form
      v-model="formModel"
      :fields="fields"
      :field-span-map="{ xs: 12, sm: 12, md: 12, xl: 12 }"
      @search="handleSearch"
    >
      <sp-search-form-field
        type="custom"
        label="自定义"
        placeholder="请输入"
        name="tags"
      >
        <template #default="{ value, props, emits }">
          <a-input
            :value="value"
            v-bind="props"
            @input="emits('change', $event)"
          />
        </template>
      </sp-search-form-field>
    </sp-search-form>
    <div
      style="
        margin-top: 20px;
        padding: 12px;
        background: #f9f9f9;
        border-radius: 4px;
      "
    >
      <strong>当前表单数据:</strong>
      <pre>{{ formModel }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SpSearchForm, SpSearchFormField } from '@shrimp-design-vue/components'
import { SearchFormFields } from '@shrimp-design-vue/components/search-form/interface'

const formModel = ref({
  username: '',
  status: '',
})

const fields: SearchFormFields = {
  username: {
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名',
    value: 'admin',
    fieldProps: {
      width: '300px',
    },
  },
  number: {
    type: 'input-number',
    label: '号码',
    placeholder: '请输入',
    value: '13236548963',
  },
  status: {
    type: 'select',
    label: '状态',
    value: '1',
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

const handleSearch = (formValue: any) => {
  console.log('触发搜索:', formValue)
  alert('搜索数据: ' + JSON.stringify(formValue))
}

// const handleReset = () => {
//   console.log('表单重置')
//   formModel.value = {}
// }
</script>
