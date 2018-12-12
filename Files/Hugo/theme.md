# 主题

Theme是用于快速创建一个网站的工具，在社区中Theme拥有完备的[Demo市场](https://themes.gohugo.io/)。它的本质是Go语言的模块库，它的设计初衷是用于减少代码量并有利于快速自定义一个网站。

我既可以现在全部的主题，也可以下载某个单一主题。[主题库链接](https://github.com/gohugoio/hugoThemes)

```
git clone --depth 1 --recursive https://github.com/gohugoio/hugoThemes.git themes
```

如果是下载单一主题，首先cd到子目录`theme`中.

```
git clone THEME_URL
```

## 使用主题

在使用主题上，有两种方式：1. 在配置文件中指定主题； 2. 通过命令行的形式选择主题。

```
hugo -t themename
hugo server -t themename
```