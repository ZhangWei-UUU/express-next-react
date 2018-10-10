# JS文件的加载优化

在使用next.js或者其他类似的react.js前端框架编程的时候，如果不对js文件的加载进行优化很容易就会导致在加载js的时候，不管哪个页面都会被全部加载导致不必须要的带宽消耗以致页面加载的缓慢。z

> 原则上最大的js包不超过100kb,而图片则需要压缩到10kb.css文件不得超过10kb.

第一步:`ctr+shift+n`开启chrome无痕模式，查看在网络加载中哪些js文件会被加载。
第二步:`pages/_document.js`文件将全局引入的js文件逐个移到其引用的页面中。 

案例分析：

![img](/static/images/source-load.png)

在上图中可以发现阻碍带宽问题的首要祸首就alicdn文字的加载，这是一种很常见的在引用第三方包的时候，如icon等。由于第三方CDN的问题导致的网速问题。解决这个问题首先就需要将引用的第三方包文字进行本地化。

1. 进入`node_modules/antd/lib/antd.css`将https请求的文字全部注释，不使用antd文字。
2. 将antd.css文件本地化，仅仅使用antd.js。在`next.config.js`中删除对扩展css的引用，然后将下载好的`antd.css`作为静态资源引用,将antdicon的文字替换掉。