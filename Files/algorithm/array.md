# 数组

在JavaScript中，数组是Object的一种形式。在数组类型上为一维数组。它是**最简单的内存数据结构**。
对于普通的一维数组作为JavaScript最基础的知识，不在此多做赘述。下面主要介绍的是JS没有的多维数组。

## 多维数组

在计算机和数学概念中，**矩阵**是一个重要的基础数学概念。在JS中对于矩阵的表现形式就是使用二维数组。
比如：某个气象站在工作日上午6个小时的温度表：

|   | 6点   | 7点   | 8点   | 9点  | 10点 | 11点 |
| :---: |:-----:| :---:| :---:|:---:|:---:|:---:|
| 星期一| 15°   | 18°   | 19°  | 20°  | 20°  |21°  |
| 星期二| 14°   | 15°   | 19°  | 21°  | 22°  |24°  |
| 星期三| 16°   | 17°   | 18°  | 20°  | 23°  |25°  |
| 星期四| 15°   | 16°   | 17°  | 18°  | 20°  |22°  |
| 星期五| 17°   | 18°   | 16°  | 17°  | 20°  |23°  |

* 第一步： 视整个表格为一个数组形式，设数组为`var tabel = []`;
* 第二步：如果是以`天`为排序时间单位，那么就可以将一维数组分为：`tabel[0]~tabel[4]`;二维数组为：`tabel[n] = [0,1...5]`。
如果以`小时`为时间单位排序，同理可得。
* 第三步：通过这样一个二维数组，我们便很快能够对矩阵中的某个一个点进行取值。比如星期四8点的气温为`tabel[3][2]`,即17°。

> 对于立体三维数据，同理可使用三维数组进行数据结构表示。

完整的数据结构如下：

```javascript
var table = [
    [15,18,19,20,20,21],
    [14,15,19,22,22,24],
    [16,17,18,20,23,25],
    [15,16,17,18,20,22],
    [17,18,16,17,20,23]
]
```

## 数组过滤

在数据过滤中，前端常见的工作就是奇数偶数的分离。通常的做法就是通过计算是否有余数进行奇偶判断。

> % 在数学中表示百分比，但是在计算机编程中表示`求某个数的余数`，如：`8%3`表示8除以3结果的余数为多少，而不是8除以3的结果。
> 在数学中，`2，4，6`在除以2的时候都为正整数，所以余数为0.

具体函数如下：

```javascript
var numbers = [1,2,3,4,5,6,7,8];
function isEven(arg){
   if(arg%2 === 0){
       return true;
   }else{
       return false;
   }
}
```

## 数组迭代

> **迭代** 是一个数学概念，它的目的在于通过一次次运算不断逼近目标结果的一种运算方式，它的每一次运算结果都是上一次运算的初始值。
> 在JavaScript的迭代运算方面。我们可以看到不同的运算方法。

### Array.every()

其特点在于每一次迭代的值为`true`才会进行下次运算，一旦为`false`运算即刻停止。

```javascript
var numbers = [2,4,7,8,10];
function isEven(arg){
   if(arg%2 === 0){
       console.log(arg)
       return true;
   }else{
        console.log(arg)
       return false;
   }
}
const result = numbers.every(isEven);
console.log(result)
```
粘贴代码，[点击运行代码](http://javascript.cs.lmu.edu/runner/ "title" target="_blank")

### Array.some()

与Array.every()恰恰相反，Array.some() 的特点在于迭代到`true`时，运算立即停止。
```javascript
var numbers = [1,3,5,8,9,11];
function isEven(arg){
   if(arg%2 === 0){
       console.log(arg)
       return true;
   }else{
        console.log(arg)
       return false;
   }
}
const result = numbers.some(isEven);
console.log(result)
```

粘贴代码，[点击运行代码](http://javascript.cs.lmu.edu/runner/ "title" target="_blank")

> 综上所述，可以看出**every在于找出数组中为值为false的元素，而some则是找出值为true的元素**。

### Array.map() 映射

> 映射字面意思为一一对应的意思。而map的作用在于，将数据进行转化。在这个新数组中，原本数组中的元素一一被映射成一个它们的值。

```javascript
var numbers = [1,3,5,8,9,11];
function isEven(arg){
   if(arg%2 === 0){
       return true;
   }else{
       return false;
   }
}
const newArray = numbers.map(isEven);
console.log(newArray)
```

粘贴代码，[点击运行代码](http://javascript.cs.lmu.edu/runner/ "title" target="_blank")

### Array.filter() 过滤

在实际编程过滤是最为常见的计算方式，在大量的数据中常常我们只希望获取自己想要的数据，filter()方法的作用在于只返回值为true的元素。

```javascript
var numbers = [1,3,5,8,9,11];
function isEven(arg){
   if(arg%2 === 0){
       return true;
   }else{
       return false;
   }
}
const newArray = numbers.filter(isEven);
console.log(newArray)
```
粘贴代码，[点击运行代码](http://javascript.cs.lmu.edu/runner/ "title" target="_blank")

### Array.reduce((previous,current,index)=>{}) 迭代累加

在上面介绍的四个数组方法，它们的输出值要么是数组中单个元素的值，要么就是整个数组的值。而reduce()方法则完全不同，
它的作用在于获取整个数组累加的总值。这在统计学运算中极为重要。reduce在英文中的意思为减小，似乎和其作用有歧义冲突。
实际reduce的意思是指在数组一次次迭代运算中，不断累加从而缩短数组长度的意思，直至数组长度为0.

比如：我们求取6天平均气温。

```javascript
var numbers = [16,18,20,24,21,21];
const total = numbers.reduce((pre,current,index)=>{
    return pre+current
});
console.log("气温总值："+total+"平均气温："+total/6);
```
粘贴代码，[点击运行代码](http://javascript.cs.lmu.edu/runner/ "title" target="_blank")

