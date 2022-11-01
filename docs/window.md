# 悬浮组件

网页中不光是单纯的平面，还可以在上面添加一切奇奇怪怪的悬浮插件。例如悬浮窗口、小宠物、音乐等。

## 悬浮窗口

网站弹窗、悬浮内容的创造。	

[活用githubAPI获取仓库commits作为更新日志](https://akilar.top/posts/13a399e3/) - Akilar

> 弹窗的实现非常的简单。直接fetch，然后依次读出github API返回的json内的message，最后把这个message拼接一下，作为弹窗内容就好了。记得`:username`和`:reponame`要改成自己的用户名和私有仓库名哦。然后`14000000sfxzd93430000000bfb13a00000babf2`也就是你的`token`内容也要记得改成自己的token，申请的时候需要给予repo栏的所有权限才行。

[SAO-UI-PLAN-Notify](https://akilar.top/posts/d0d69f76/) - Akilar

> 故事还要从上一篇教程说起，本来嘛，我只是打算写个左右翻页的上下篇UI重写。然后dorakika从我的魔改里得到灵感，写了个悬浮按钮。
> 然后呢，我从他的悬浮按钮里得到灵感，准备捣鼓个SAO UI风格的控制面板，把现在主题右边的那个侧栏菜单给它捣鼓进控制面板里。

[Butterfly添加全局吸底Aplayer教程](https://butterfly.js.org/posts/507c070f/) - Jerry

> 如果你想使用 aplayer，很多人都会推荐安装 hexo-tag-aplayer 这款插件。这款插件通过 Hexo 独有的标签外挂，我们可以很方便的写入一些参数，插件就会帮我们生成对应的 html。如果你只是使用一些简单的功能，其实无需使用到这个插件，只需以 html 格式书写就行，不用插件去转换。
>

[引入Aplayer播放音乐](https://akilar.top/posts/3afa069a/) - Akilar

> 看到大佬们的网页可以播放音乐，不得不说我是有点心动的，所以就在这里放一下教程。写这个的时候我也在一边试着安装，算是先驱者。
> 有两种方式，一种是安装源文件支持，在所有的网页输出上放置播放器，这样你哪个网页都可以看到它。
> 还有一种是安装插件，这个可以在文章中自定义样式，如此一来，只有当你点开文章的时候才能看到它。
> 我个人比较倾向于第二种，但这里我都会说，事实上引用的不是同一个js的情况下，貌似也不冲突吧。

## 悬浮动画

悬浮在页面的动画。

[添加白天夜间模式转换动画](https://akilar.top/posts/d9550c81/) - Akilar

> 其实这个动画切换效果不是第一次看到了，最早看到是在一些volantis主题的用户博客那里，比如银河小徐那里，百度了一下也搜到过volantis相关的魔改教程，当时没当回事，直到在今年勇那里想到了相对完善的源码，不过他嵌入的不是很完美，按钮在一个比较尴尬的地方。和我的副标题重合了，js也是依赖于jquery的，和最新版butterfly去jquery的理念相悖，所以心血来潮对这个教程做下完善，顺便去jquery。

## 悬浮宠物/看板娘

悬浮在页面的具备观赏性的内容创造。

[Live2d Widget](https://akilar.top/posts/5b8f515f/) - Akilar

> 最早的时候看别人的博客很多都有一个可爱的看板娘，然后就找了教程给自己也整了一个。因为找到的教程都是稂莠不齐的，原作者自己说的也略显含糊（其实是我自己看不懂）。总之秉承着一如既往的小白风格。把网上的教程做个整合。

[博客看板娘增强版](https://imbhj.com/37579d1/) - Ordis

> 之前我写过一篇关于 hexo 博客插入 live2d 的教程，传送门：让你的博客充满生气之 Live2D
>
> 但是由于插件和模型的限制，能应用的看板娘 emmm，都不是很满意，或者说好看的很少，所以能不能把别的 live2d 模型应用到博客里呢，经过缘星星丶大佬的指导，我找到了方法，写在这里以作记录

## 右键菜单

自定义你的右键菜单。

[环形右键菜单](https://akilar.top/posts/8eb79430/) - Akilar

> 环形右键菜单

[SAO UI Plan -- SAO Utils Web 1.0](https://akilar.top/posts/3b4c07bd/) - Akilar

> 写一个`SAO`风格的右键菜单算是我的一个执念了，但是搜遍全网页找不到网页版的内容，于是我想起来多年前就用过的一款软件[SAO Utils](http://www.gpbeta.com/post/develop/sao-utils/)，可惜它虽然有完整的菜单逻辑，但是却是基于C语言写的。至多只能参考一些音效。
>
> 最后兜兜转转，在魔改博客时看到了`Volantis`的右键菜单。学习了一下右键菜单的魔改原理。决定自己来从零开始做一个`SAO`风格的右键菜单。

[SAO Utils Web 2.0](https://akilar.top/posts/fd243d7/) - Akilar

> 写一个SAO风格的右键菜单算是我的一个执念了，但是搜遍全网页找不到网页版的内容，于是我想起来多年前就用过的一款软件SAO Utils，可惜它虽然有完整的菜单逻辑，但是却是基于C语言写的。至多只能参考一些音效。

[自定义右键菜单](https://dorakika.cn/p/20220118.html) - KIKA

> 首先，想要一个右键菜单，就得向页面中插入一个Dom结构
> 因为是右键唤醒菜单，与页面其他元素无关联，所以可以将此结构直接插入在body下
> 适配于butterfly主题，即新建一个rightmenu.pug文件（见下方），位置放在layout文件夹中即可
> 然后在themes/butterfly/layout/includes/layout.pug中引入（注意缩进）

[Butterfly魔改：自定义右键菜单](https://blog.zhheo.com/p/5e931b65.html) - 张洪Heo

> 看到很多魔改的小伙伴都自定义了右键菜单，例如糖果屋的saoUI右键菜单、volantis的右键菜单等等。最近发现DoraKika写了个右键菜单，风格简洁，看起来难度不大，所以修改了个样式就移植过来了。

[butterfly博客自定义右键菜单升级版](https://yisous.xyz/posts/11eb4aac/) - LYX

> 很久以前，Dorakika自己做了一个不错的右键菜单，借鉴于Volantis主题，当然我是在洪哥的博客里面看到的。

## 搜索

搜索功能的自定义。

[algolia的简单美化和优化记录](https://blog.leonus.cn/2022/algolia.html) - Leonus

> 之前就在用algolia，但是搜索却有一点点问题——只能搜索标题，不能搜索内容。
> 今天看群里在聊algolia，于是就问了问，从 [@CC](https://blog.ccknbc.cc/) 的文章里得到了答案：`我用的插件不对`。
> 好家伙，之前没怎么详细了解，完全不知道插件的区别。

## 右下角悬浮工具

主题自带右下角的悬浮工具栏。

[返回顶部显示网页阅读进度](https://blog.leonus.cn/2022/percent.html) - Leonus

> 我们需要给按钮添加一个元素来存放内容，可以选择使用js插入，不过我还是觉得改源码简单方便。
> 修改文件`themes\butterfly\layout\includes\rightside.pug`，在最下面插入如下两行代码（注意去掉前面的`+`号，别傻呼呼的直接复制粘贴）

[Butterfly右下角悬浮菜单栏魔改指南](https://blog.leonus.cn/2022/rightside.html) - Leonus

> 最近折腾了一下右下角悬浮菜单，在这里简单的写写魔改的思路，顺便列出一些适合添加在此处的功能。
> 魔改文件路径：**themes\butterfly\layout\includes\rightside.pug**
> 如果你有更实用的功能或者其他建议欢迎留言告知。

## 进度条

[为你的Butterfly添加顶部加载进度条](https://xlenco.eu.org/posts/769f.html) - Xlenco

> 引入 css