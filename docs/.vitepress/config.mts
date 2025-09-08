import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

export default defineConfig({
  srcDir: "src",
  title: "Maple's 个人笔记",
  description: "记录学习过程",
  lastUpdated: true,
  themeConfig: {
    logo: {
      light: "/image/logo-light.svg",
      dark: "/image/logo-dark.svg",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/note" },
      { text: "面经", link: "/interview" },
      { text: "项目", link: "/project" },
      {
        text: "其它",
        link: "/other/markdown-examples",
        activeMatch: "^/other",
      },
      { text: "关于", link: "/about" },
    ],

    sidebar: {
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
