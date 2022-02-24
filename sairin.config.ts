// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: '疯狂星期四'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Sairin`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/djyde/sairin",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/randyloop",
      },
    ],
  },
} as SairinConfig;
