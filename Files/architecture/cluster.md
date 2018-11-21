# 集群服务

在一个大型服务中，往往由一个client端去调用不同的服务接口，这就需要一个服务集群。在嘉竹文库中我们所使用的就是Docker集群。也就是在主服务之外，我们添加了多个附加服务如：邮件服务、Websocket即时通信服务等。

## 邮件服务

在谈论邮件服务之前，我们先得了解什么是SMTP，Simple Mail Transfer Protocol。 该协议诞生于1982年的`RFC821`文件中.并在2008年`RFC 5321`进行了更新扩展。在实际应用中。STMP只用于发送邮件，而在检索邮件方面，客户端应用往往是由[IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)或者[POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol).

在不同的邮件服务器之间STMP协议使用的是25端口。而通常邮件客户端又会将提交出的邮件放在587端口上。

### 邮件服务历史

早在上个世纪60年代，世界上就已经有着各式各样的`一对一的电子邮件格式`，人们在各种标准中传输电邮，比如在美国政府中的AEPANET网络中就有着大规模的应用，而SMTP协议就在1970年代在这些标准中脱颖而出。

在1981年11月Postel在`RFC788`中首次提出SMTP.

Sendmail与4.1cBSD一起诞生，它是最早应用于SMTP的邮件中继之一。 在BSD作为操作系统称霸互联网时代，SendMail变成了最流行的MTA(Mail Transfer Agent). 其他流行的SMTP server 程序包含：Microsoft Exchange Server，qmail