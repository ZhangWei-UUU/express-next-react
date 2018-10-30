# next.js样式加载

less文件的加载

next.js使用`@zeit/next-less`插件加载less文件，样式表会被编译到`.next/static/css`文件夹中。

在使用`@zeit/next-less`插件的时候，我需要注意的是在加载过程中是否和css文件混合使用如果是的话，需要在`next.config.js`文件中进行配置：

```javascript
const withLess = require("@zeit/next-less");
module.exports = withLess({
    cssModules:true
})
```

之后只要创建任何.css文件，便可正常使用。