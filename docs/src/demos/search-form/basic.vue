<template>
  <div>
    <sp-search-form
      v-model="formModel"
      :fields="fields"
      @search="handleSearch"
    />
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
import { SpSearchForm } from '@shrimp-design-vue/components'
import { SearchFormFields } from '@shrimp-design-vue/components/search-form/interface'

const formModel = ref({
  username: 'Admin',
  status: '1',
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
    placeholder: '',
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
