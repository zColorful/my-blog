import { defineConfig } from "vitepress";

const BASE = "/vitepress-template/";

export default defineConfig({
  lang: "zh-CN",
  base: BASE,
  appearance: true,
  title: "曾德强的博客",
  description: "VitePress is a Vite-powered static site generator",
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  // 导航配置
  themeConfig: {
    siteTitle: "『 曾德强的博客 』",
    logo: "../assets/images/logo.svg",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2012-present 曾德强",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://gitee.com/zengdeqiang",
      },
    ],
    // 导航栏
    nav: [
      {
        text: "📖笔记",
        link: "/",
      },
      {
        text: "💻前端",
        link: "/web/前端面试题/前端面试题汇总all",
      },
      {
        text: "🖥️后端",
        link: "/back/",
      },
      {
        text: "大杂烩",
        items: [
          {
            text: "shell入门",
            link: "/messy/shell/",
          },
        ],
      },
      {
        text: "相关问题",
        link: "/computer/",
      },
      {
        text: "常用工具",
        link: "/utils/",
      },
      {
        text: "关于",
        link: "/about/",
      },
    ],
    // 侧边栏
    sidebar: {
      "/web/": [
        {
          text: "JavaScript教程笔记",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "flexible原理解析",
              link: "/web/flexible原理解析",
            },
            {
              text: "JavaScript基础",
              link: "/web/",
            },
            {
              text: "数组结构及小功能",
              link: "/web/小功能",
            },
            {
              text: "js预编译详解",
              link: "/web/js预编译",
            },
          ],
        },
        {
          text: "浏览器相关",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "前端路由模式(hash/history)",
              link: "/web/浏览器相关/路由切换",
            },
          ],
        },
        {
          text: "webpack入门",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "webpack案例",
              link: "/web/webpack/",
            },
            {
              text: "webpack代码压缩",
              link: "/web/webpack/webpack2代码压缩",
            },
          ],
        },
        {
          text: "TypeScript教程笔记",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "TS教程",
              link: "/web/TS教程/",
            },
          ],
        },
        {
          text: "css汇总",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "css动画过渡相关",
              link: "/web/css/",
            },
          ],
        },
        {
          text: "es6-es11教程笔记",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "es6笔记",
              link: "/web/es6-es11教程笔记/",
            },
            {
              text: "es7笔记",
              link: "/web/es6-es11教程笔记/es7笔记",
            },
            {
              text: "es8笔记",
              link: "/web/es6-es11教程笔记/es8笔记",
            },
            {
              text: "数组的扩展",
              link: "/web/es6-es11教程笔记/数组的扩展",
            },
          ],
        },
        {
          text: "vue相关笔记",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "vue工具函数汇总",
              link: "/web/vue相关笔记/",
            },
            {
              text: "vue3语法",
              link: "/web/vue相关笔记/vue3语法",
            },
          ],
        },
        {
          text: "react相关笔记",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "react工具函数汇总",
              link: "/web/react相关笔记/",
            },
            {
              text: "redux一篇搞懂",
              link: "/web/react相关笔记/redux一篇搞懂",
            },
            {
              text: "react面试题",
              link: "/web/react相关笔记/面试题",
            },
          ],
        },
        {
          text: "前端面试题汇总",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "前端面试题汇总",
              link: "/web/前端面试题/前端面试题汇总all",
            },
          ],
        },
        {
          text: "语义化版本",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "版本详解",
              link: "/web/Semanticization/",
            },
          ],
        },
      ],
      "/back/": [
        {
          text: "后端教程简介",
          collapsible: true,
          items: [
            {
              text: "start",
              link: "/back/",
            },
          ],
        },
        {
          text: "mysql教程",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "mysql安装",
              link: "/back/mysql/",
            },
          ],
        },
        {
          text: " python教程及demo",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "python安装",
              link: "/back/python/",
            },
            {
              text: "python3库语法",
              link: "/back/python/python3库语法",
            },
          ],
        },
      ],
      "/computer/": [
        {
          text: "电脑环境配置相关",
          collapsible: true,
          items: [
            {
              text: "SHELL",
              link: "/computer/",
            },
            {
              text: "homebrew",
              link: "/computer/mac/homebrew",
            },
          ],
        },
        {
          text: "uniapp相关",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "项目搭建报错",
              link: "/computer/uniapp/",
            },
          ],
        },
        {
          text: "pnpm相关",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "使用pnpm创建vue/react项目报错",
              link: "/computer/pnpm/",
            },
          ],
        },
      ],
      "/messy/": [
        {
          text: "shell入门教程",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "shell入门",
              link: "/messy/shell/",
            },
            {
              text: "shell命令",
              link: "/messy/shell/shell命令",
            },
          ],
        },
      ],
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/vitepress-template/favicon.ico",
      },
    ],
  ],
});
