# Hugo 模板

Hugo使用的是Go语言中`html/template`和`text/template`库作为模板的基础。
有关于go语言的模板语法请[点击详情](https://golang.org/pkg/html/template/)

它与普通的HTML的区别就是在文件中添加了`变量`和`函数`两个概念。而他们都在`{{ }}`中编程。

## 变量

变量分为`自定义变量`和`Page级变量`,如果是`Page级变量`则写成`{{.Title}}`,如果是自定义变量则写成`{{$person}}`

## 组件化

一般我会将一些公共页面组件写在`layouts`组件中，假如我们写一个header组件：
`layouts/partials/header.html `, 引入的时候就可以这样写：

```
{{ partial "header.html" . }}
```

[未完待续](https://gohugo.io/templates/introduction/)