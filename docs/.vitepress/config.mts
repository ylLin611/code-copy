import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码小抄",
  description: "代码小抄",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo-nobg.png" }]],
  themeConfig: {
    logo: "/logo-aikr.png",
    /**
     * 导航栏配置
     * 如需下拉，配置如下
     {
        text: "下拉",
        items: [
          { text: "下拉1", link: "/xx" },
          { text: "下拉2", link: "/xx" },
          { text: "下拉3", link: "/xx" },
        ],
      },
     */
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/guide/" },
    ],

    /**
     * 配置侧边栏
     */

    sidebar: [
      {
        text: "工具",
        items: [
          { text: "github.io", link: "/tools/githubio" },
          {
            text: "markdown",
            link: "/tools/markdown",
          },
        ],
      },
    ],

    footer: {
      message: "",
      copyright: "Copyright © 2025-present Lin",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ylLin611" }],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
