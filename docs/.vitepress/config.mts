import { defineConfig } from "vitepress";
import {
    containerPreview,
    componentPreview,
} from "@vitepress-demo-preview/plugin";

export default defineConfig({
    base: "/shrimp-design-vue/",
    srcDir: "src",
    title: "Shrimp Design Vue",
    description: "基于 Arco Design Vue 二次开发的业务组件库",
    lastUpdated: true,
    themeConfig: {
        logo: {
            light: "/image/logo-light.svg",
            dark: "/image/logo-dark.svg",
        },
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/getting-started" },
            { text: "组件", link: "/components/search-form" },
            {
                text: "其它",
                link: "/other/markdown-examples",
                activeMatch: "^/other",
            },
        ],

        sidebar: {
            "/guide/": [
                {
                    text: "指南",
                    items: [
                        { text: "开始使用", link: "/guide/getting-started" },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        { text: "Layout 页面布局", link: "/components/layout" },
                        { text: "Image 图片预览", link: "/components/img" },
                    ],
                },
                {
                    text: "业务组件",
                    items: [
                        { text: "Search Form 搜索表单", link: "/components/search-form" },
                    ],
                },
            ],
            "/other/": [
                {
                    text: "其它",
                    items: [
                        { text: "Markdown Examples", link: "/other/markdown-examples" },
                        { text: "Runtime API Examples", link: "/other/api-examples" },
                    ],
                },
            ],
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/skyiimaple/pvt-web" },
        ],
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                            closeText: "关闭",
                        },
                    },
                },
            },
        },
        lastUpdated: {
            text: "最近更新时间",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    markdown: {
        config(md) {
            md.use(containerPreview);
            md.use(componentPreview);
        },
    },
});
