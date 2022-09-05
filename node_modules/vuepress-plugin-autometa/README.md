# VuePress Plugin Auto Meta

> Auto meta tags plugin for [VuePress](https://vuepress.vuejs.org/) 1.x

[![Build Status](https://img.shields.io/travis/webmasterish/vuepress-plugin-autometa/master.svg?style=flat-square)](https://travis-ci.org/webmasterish/vuepress-plugin-autometa)
[![npm version](https://img.shields.io/npm/v/vuepress-plugin-autometa.svg?style=flat-square)](http://npm.im/vuepress-plugin-autometa)
[![Greenkeeper badge](https://badges.greenkeeper.io/webmasterish/vuepress-plugin-autometa.svg?style=flat-square)](https://greenkeeper.io/)
[![MIT License](https://img.shields.io/npm/l/express.svg?style=flat-square)](http://opensource.org/licenses/MIT)


## What

This is a Plug-and-Forget VuePress plugin that will auto generate the meta tags
for VuePress pages or posts.


## Install


```sh
$ npm install -D vuepress-plugin-autometa

# or

$ yarn add -D vuepress-plugin-autometa
```


## Usage

Add `vuepress-plugin-autometa` in your site or theme config file.

> See [official docs on using a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html)


```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

// set your global autometa options - override in page frontmatter
const autometa_options = {
  site: {
    name   : 'Webmasterish',
    twitter: 'webmasterish',
  },
  canonical_base: 'https://webmasterish.com',
};

module.exports = {
  plugins: [
    [ 'autometa', autometa_options ]
  ]
}
```


## Options

> See Plugin Option API [official docs](https://vuepress.vuejs.org/plugin/option-api.html)


### Default options

You can override default options in 2 ways:

1. Global plugin options set in `.vuepress/config.js` or `.vuepress/theme/index.js`
   as described in [Usage](#usage)
2. Individual page/post `frontmatter` as shown in [Examples](#examples)


```js
const default_options = {

  enable : true, // enables/disables everything - control per page using frontmatter
  image  : true, // regular meta image used by search engines
  twitter: true, // twitter card
  og     : true, // open graph: facebook, pinterest, google+
  schema : true, // schema.org for google

  // -------------------------------------------------------------------------

  // canonical_base is the canonical url base - best to set once in config.js
  // if set it will be used to prepend page path and add it to the following:
  // - twitter:url
  // - og:url
  // - canonical link (not yet supported)

  canonical_base: '',

  // @todo
  //canonical_link: true,
  //
  // having only started with vuepress a few days ago,
  // so far, i couldn't figure out a proper way to extend config head
  // and add <link rel="canonical" href="URL.resolve( canonical_base, $page.path )">
  // feel free to tip-in

  // ---------------------------------------------------------------------------

  author: {
    name   : '',
    twitter: '',
  },

  // ---------------------------------------------------------------------------

  site: {
    name   : '',
    twitter: '',
  },

  // ---------------------------------------------------------------------------

  // order of what gets the highest priority:
  //
  // 1. frontmatter
  // 2. page excerpt
  // 3. content markdown paragraph
  // 4. content regular html <p>

  description_sources: [

    'frontmatter',
    'excerpt',

    // markdown paragraph regex
    //
    /^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
    //
    // this excludes blockquotes using `(?!^>)`
    ///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

    // html paragraph regex
    /<p(?:.*?)>(.*?)<\/p>/i,

  ],

  // ---------------------------------------------------------------------------

  // order of what gets the highest priority:
  //
  // 1. frontmatter
  // 2. content markdown image such as `![alt text](http://url)`
  // 3. content regular html img

  image_sources: [

    'frontmatter',

    /!\[.*?\]\((.*?)\)/i,        // markdown image regex
    /<img.*?src=['"](.*?)['"]/i, // html image regex

  ],

};
```


## Examples


Assuming we have this sample `index.md` file

```md
---

title: Plans for the Next Iteration of VuePress

date: 2018-12-28T15:18:13+0200

autometa:
  author:
    name: Evan You
    twitter: youyuxi

tags:
  - VuePress
  - auto meta tags
  - are cool

---

# {{ $page.title }}


## Simplicity First

Minimal setup with markdown-centered project structure
helps you focus on writing.

![random image](http://lorempixel.com/640/480)


## Vue-Powered

Enjoy the dev experience of Vue + webpack, use Vue components in markdown,
and develop custom themes with Vue.


## Performant

VuePress generates pre-rendered static HTML for each page,
and runs as an SPA once a page is loaded.

```

The auto generated metas will be as follows:

```html
<meta name="description" content="Minimal setup with markdown-centered project structure helps you focus on writing.">
<meta name="image" content="http://lorempixel.com/640/480">

<meta name="twitter:title" content="Plans for the Next Iteration of VuePress">
<meta name="twitter:description" content="Minimal setup with markdown-centered project structure helps you focus on writing.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="http://lorempixel.com/640/480">
<meta name="twitter:url" content="https://webmasterish.com/plans-for-the-next-iteration-of-vuepress/">
<meta name="twitter:creator" content="@youyuxi">
<meta name="twitter:site" content="@webmasterish">

<meta property="og:type" content="article">
<meta property="og:title" content="Plans for the Next Iteration of VuePress">
<meta property="og:description" content="Minimal setup with markdown-centered project structure helps you focus on writing.">
<meta property="og:image" content="http://lorempixel.com/640/480">
<meta property="og:url" content="https://webmasterish.com/plans-for-the-next-iteration-of-vuepress/">
<meta property="og:site_name" content="Webmasterish">
<meta property="article:author" content="Evan You">
<meta property="article:published_time" content="2018-12-28T15:18:13+0200">
<meta property="article:tag" content="VuePress">
<meta property="article:tag" content="auto meta tags">
<meta property="article:tag" content="are cool">

<meta itemprop="name" content="Plans for the Next Iteration of VuePress">
<meta itemprop="description" content="Minimal setup with markdown-centered project structure helps you focus on writing.">
<meta itemprop="image" content="http://lorempixel.com/640/480">
```


## Reference

- VuePress official [plugin docs](https://vuepress.vuejs.org/plugin/)
- VuePress official [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html)
- [HEAD guide](https://github.com/joshbuchea/HEAD)
- [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)
- [Open Graph protocol](http://ogp.me/)
- [Schema.org](https://schema.org/)


## License

MIT © [webmasterish](https://webmasterish.com)
