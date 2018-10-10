# JS文件的加载优化

在使用next.js或者其他类似的react.js前端框架编程的时候，如果不对js文件的加载进行优化很容易就会导致在加载js的时候，不管哪个页面都会被全部加载导致不必须要的带宽消耗以致页面加载的缓慢。z

> 原则上最大的js包不超过100kb,而图片则需要压缩到10kb.css文件不得超过10kb. 在所有文件加载后这个页面大小尽可能超过1.5M，可以通过3G网络测试开发速度。在正常环境中，DOM的加载应保持在3秒.

第一步:`ctr+shift+n`开启chrome无痕模式，查看在网络加载中哪些js文件会被加载。
第二步:`pages/_document.js`文件将全局引入的js文件逐个移到其引用的页面中。 

案例分析：

![img](/static/images/source-load.png)

在上图中可以发现阻碍带宽问题的首要祸首就alicdn文字的加载，这是一种很常见的在引用第三方包的时候，如icon等。由于第三方CDN的问题导致的网速问题。解决这个问题首先就需要将引用的第三方包文字进行本地化。

1. 进入`node_modules/antd/lib/antd.css`将https请求的文字全部注释，不使用antd文字。
2. 将antd.css文件本地化，仅仅使用antd.js。在`next.config.js`中删除对扩展css的引用，然后将下载好的`antd.css`作为静态资源引用,将antdicon的文字替换掉。

## Antd CSS样式按需加载

在使用`.babelrc`导入antd的时候有三种方式：

```json
["import", { "libraryName": "antd" }] //仅仅导入js包
["import", { "libraryName": "antd","style":"css" }] //仅仅导入js和css包
["import", { "libraryName": "antd","style":true }] //仅仅导入js包和less包sass包
```
## Next.js 动态导入大文件包

```javascript
import dynamic from 'next/dynamic';
const DynamicComponentWithCustomLoading = dynamic(() => import('../components/hello2'), {
 ssr: false
})
```

> 避免使用到如Echarts这样的重型包，删除后可减少720kb.

## 压缩next.js的js包

在使用<Link>情况下next.js会在首页加载所有其他相关页面的js, 如果内部页面是一些重型软件那么就会导致多个大型js会傻乎乎的加载进首页导致首屏渲染出现不必要的负担。

比如在使用Echarts的时候，其压缩后的代码会有720kb,如果这样的包裹出现在首页显然是有很大的问题。所以尽可能避免使用<Link>中prefetch属性。

> 通过上述的优化之后，首屏渲染的加载内容已经减小到984kb,DOM加载的速度已经压缩到4.15秒,整个加载速度为7.57秒。很显然这在性能展示方面是远远不够的，通过Chrome Audits的检测style.css中大量的无用样式、没有优化格式的图片、以及没有压缩的js文件包是阻塞网页渲染的主要三大问题。



