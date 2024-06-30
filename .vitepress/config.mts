import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "人人都能用英语",
  description: "人人都能用英语",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '人人都能用英语',
        items: [
          { text: '简介', link: '/index.md' },
          { text: '第一章：起点', link: '/chapter1.md' },
          { text: '第二章：口语', link: '/chapter2.md' },
          { text: '第三章：语音', link: '/chapter3.md' },
          { text: '第四章：朗读', link: '/chapter4.md' },
          { text: '第五章：词典', link: '/chapter5.md' },
          { text: '第六章：语法', link: '/chapter6.md' },
          { text: '第七章：精读', link: '/chapter7.md' },
          { text: '第八章：叮嘱', link: '/chapter8.md' },
          { text: '后记', link: '/end.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
