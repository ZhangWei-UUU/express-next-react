# 栈

栈（Stack）作为计算机领域中常见的一个数据结构概念，在JS原生数据结构中是不存在的。以下就是一个栈的图形：

| n  | 
| :---:|
| ...| 
| 4| 
| 3| 
| 2|
| 1| 

对于栈这个数据结构而言，最顶层的n具有核心意义。因为所有的数据操作都是围绕其进行的。如：

* pop() 移除顶层元素
* push() 从顶层中添加元素
* peek() 返回输出顶层元素
* size() 栈的高度

由于JS原生没有Stack这个类，这就要求我们需要基于其近似数据类型："Array",来自定义Stack。

```javascript
class Stack{
    this.name = "stack";
    this.pop = () =>{

    };
    this.push = () =>{
        
    };
    this.peek = () =>{
        
    };
    this.size = () =>{
        
    }
};
// 注意在浏览器中由于暂不支持直接运行ES6语法。故可以将class写成以下：

function Stack(){
    this.name = "stack"
}

const stack = new Stack();
console.log(stack)

```
