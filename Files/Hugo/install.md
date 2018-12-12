## 安装

```
brew install hugo
hugo help
```

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

### 内容组织

