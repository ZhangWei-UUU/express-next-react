# CSS文件的加载优化

为了减少不必要的带宽消耗，在CSS样式引入上，除非是极个别的样式需要全局引入，大部分的CSS样式原则上遵循单页单CSS引入原则。

```javascript
<Head>
  <link rel="stylesheet" href="/_next/static/yourPage.css" />
</Head>
```