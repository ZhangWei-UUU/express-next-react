# NEXT7

## Babel7

在Next 6中虽然也引用了Babel7，但是仅仅是beta版本。在next7中现在引入了正式版。

对于next7在Babel方面的改进有：

* 引入对Typescript的支持，增加了插件`@zeit/next-typescript`
* 增加了对`<>`语法的支持
* 在配置文件上增加了`babel.config.js`
* `overrides`属性可以应用于子文件

> 在升级上对于babel相关的preset/plugin应当随之升级至最新版，可以使用`babel-upgrade`进行升级

现在只需在`.babelrc`写成

```javascript
{
  "presets": ["next/babel"]
}
```

有关[Babel7](https://babeljs.io/blog/2018/08/27/7.0.0)的更新，后面的内容会进行详细介绍。

## Webpack4

这是一个至关重要的一点，由于Next6使用的是Webpack2，所以在升级以后必然遇到各种bugs.

对于next7来说这方面的新特性有：

* 支持`.mjs`类型文件
* 代码分割改善
* `WebAssembly`的支持

> NEXT升级之后`next.config.js`中所使用的loaders和plugins全部都要进行升级。

## CSS的导入

不同于之前的版本，Next7的CSS导入全部由[mini-extract-css-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)进行打包。

开发者可以在任意组件和页面中动态导入css文件，不再需要`_document.js`.
当然前提是在`next.config.js`中设置：

```javascript
const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */})
```

less,sass以此类推。







