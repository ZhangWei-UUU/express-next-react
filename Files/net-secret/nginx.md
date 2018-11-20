# Nginx的反向代理和负载均衡

在大规模的企业级应用中，无论是对于物理机服务器集群管理还是对于Docker集群管理，通常为了安全起见在运维管理上都会遵循一个原则：**不允许客户端直接访问集群服务器，只允许第三方服务器转接**，这样的好处在于避免将有重要信息的集群服务器直接暴露在公网，在众多网络服务中客户端并不知道每一条信息的处理来自哪个服务器。而这样的机制就是反向代理。

> 反向代理在一定程度上减小了服务器遭受网络攻击的风险，为了妥善起见通常还会给Nginx申请添加SSL证书。

在Nginx中使用`server`模块中的`location`:`proxy_pass`属性进行反向代理。

## 负载均衡

在大规模用户的应用场景中，为了解决负载过大的问题，一般会准备了诸多服务器，通过第三方服务器进行筛选选择压力最小的服务器为当前用户进行服务。在Nginx中使用的是`upstream`模块，在该模块中添加多个服务器地址。