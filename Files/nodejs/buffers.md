# Buffer的数据处理

## 简单的字符处理

JavaScript有一个天生缺陷，对于"原始的内存数据",需要从内存拿到buffer类型中进行处理。而对于二进制数据尤其如此。

通常如果我们使用nodejs核心包fs进行文件读取的时候，如果没有指定参数是某种数据类型，那么返回的数据一律为buffer类型，也就是16进制的编码。

下面这个小案例就是如何在buffer转码过程中如何提升转码性能的操作：

在通常情况下，如果我们读取一个文件在返回给客户端的时候，我们需要转换成人类能够读懂的UTF-8编码。通常的做法有两种：1. 在fs.readFile()中添加`utf-8`参数指明输出编码格式，2. 在回调函数输出buffer之后，通过`toString()`方法转换成UTF-8.

```test.txt
Zhangwei is a funning man.
```

```javascript
fs.readFile('./test.txt',(err,buf)=>{
    if(!err){
        buf.toString()
    }
})
```

很明显在`test.txt`文件中的内容都是`ASCII`纯文本字符，如果我们传入指定参数就会提高计算机转换性能。

```javascript
fs.readFile('./test.txt',(err,buf)=>{
    if(!err){
        buf.toString('ascii')
    }
})
```

当然如果遇到其他格式的如：常用的Hex,base64格式的都可以使用同样的操作。

## 对于Base64格式的验证处理

比如常用的验证身份的方式，将用户名和密码合并为一个字符串，将字符串保存在一个Buffer中，然后再转换成base64格式。这个时候我们很容易让这个base64格式的数据以二维码的方式发送出去.

```javascript
var user = "wang";
var pass = "123";
var authstring = user + pass;

var buf = Buffer.from(authstring);
var QRcode = buf.toString("base64");
console.log(QRcode);
```

## 通过将图片文件转换成Base64格式编码，以URI形式发送给前端浏览器

在和前端交互的时候，通常我们在图片文件的交互的时候都是通过URI进行交互，URI通常分为三个段落：

```js
   const MIME = 'image/png';
   const ENCODING = 'base64';
   var base64data = fs.readFileSync('./blabla.png','base64');
  `data:${MIME};${ENCODING},${base64data}`
```

那么同样的面对上传的图片文件需要写入磁盘的时候，也是可以通过buffer反向转换写入。

## 处理原始的二进制数据。

对于普通的web开发人员来说几乎很少碰到直接处理二进制原始文件的问题，但是对于一个后端程序员而言，解析二进制文件尤其是数据库存储的二进制文件，是非常常见的工作。在学习本章之前最好先学习二进制文件的相关内容和协议规范，并对网络协议设计、掩码、二进制数据压缩有基本的了解。

本章所选取的二进制文件格式为.dbf数据库文件，因为对于后端而言将二进制数据库文件解析为JSON文件是基本的工作内容。