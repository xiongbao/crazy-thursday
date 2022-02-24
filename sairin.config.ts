// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: '疯狂星期四'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `疯狂星期四`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/xiongbao/crazy-thursday",
      },
      {
        title: "Boring Studio",
        url: "https://the.boring.studio",
      },
    ],
  },
} as SairinConfig;
