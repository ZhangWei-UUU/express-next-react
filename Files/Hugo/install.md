## 安装

```
brew install hugo
hugo help
```

安装VSC插件`Hugofy`.

### 创建本地开发

```
hugo new site demosite
git init 
```

### 添加主题

假设我们添加的主题为[ananke](https://themes.gohugo.io/gohugo-theme-ananke/)
```
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke;
```

这时`theme`文件夹下就有`ananke`文件夹主题文件。同时修改`config.toml`文件，在文件中设置主题`theme="ananke"`;

### 添加网站内容

```
hugo new posts/my-first-post.md
```

在`content`文件夹下创建 `posts/my-first-post.md`.


### 启动本地服务

```
hugo server -D
```

### 将资源生产静态文件
```
hugo
```

运行`hugo`命令行后就会生成`public`文件夹，根据相关配置文件会生成不同语言、路径的静态HTML以及CSS,JS


### 部署网站

将静态资源`/public`直接放置到webserver即可。

## 开发环境中的文件架构

**archetypes**

一般情况下，我们初始化一个网站会使用`hugo new`命令行，在默认情况下，会生成一个`content`文件夹，其中的content文件中至少有三个基本元素，`date`,`title`,`draft`。而`archetypes`中的内容就是他们的配置，开发者可以根据自己的需要进行自定义配置。

**content**
是Hugo开发环境中的主文件夹，也是页面级别的文件夹，主要内容都在此。

**data**
用于存储配置文件，具体内容会在[数据模板](https://gohugo.io/templates/data-templates/)一节中进行详述。
**layouts**
用于存储视图模板，具体内容会在[模板](https://gohugo.io/templates/)一章中进行详述。

**static**
用于存储静态资源，如图片，css库等。

