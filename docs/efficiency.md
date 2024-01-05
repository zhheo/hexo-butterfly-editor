# 效率

更快的部署方式可以让博主释放双手，提升写作效率。

## 推送

将博客快速推送到博客所在的服务器/Git等。

[通过alias自定义终端命令实现Hexo博客的高效使用，简化你的终端命令](https://blog.zhheo.com/p/ae839a7c.html) - 张洪Heo

> 我之前一直使用utools来完成这三步动作。但是因为utools数据莫名其妙丢失，并且官方因为为了收费而不提供配置备份，导致所有脚本都失踪了。万般无奈之下使用了Hapigo作为我的Mac启动工具。
>
> Hapigo支持终端运行，但是对终端支持有限，只支持输入命令而已，甚至历史记录功能还失效了。
>
> 研究了半天发现alias相当于给你的命令起一个名字，让你使用自定义命令来执行很长的命令。

[使用github-action推送博客部署仓库至NPM](https://akilar.top/posts/e82444a6/) - Akilar

> 自从2021年12月20日，jsdelivr因为“**某些原因**”，在大陆和台湾的ICP证书被吊销。可以说，这让国内的开发生态瞬间天塌一般。目前，虽然jsdelivr已经恢复了服务，但是这只是通过在“**中国附件**”的节点提供的CDN加速服务，速度上还不如放到本地。这种反向加速的CDN服务，我们已经可以认为jsdelivr已经挂了。

[使用 Github Action 自动部署](https://blog.anheyu.com/posts/asdx.html) - 安知鱼

> 此教程参考 🧊Akilar の糖果屋 🍭，转载需注明出处。Github Action 简介
> Github Action 是 GitHub 于 2018 年 10 月推出的一个 CI\CD 服务。

[Hexo 自动化部署](https://zhsher.cn/posts/8779/) - 张时贰

> Github Action部署方案：主要是方案三的方法
> 原方案二中包含Gitee Page部署，没什么用在方案三中剃掉了
> 方案三中包含私有仓库推送Github Page、服务器、Gitee二次私有备份以及SEO（借助乐特的插件实现）、CDN的刷新

[修复 Vercel/Github Actions 部署 hexo 导致文章的更新时间错误](https://blog.im0o.top/posts/c6d9de72.html) - 0o酱

> 在使用 `Vercel` 或 `Github Actions` 自动化部署 hexo 博客时会发现所有文章的更新时间都变成了此次提交修改的时间，但实际上这些文章是没有任何修改的。
>
> 这是因为 `git` 在推送更新的时候不会保存文件的访问时间、修改时间等元信息。

[将CDN缓存自动刷新加入到Hexo博客发布的工作流](https://uuanqin.top/p/b05ac1ee/) - wuanqin

> 这篇文章介绍了如何通过脚本实现一键发布博客的方法，以及如何使用腾讯云SDK工具进行开发和安全使用API KEY。作者介绍了在使用CDN加速源站时，每次发布博客到服务器后需要手动在腾讯云控制台进行节点缓存刷新的问题，并通过脚本思路来解决这个问题。文章末尾包含了编写的脚本原件。同时，文章还介绍了在使用Hexo博客建站时常用的三个命令的含义。

[hexo博客工作流CI（一键部署的快乐）](https://blog.anheyu.com/posts/b228.html) - 安知鱼

> 在日常写博客的过程中我常常使用 CI 部署，一开始我是使用[Jenkins](https://www.jenkins.io/)，后来觉得很丑且经常拉库失败（设置的 cron 是半小时拉取一次，然而常常 4-5 小时才能更新）
> 就转向了[阿里的工作流](https://help.aliyun.com/document_detail/159666.htm)，好看很多且界面操作也简单了许多，缺点就是个人使用实在是没必要，企业的话用起来还是很爽的。
> 再后来看到店长的文章以后就开始使用 Github Action，具体可以去看这篇文章 - [使用 Github Action 自动部署](https://blog.anheyu.com/posts/b228.html)

## 统计

[51la统计体验报告：很全面的惊喜，Butterfly适配51la统计](https://blog.zhheo.com/p/c7c43433.html) - 张洪Heo

> 感觉说删就删让我产生了危机感，我其实对数据存储安全都非常敏感。一般我的文件都会保存三份以上的备份（比如微信聊天记录就存了三份，每周更新备份），这种说删就删让我感到一丝丝恐惧了。
>
> 所以百度统计我会继续用，但是要找个一起用的统计了。统计基本上都用过，cnzz界面感觉是上古时期的东西，谷歌速度堪忧，一个偶然的机遇让我看见了51la这个。初中的时候做论坛用过，后来就再也没碰过这个统计了。

[如何自己搭建busuanzi不蒜子平台，搭建静态博客的访问量统计](https://blog.zhheo.com/p/b7bb7832.html) - 张洪Heo

> 之前看了一下网站的网络响应，可以说busuanzi占用了50%多的时间，busuanzi不蒜子太慢太卡，而很多静态博客都是用的busuanzi。毕竟公益免费。但是速度实在是太慢了，严重拖垮了网站速度。所以我放弃了数百万的数据，还是自搭建比较香，博客速度提升一大截。
>
> 这个文章就是具体介绍如何自己搭建busuanzi服务。相比于项目的官方文档，这个博客文章会更加细致的介绍，并对文档一些错误内容进行修正。

## 报错

在使用Hexo过程中的报错解决方案。

[Hexo错误：spawn failed的解决方法](https://blog.zhheo.com/p/128998ac.html) - 张洪Heo

> 昨天部署的时候突然spawn failed，怎么部署都部署不上。后来折腾了好一会终于解决了这个报错问题。今天又发现群友有这个问题，所以写个文章来复盘一下。

[博客搜索挂了解决方法](https://www.chuckle.top/article/f8c79a1b.html) - 轻笑Chuckle

> 省流助手：删除所有local-search.js中下面这行代码
> window.pjax && window.pjax.refresh($resultContent)

[解决 Hexo 中渲染 MathJax 数学公式问题](https://blog.jayhrn.com/posts/6be4ed10.html) - Jayhrn

> 最近这几天开始准备数学建模比赛了，于是便接触到了许多的数学公式，俗话说

## 重装

重新安装主题的方法。

[butterfly 重装指南](https://blog.anheyu.com/posts/sdxhu.html) - 安知鱼

> npm淘宝镜像源
>
> npm config set registry https://registry.npm.taobao.org
>
> npm config set registry https://registry.npmjs.org/

[Buttterfly重装记录 - 数据记录](https://meuicat.com/blog/3/) - iCat爱吃肉的猫

> 在原本的项目上 进行Hexo的升级 和插件依赖的更新
>
> 升级前请 备份！ 备份！ 备份！
>
> 有较大的改动一定要备份 而且更新Hexo存在很多不可控因素 哪怕更新成功了也一定要保留一份备份以备不时之需
>
> 做好备份就可以开始更新框架工作

## 图床

对文章图片展示的服务支持。

[建立个人博客（五）—— 图床](https://sheerkvc.top/2022/08/30/12.photos%20bed/) - Kevin Chen

> 理所当然的，一篇文章里需要有图片来加以形象的说明实例。在远端博客中，我们不可能把用到的所有图片全部塞到仓库中，因此我们需要一个`gallery in cloud`帮我们储存相对应的图片以供阅读时加载。国内外都有很多图床服务商提供对象储存服务，对于初学等级，这里以国内的阿里云OOS对象储存服务作为参考，也可以为下面的域名打一些基础。

[图床方案汇总](https://blog.xlenco.top/posts/7ea9.html) - Xlenco

> 目前 MarkDown 作为一种程序员必备的轻量级标记语言，避免了富文本编辑器换平台就要重新排版的繁琐，使我们可以专注于技术的输出，但使用 markdown 也有弊端，那就是图片的存储问题，markdown 文件要用到图片时必须是一个链接。各个平台都有自己的图片存储方法，在不使用图床的情况下，同一篇文章发布到不同的平台需要单独上传图片一次。如果都放本地这样实在是太麻烦了。

[我的图床方案](https://blog.anheyu.com/posts/2785.html) - 安知鱼

> 这篇文章介绍了图床的不同方案，包括网络免费图床、自建图床、腾讯云或阿里云等各大平台的云存储方案、付费图床等。每种方案都有其优点和缺点，需要根据自己的需求和实际情况进行选择。作者介绍了自己使用的方案，包括自建图床和云存储，以及使用兰空图床企业版来管理文件。文章还提供了各种方案的特点和具体配置方法。

## 后台管理

[为Hexo部署在线编辑器 | Qexo](https://blog.btwoa.com/2qe37d61/) - btwoa

> Qexo项目日趋完善，准备重新部署并对全部过程进行记录，本篇就是使用Qexo创建编辑发布的

## 订阅

[安装 RSS 插件实现订阅](https://imbhj.com/posts/c2535796/) - Ordis

> 因为我是 Butterfly 主题，所以已经集成了 rss 功能，所以设置到这一步就可以了。如果你的主题里面没有 rss 相关设置，也可以添加如下代码：

[Butterfly的魔改教程：文章订阅页](https://meuicat.com/blog/70/) - iCat爱吃肉的猫

> Heo同款RSS页；基于Follow文章更新通知的订阅服务
> 当发布新文章时可通过第三方平台发送邮件至订阅者邮箱

[使用竹白作为你的博客更新邮件订阅服务提供商，如何让博客支持邮件订阅](https://blog.zhheo.com/p/58963cf6.html) - 张洪heo

> 作为Hexo搭建的静态博客，其实很难做到发文章后自动去发邮件提醒。RSS提醒感觉用的人已经越来越少了，公众号订阅担心过多信息造成打扰。所以我一直在找一些第三方发邮件的服务来做这件事。但是批量发邮件很多要收费，而且容易被认为是广告邮件、垃圾邮件。
> 所以批量发邮件这个事情想做起来非常困难，对于一个小博主来说，「竹白」是一个很不错的选择。
> 唯一的缺点在我看来就是不能自动完成这件事情，需要类似发公众号一样，在竹白中再发一遍。

## 写作

[构建Obsidian的Hexo写作工作流](https://uuanqin.top/p/51890a9/) - wuanqin

> 这篇文章介绍了如何使用Obsidian来构建Hexo写作工作流。作者介绍了选择Obsidian的原因，以及使用该工具的快捷键、文章模板、图床、文件夹分类等基本设置。同时，作者还详细讲解了Obsidian特有的双向链接渲染和安装第三方插件link-info-server，以及如何使用Hexo的第三方插件hexo-abbrlink和hexo-link-obsidian来实现工作流的完整性。最后作者还讲解了放弃Typora的理由，并总结了使用Obsidian的优势。
>