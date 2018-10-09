# Shell脚本的编写

Shell脚本在Linux服务器运维方面有着举足轻重的地位，比如在读取本机环境变量用户自定义变量方面。下面我们将举出多个例子来展示Shell脚本的使用。

### 读取本机环境变量

```bash
#!/bin/bash
echo "The current user is $USER"
```

### 自定义变量

与Java、js等编程语言不同，shell脚本的变量在声明是没有任何限制要求直接通过单词赋值即可。

```bash
#!/bin/bash
user1="zhangwei"
age=10
echo "This is $user1, he is $age"
```

### 脚本内容的导入与导出

当我们在执行shell脚本的时候并不是所有的echo内容都会要求显示在shell终端上，很多时候我们需要将其永久化在某个文件中，比如日志就是其中之一。

```shell
./somescript > targetfile
# 此时somescript中的echo输出就会导入到targetfile文件中，注意：多次执行会覆盖。
```

## Pipeline 管道概念

## 使用$[]进行数学运算

```bash
#!/bin/bash
var1=9
var2=4
var3=8
result=$[var1*(var2+var3)]
echo $result
```
