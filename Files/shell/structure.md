# 结构化编程语句

与很多编程语言`if...else`所不同的是，shell脚本语言最基本的结构化命令是`if-then-fi`/`if-then-else-fi`结构。在这里`fi`是finally的意思，表示if-then结构在此结束。

* if-then-fi
* if-then-else-fi
* if-then-elif-then-fi

## 数值比较

在Shell脚本编程中对于数值的比较不同于其他编程语言使用数学符号，而是使用linux符号，如：

* 等于 -eq
* 不等于 -ne 
* 大于 -gt 
* 小于 -lt 

> 这里的gt全称为greater than lt全称为less than。 

而在字符串类型的值比较中则类似其他编程语言，如：

* 等于 string1 = string2
* 不等于 string1 != string2
* 大于小于 > <

