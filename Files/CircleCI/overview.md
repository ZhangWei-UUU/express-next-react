本文会向大家简短地介绍什么是持续化集成和Circle CI如何实现工程团队的自动化工作。

## Cicle CI

Cicle CI 旨在帮助技术驱动型团队在生产过程完成智能自动化工程建设。它可以支持任何流行性系统，
并能达到企业级服务。

![](https://circleci.com/docs/assets/img/docs/arch.png)

首先我们将我们在Github上的项目授权并添加进cicleci.com中，每一次代码的改变都会在一个干净的容器中触发测试。之后Circle CI会将成功或失败的结果完整地以邮件形式通知开发人员。在详情页面中可以查看代码测试的覆盖率。

## 什么是持续化集成