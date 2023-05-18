# 从零开始

在你已经有了魔改能力，那么就需要会通过自定义的文件来进行魔改。以下文章可以教授你如何分清资源关系并自己创建魔改css和js。

## 博客理论

如何开始构建我的博客？

[我应该怎么设计我的博客？如何搭建一个体验好的博客？](https://blog.zhheo.com/p/30c885b3.html) - 张洪Heo

> 我似乎从来都没有说过这方面的理论，只说过一些局部功能的设计原因和魔改。在网上大多也都是组件的魔改。这篇文章我想写一个纯理论的文章，以我现在的博客为例子，引申出博客的设计思考。
>
> 相信通过这篇文章，能够给想要修改自己博客的小伙伴一些方向性的建议，而不是盲目使用网上的组件，看见一个好就直接扒下来。
>
> 这篇文章也只是阐述我的理解，可能有个人的主观偏好。

## Hexo入门

如果你对Hexo还一无所知，可以通过Akilar提供的Hexo入门任务来进行Hexo入门学习。

### 搭建Hexo

[博客本地搭建教程](https://akilar.top/posts/6ef63e2d/) - Akilar

> 根据博客搭建教程完成博客的本地搭建，配合github完成线上部署。

### 选择主题

[挑选你的主题](https://butterfly.js.org/) - Jerry

> 挑选一款合适的主题，推荐使用Butterfly主题，跟随主题文档完成基本配置。

### 必要配置

[Hexo 博客生成永久链接](https://imbhj.com/b6a99401/) - Ordis

> Hexo 文章链接默认的生成规则是：`:year/:month/:day/:title`，是按照年、月、日、标题来生成的。
>
> 这样的话，生成的链接非常长长长长长，而且如果我们的 Markdown 使用中文标题，那就更惨了，URL 一转码，将是一场灾难。

### 创建文章

[新建一篇文章](https://hexo.io/zh-cn/docs/writing) - Hexo

> 在根目录下打开终端,使用 hexo new post新建一篇文章。可以在/source/_post/目录下找到新建的文章。可以通过修改/scaffolds/post.md的模板内容来改变默认生成的文章格式。

[Markdown 教程](https://blog.jayhrn.com/posts/c079e252.html) - Jayhrn

> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
>
> Markdown 语言在 2004 由约翰・格鲁伯（英语：John Gruber）创建。
>
> Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。
>
> Markdown 编写的文档后缀为 .md, .markdown。

[建立个人博客（四）—— md文章&编辑器](https://sheerkvc.top/2022/08/30/11.markdown&typora/) - Kevin Chen

> 我们现在要开始一个博客最主体的部分——***文章***，而博客的文章通常都是.md文件转码为html，因此我们需要了解和学会markdown相关的语法及如何使用编辑器。

## 创建自定义文件（魔改的开始）

通过创建并引用自定义文件成为魔改的开始。

[Hexo 博客之 butterfly 主题优雅魔改系列](https://www.antmoe.com/posts/a811d614/) - DreamyTZK

> 相信在这之前，大家肯定看过网上的各种魔改教程。但是这些魔改教程基本上千篇一律，都是一种方式，大量修改模板（主题源文件）。这种方式的好处就是简单快速且直接，缺点就是每次升级 😏，不用我说了吧。除非你不打算在升级。
>
> 但是对于一个热爱升级的我来说，我怎么可以这样。于是乎我便写了这篇文章。按照此教程进行的魔改，大部分都是通过引入新的 js 文件和 css 文件实现的。这意味着再也不用因为升级而再次魔改而苦恼了 😄。同样的缺点也还是有的，引入新文件必定导致页面加载速度下降，下降多少取决于访客网速、电脑配置及服务器的带宽。具体速度可以参考本博客。

[Hexo博客添加自定义css和js文件](https://blog.leonus.cn/2022/custom.html) - Leonus

> 因为写了几篇关于hexo博客的文章，基本都涉及到自定义css和js。然后就有很多人问怎么用，在哪添加等等等等。
一看就是没好好读文档！，官方文档链接放下面了，晚会去看，先看我的，我说的详细。

[Custom Beautify](https://akilar.top/posts/ebf20e02/) - Akilar

> 引入魔改样式的方法很简单，自建一个css文件，然后引入即可。
>
> 以butterfly主题为例。可以在[Blogroot]\themes\butterfly\source\css\目录下新建custom.css文件，然后在[Blogroot]\_config.butterfly.yml的inject配置项中引入自定义样式文件。

## 域名

一个好的域名是个良好的开始。

[建立个人博客（六）—— 域名](https://sheerkvc.top/2022/08/30/13.blog's%20domain/) - Kevin Chen

> 在此之前，你只能通过`你的用户名.github.io`来访问你的博客网站，要让个人博客更具辨识力，我们就要设置一个具有自己风格的域名。还是以阿里云为例。