# [JavaScript 内置对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

Object Function Boolean Symbol Error EvalError InternalError RangeError 
ReferenceError SyntaxError TypeError URIError.


Math Number Date

## Math

```javascript
// base基数，exponent指数
Math.pow(base,exponent);
const result = Math.pow(4,3);
// 输出64

Math.ceil(any);
//可以输入任意值，如果any为整数则返回整数，如果为非整数，则基于any往前进一位整数。
```

Infinity

## Error 系列

在Error系列，众多的Error经常性出现在各个模块中，一旦对代码检验失败，就会立马抛出。这些错误一般会和try catch 一起使用，报错后抛出。

### 语法检查 SyntaxError
```javascript
var func = () =>{
    return "123"
};

try{
   var result = func();
   if(result instanceof Number){
       return true;
   }else{
        throw new SyntaxError("返回值语法错误")
   }
}catch(e){
      console.log(e)
}
```

### 数值检查 RangeError

```javascript
const mix = (first,second) =>{
  if(first<0 || first>10000 || second>10000 || second<0){
    throw new RangeError("请输入大于0小于10000的数值");
  }else{
    return first+second;
  }
};

console.log(mix(-1,100));
```

## 原始数据

对于计算机原始通用的、且固定长度的二进制数据buffer, JS有`ArrayBuffer`这种原生内置对象。