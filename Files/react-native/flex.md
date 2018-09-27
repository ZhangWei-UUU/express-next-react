## React Native 布局浅说

不同于web开发使用CSS 样式表对页面进行布局，React Native 使用Flexbox算法进行组件的布局以适应移动设备不同的屏幕的大小。其中`flexDirection`,`alignItems`,`justifyContent`是三个最为常用的属性。

> 注意：在默认情况下flexDirection其值为`column`而不是`row`,而`flex`属性只接收单一number值。

下面会逐一介绍以下三个主要属性的使用：

* flexDirection
* alignItems
* justifyContent

### Flex Direction

```js
 <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50}}></View>
  </View>      
```