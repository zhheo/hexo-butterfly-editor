import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Butterfly主题美化教程",
  description: "让每个人轻松的自定义自己的博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', {}, `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0dd41b1b62d383747c5f3a7d4a4c6816";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '查看文档', link: '/Introduction' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '查看文档', link: '/Introduction' },
          { text: '添加QQ频道', link: 'https://pd.qq.com/s/c0cy521vs' }
        ]
      },
      {
        text: '魔改教程',
        items: [
          {text: '从零开始', link: '/create'},
          {text: '加载动画', link: '/loading'},
          {text: '导航栏', link: '/nav'},
          {text: '首页', link: '/home'},
          {text: '文章', link: '/post'},
          {text: '侧边栏', link: '/aside'},
          {text: '悬浮组件', link: '/window'},
          {text: '友情链接', link: '/friendlink'},
          {text: '页脚', link: '/footer'},
          {text:'字体', link:'/font'},
          {text:'页面', link: '/page'},
          {text: '功能', link: '/function'},
          {text: '性能', link: '/performance'},
          {text: '效率', link: '/efficiency'},
          {text: '失联列表', link: '/error'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhheo/hexo-butterfly-editor' }
    ]
  }
})
