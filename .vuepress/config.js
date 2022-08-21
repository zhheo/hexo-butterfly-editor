module.exports = {
  dest: 'public',
  title: 'Butterfly美化教程',
  description: '让每个人轻松的自定义自己的博客',
  themeConfig: {
    sidebar: [
      ['/docs/','简介'],
      '/docs/create',
      '/docs/loading',
      '/docs/nav',
      '/docs/home',
      '/docs/post',
      '/docs/aside',
      '/docs/window',
      '/docs/friendlink',
      '/docs/font',
      '/docs/page',
      '/docs/function',
      '/docs/performance',
      '/docs/efficiency'
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/zhheo/hexo-butterfly-editor' }
    ]
  }
}