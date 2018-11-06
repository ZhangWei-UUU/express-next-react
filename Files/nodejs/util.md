# Util

`util`模块是node.js非常初级的模块，最初设计的目的在于支持Node.js内部的APIs, 但是如今越来越多应用在模块开发上。

## util.types

`util.types`针对不同的内置对象可以进行类型判断。在类型判断上，常用的还有`instanceof`和`Object.prototype.toString.call(value)`. 但是与这两者不同，`util.types`检查都不会检查对象的属性,而直接调用C++接口。

下面一个案例可以看出这个三个方式的不同：

```javascript
var data = [1,2,3,4];
var func = () => {
    console.log("Test")
}
const set = new Set([1, 2, 3, 4, 5]);

var isObjectInstance = data instanceof Object;
var isArrayInstance = data instanceof Array;
// 输入结果为： true,true;

const setObjectPrototype = Object.prototype.toString.call(set);
const funcObjectPrototype = Object.prototype.toString.call(func);
const dataObjectPrototype = Object.prototype.toString.call(data);
// 输出结果：[object set]、[object functionn]、[object array]

```
