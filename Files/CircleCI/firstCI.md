## 添加.yml 文件

在Github中创建完成一个代码库之后，在Circle2.0版本中必须创建一个隐藏文件夹`.circleci`,在该文件夹下创建一个空白文件`config.yml`。

在文件中填入以下代码：

```yml
version: 2
jobs:
  build:
    docker:
      - image: circleci/ruby:2.4.1
    steps:
      - checkout
      - run: echo "A first hello"
```