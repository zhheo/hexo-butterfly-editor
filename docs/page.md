# 页面

给butterfly增加全新的页面，创建一个全新的功能。

## 页面生成

原生butterfly不具备的页面，创造页面的美化。

[给你的留言板添加一个弹幕吧](https://blog.leonus.cn/2022/danmaku.html) - Leonus

> 懒得打字了，直接开始教程

[弹幕升级版——全屏弹幕](https://blog.leonus.cn/2022/barrage.html) - Leonus

> 之前写了一个简单的留言板弹幕功能：[给你的留言板添加一个弹幕吧](https://blog.leonus.cn/2022/danmaku.html)，20天过去了，越看越觉得不够高端大气上档次，于是就重新找了一个弹幕项目写一下。
> 项目地址：[jquery.barrager.js 专业的网页弹幕插件](https://github.com/yaseng/jquery.barrager.js)
> 看名字就知道，我们需要引入jq，不过问题不大，我们只是单页引入。

[Hexo的Butterfly魔改：即刻短文静态部署版 ](https://blog.zhheo.com/p/557c9e72.html)- 张洪Heo

> 腾讯云已经跑路了，挂在腾讯云函数的twikoo已经私有部署了，还剩下一个即刻短文还跑在腾讯云开发的服务上。
>
> 找了黑石原来的leancloud方案，主要黑石的公众号是订阅号不是服务号，发起来很麻烦，没有开源无法私有部署。
>
> 难道真的要像木木学习魔改Twikoo？
>
> 在改友链的时候突然想到为什么不能用与butterfly相同的yml生成方式呢？

[Hexo-Butterfly说说朋友圈适配（哔哔 for 腾讯云）自用](https://blog.zhheo.com/p/a6947667.html) - 张洪Heo

> 之前关于哔哔的教程写的都很乱，并且因为哔哔和Twikoo可能造成的冲突问题导致很多都访问不了，经常出现缓存和无法加载的情况。最终还是用json加载的方式来做bb了。这篇教程可以作为最终版的哔哔教程了。（再也不想折腾这个东西了）

[BBTalk魔改：让bbtalk的样式变成瀑布流](https://yisous.xyz/posts/70734559/) - LYX

> 因为bbtalk默认的样式是时间轴（如图），但是我更喜欢瀑布流的样式（比如洪哥的），所以就写了一个简单的css用于修改样式。
>

[Hexo 博客文章统计图](https://blog.eurkon.com/post/1213ef82.html) - Eurkon

> 本文教程主要针对 Hexo 博客，对博客的文章发布时间、文章分类、文章标签的维度绘制统计图，使用的是 ECharts 开源可视化库。具体效果可以点击本站的 统计--文章统计 页面查看。

[添加一个留言弹幕页面](https://dorakika.cn/p/20220418.html) - KIKA

> 本来是准备做一个留言的地方，这样一些与文章内容无关的留言有地方可以放了。但是又想着如果只是加一个带有评论的空白页面未免有些太单调了，于是就准备做一个弹幕展示框（灵感来源于找API时偶然遇到的韩小韩）

[Butterfly主题的留言弹幕界面增强版（支持Twikoo、Waline、Valine）](https://yisous.xyz/posts/69707535/) - LYX

> 后来发现这个留言弹幕有一些问题：
>
> 没有对昼夜两个模式作适配
> 颜色比较花哨，自己不喜欢
> 没有自动隐藏，会挡着真正的评论和一些按钮以及正文
> 不支持Waline/Valine
> 没有鼠标悬停暂停功能

## 页面定制修改

针对butterfly原生现有的页面进行修改的美化。

[Butterfly魔改：404页面展示最近文章](https://blog.zhheo.com/p/f48e518b.html)  - 张洪Heo

> 404页面是在文件不存在的时候产生的。设想一个场景，用户急于寻找问题的答案，那么当用户通过例如搜索引擎和错误的内链进入到404网页时，用户可能下意识就会关闭网站。如何在404页面留住用户呢？
>
> 在无法判断用户的来源和目标的情况下，最好的还是做主动推荐。所以我在404页面的下方添加了最近的文章列表，使用的是butterfly的侧边栏最近文章列表的代码。
>
> 值得一提的是，最近文章模块没有必要在首页显示，因为和左侧的文章列表重复。

[Hexo博客标签的魔改](https://blog.leonus.cn/2022/tags.html) - Leonus

> 逛别人博客时经常看见标签页后面加了一个数量，起初因为懒没弄，但是最近几天感觉标签确实有一点的不好看，于是决定改一下。

[Butterfly 分类标签归档页增加文章索引](https://blog.eurkon.com/post/27df86b.html) - Eurkon

> 本文教程主要针对 Hexo Butterfly 主题博客，基于原版主题增加文章索引可能不够美观，只是分享思路，有兴趣和有基础的小伙伴可以对此二次魔改。

[Butterfly 分类标签导航栏](https://blog.eurkon.com/post/65b72006.html) - Eurkon

> [Blogroot]\themes\butterfly\scripts\helpers\ 目录下新建文件 catalog_list.js，type 参数表示生成 分类导航栏 categories 还是 标签导航栏 tags，其中 <sup>${item.length}</sup> 是使用上标显示文章数量，可参考Butterfly 标签云增加文章数上下标。

[给分类与标签页面添加导航栏](https://dorakika.cn/p/20220313.html) - KIKA

> 在逛博客的过程中，发现几个小伙伴的标签\分类页面都有一个导航条，可以在标签\分类页面直接跳转到其他标签\分类
>

[归档、分类、标签页文章卡片加上所属分类和标签](https://www.chuckle.top/article/a19bb7fb.html) - 轻笑Chuckle

> 如图，上面修改前，下面修改后。

[控制指定单页的背景样式](https://www.chuckle.top/article/eb3a4679.html) - 轻笑Chuckle

> 看@heo的博客单页，无论是哔哔，友链，还是关于页，page的背景都是透明的，一开始我以为是在单页的index.md里单独引入css，后来才知道，是直接#page{background:transparent;},这只会让所有非文章、归档、分类、标签的单页背景透明。

## 整站页面修改

针对整个网站整体的页面更改。

[Hexo Butterfly宽屏适配指北](https://yisous.xyz/posts/d1fc759/) - LYX

> 现在随着显示器成本降低，越来越多的人都用上了大屏幕，这时博客的标准宽度就显得很憋屈了，空间利用率太低，无法充分展示博文内容。
>
> 而且看起来也不舒服，尤其是加了首页banner之后，我放出以前没有宽屏的博客版本（Vercel每次部署都有单独域名，好东西）
>

[让你的网站在一些日子中自动弹窗/灰屏](https://yisous.xyz/posts/7e9276a3/) - LYX

> 今天是世界慰安妇纪念日，我都是意外知道的，就顺便编写了一个简单的js来怀念那些同胞们，在一些节日也会弹窗庆祝。
>
> 这个脚本使用cookie记录，保证不会多次弹窗影响浏览体验，支持传统节日和公历节日的计算。