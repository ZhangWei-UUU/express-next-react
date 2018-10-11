# Less

less全局命令称为`lessc`,通过`npm install less -g`进行安装。

但是，如果我们的前端开发是基于Node环境进行开发，则推荐使用在本地开发环境中进行安装。

```
npm i less --save-dev
```

将`.less`文件转换成`.css`文件：

```
lessc xxx.less xxx.css
```

## Less 的特质

比起传统的CSS，Less又多出了哪些特点呢？

### 变量概念

在传统的css中，所有的数值都是写死的，所以css往往并不视作一种编程语言。而less则引入变量概念。

通过使用`@`符号，在声明了变量后可以极大的提高编程效率。

```less
@a-color: #red;
@a-color-hover: darken(@a-color,10%);

a {
    color:@a-color
}

a:hover {
    color:@a-color-hover
}
```

less不仅可以对样式表的对象值进行变量赋值，同时也可以声明class name,

```less
@test: banner 

.{@test}{
    width:100%,
    height:200px
}
```

在url 引用方面 less同样如此：

```less
@imageroute: "/static/images";
body {
    background:url("@{imageroute}/xx.jpg")
}
```

如果我们写了多个less文件，在使用的时候又希望引用则使用`@import`.

```less
@import "./theme.less"
```

在一个元素有多个交互或者形态时，css的编写十分麻烦：

```less
.btn {
  
}

.btn:hover {
  
}

.btn-primary {
  
}

.btn-warning {
  
}
```

而less只需要使用`&`符号就可以简洁编写

```less
.btn {
    color: #fff;
    &:hover {
        color:#000;
    }
    &-primary {
        color:blue;
    }
    &-warning {
        color:orange;
    }
}
```