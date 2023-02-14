# 性能

优秀的性能是网页浏览的核心。无论是网络优化还是博客所消耗的硬件性能都是衡量网页是否优秀的重要参数。

## 静态文件优化

本地静态文件的大小优化。

[使用gulp压缩博客静态资源](https://akilar.top/posts/49b73b87/) - Akilar

> [gulp](https://www.gulpjs.com.cn/)能够帮助用户自动压缩静态资源，配合各类下属插件，能够压缩包括css、js、html乃至各类格式的图片文件。（**图片文件的压缩往往只能节省几十KB，效果远远不如imagine、tinypng等压缩方式，所以此处不再写使用gulp压缩图片的内容**）。

[博客基本优化](https://akilar.top/posts/7c16c4bb/) - Akilar

> 博客优化副本任务：按照糖果屋优化日记的教程索引，完成博客基本优化

## 网络速度

让你的博客拥有CDN加速。

[目前可用cdn整理](https://anzhiy.cn/posts/fe76.html) - 安知鱼

> 可用npm镜像
> jsDelivr
> https://cdn.jsdelivr.net/npm

[Butterfly CDN链接更改指南，替换jsdelivr提升访问速度](https://blog.zhheo.com/p/790087d9.html) - 张洪Heo

> 使用错误的cdn会导致博客服务无法访问，访问速度过慢的问题。因为众所周知的原因jsdelivr无法使用了，但是替换cdn不知道替换成什么比较好。使用新版butterfly的用户可以切换成本地模式，但是如果是旧版butterfly用户的话或者新版想要提升速度就需要第三方的cdn了。

[使用 CDN 加速你的博客吧](https://blog.panghai.top/posts/a154400e/) - 心流

> CDN，即内容分发网络，它使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。我们可以借助 CDN 来加速我们的网站以达到提高用户访问速度以及隐蔽真实 ip 的效果。

[使用Vercel部署博客网页](https://akilar.top/posts/812734f8/) - Akilar

> 使用Vercel部署博客网页，进一步提高访问速度

## PWA

网站可以变成APP。

[Hexo 博客开启 PWA 功能](https://imbhj.com/cecbe2d2/) - Ordis

> 使用前先了解一下什么是 PWA：
>
> PWA（Progressive Web App）是一种理念，使用多种技术来增强 web app 的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。
>
> PWA 不能包含原生 OS 相关代码。PWA 仍然是网站，只是在缓存、通知、后台功能等方面表现更好。Electron 程序相当于包裹 OS 原生启动器（Launcher）的网站，未来，许多 Electron 程序可能转化为 PWA。

[Butterfly 主题 的 PWA 实现方案](https://blog.xlenco.top/posts/89e6.html) - Xlenco

> PWA 是 Google 于 2016 年提出的概念，于 2017 年正式落地，于 2018 年迎来重大突破，全球顶级的浏览器厂商，Google、Microsoft、Apple 已经全数宣布支持 PWA 技术。
> PWA 全称为 Progressive Web App，中文译为渐进式 Web APP，其目的是通过各种 Web 技术实现与原生 App 相近的用户体验。

## PJAX

站点内网页切换无需重新加载网页。

[适配指北：我是怎么适配PJAX的](https://yisous.xyz/posts/30bce1d1/) - Ariasaka

> 昨天爆肝（主要是昨天下午没课）适配了pjax，当时把这个任务当成一个长期任务，没想到很快就搞定了，修改量也不是很大。

[不开pjax的APlayer不中断解决方案](https://yisous.xyz/posts/614f1131/) - Ariasaka

> 最近心血来潮加了个aplayer，但是这个aplayer的体验特炸裂------每次刷新页面都得停止播放。对于我这种文章较短的站来说非常难受，于是我试了试pjax——————更炸裂了，说说、日历、轮播、弹幕等等一堆bug。

[在开启Pjax的情况下实现缓存的更新](https://kmar.top/posts/40941fca/) - 空梦

> 之前我用sw写了前端的缓存控制，刚开始一切都工作正常，但是随后我发现有些时候更新博客之后第一次访问页面会出现后台报错，并且刷新不能解决问题，只有关掉网站重新打开才能解决。
>
> 刚开始我以为是HTTP缓存的问题，但是随后我发现，实际上网页完全没有发起网络请求。随后我发现，这是pjax只更新DOM部分资源导致的。

## 懒加载

只在滚动到图片时加载图片。

[butterfly控制特定图片懒加载](https://anzhiy.cn/posts/192f.html) - 安知鱼

> 经常看我博客的同学应该不难发现我的文章顶图偶尔进来以后还要等一会才能出现，还有加载动画的图片偶尔加载不出来，后来经过我一系列的排查发现居然是懒加载的缘故。

## 预加载

[速度优化-css预加载](https://ezgx.tk/posts/47635/) - Echocbx

> Ecx-project进行的过程中
> 发现了一个问题
> 就是我加了nerdfont，仿宋等等多个字体
> 使用的css引入
> 再加上我没有cdn，用的也是github，加载非常慢
> 字体要十几秒。
