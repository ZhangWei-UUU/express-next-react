# CSS文件的加载优化

为了减少不必要的带宽消耗，在CSS样式引入上，除非是极个别的样式需要全局引入，大部分的CSS样式原则上遵循单页单CSS引入原则。
在默认情况下，无论怎样只要import了某个css文件，这个css文件最后都打包到style.css文件中。
```javascript
<Head>
  <link rel="stylesheet" href="/_next/static/yourPage.css" />
</Head>
```