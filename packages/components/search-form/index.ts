import SearchForm from './search-form.vue'
import SearchFormField from './search-form-field.vue'
import { withInstall } from '@shrimp-design-vue/utils'

export const SpSearchGroup = withInstall(SearchForm)
export const SpSearchFormField = withInstall(SearchFormField)

export * from './search-form-field'
export default SpSearchGroup
