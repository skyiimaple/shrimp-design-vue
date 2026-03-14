// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { SpSearchForm, SpSearchFormField, SpImg, SpLayout } from '@shrimp-design-vue/components'

import '@vitepress-demo-preview/component/dist/style.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        app.use(ArcoVue)
        app.component('SpSearchForm', SpSearchForm)
        app.component('SpSearchFormField', SpSearchFormField)
        app.component('SpImg', SpImg)
        app.component('SpLayout', SpLayout)
    },
} satisfies Theme;
