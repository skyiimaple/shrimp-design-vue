import SearchForm from './search-form.vue'
import SearchFormField from './search-form-field.vue'
import { withInstall } from '@shrimp-design-vue/utils'

export const SpSearchForm = withInstall(SearchForm)
export const SpSearchFormField = withInstall(SearchFormField)

export * from './search-form-field'
export default SpSearchForm
