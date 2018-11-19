# [Websocket](https://www.npmjs.com/package/websocket)

在了解websocket之前首先需要了解什么是`Internet Protocol Suite`和`Echo Protocol`.

**Echo Protocol** 是在RFC 862中定义Internet Protocol Suite的一种服务。它在设计初衷是用于网络测试和测量在不同IP直接的网络往返时间。

Echo Protocol在通信时使用的是服务器的固定端口7,并使用TCP或者UDP协议进行通信。

## 互联网协议套件 Internet protocol suite

Internet protocol suite 是一个概念性的模型，它是一系列用在互联网（或类似的电脑网络）上的通信协议的集合。TCP/IP协议广为人知，这是由于这一套协议中TCP和IP协议是基础协议。Internet protocol suite 又称为国防部模型（DoD Model）,这是由于其在发展的过程中都是由美国国防部资助的。

The Internet protocol suite 提供了端到端的数据通信定义，包括数据应该如何打包，寻址，传输，路径，接收。它们组成四个抽象层。

这些技术标准定义了The Internet protocol suite，这些组件协议由IETF组织来维护。The Internet protocol suite要早于OSI模型，后者成为历代网络系统的建立了更为复杂的参考框架。


### 早期研究

Internet protocol suite 上世纪69年代晚期由美国国防部高级研究项目局（DARPA）主导并最终研发出的科研成果。在1969年ARPANET网络协议诞生后，DARPA开始着力于大量的数字传输技术上。在1972年，Robert E. Kahn 加入 DARPA信息程序技术办公室，
他的工作主要在两个方面：1.satellite packet networks(卫星分组网络)；2. ground-based radio packet networks（地面无线电分组网络）。在工作中他意识到贯穿这二者之间通信的价值所在。在1973年春天，NCP协议的开发者Vinton Cerf联合Kahn 开始了开放架构的互联模型的工作上，为全球设计下一代协议。

在1973年夏天，Kahn and Cerf创造出基础性变革，他们用一种通用的互联网协议隐藏了不同本地网络协议之间的差异。而这项协议位于普通的主机，而非某个机构来确保其稳定可靠性。而在1974年TCP协议首次发布。

在最初的时候TCP只是用于管理数据报的传输和路由，而非一种协议。南加州大学的Jonathan Postel 教授完成了Request for Comments(RFCs)的编写，而路由器用于在不同的网络之间提供接口。

在1982年3月美国国防部宣布TCP/IP协议为美国军方计算机网络标准。在1989年6月伯克利大学决定将用于开发BSD UNIX的TCP/IP代码开源时，大量的IT技术供应商都将这份代码放置到自己TCP/IP栈中，微软在windows95中首次发布了原生TCP/IP栈。这一事件直接导致了TCP/IP协议全面碾压其他协议，成为互联网世界里的支配协议。

### 链路层
数据链路层是互联网协议中的最底层。它的工作范围是本地主机的网络连接，所谓的链路指的是连接TCP/IP协议，由于TCP/IP是一种独立于硬件之外的设计，因此，TCP/IP就可以在任何硬件之上进行工作。

链路层用于在互联网中不同的主机之间使用相同的连接，并传输packets.在一个既定的链接上，传输过程和接收包既可以通过网卡的设备驱动软件进行控制，也可以通过硬件或专业芯片进行控制。我们可以通过添加packet header用于传输准备，之后通过物理介质进行实质传输。TCP/IP模型包含了翻译网络寻址方式（如：MAC地址）的翻译规范。与此同时，在链路层中还可以选择虚拟网络或其他网络隧道进行数据发送。在这种情况下链路层的数据就会被视为应用数据，通过其他的IP栈进行传输和接收。

TCP/IP模型中链路层对应的是OSI模式中的物理层和数据链路层。

### 应用层

应用层包含了HTTP,FTP,SMTP,DHCP协议，数据会根据这些应用层协议进行编码，然后封装到传输层的协议单元（如：TCP，UDP message）中, 然后继续向下层协议封装传输。TCP/IP模式并不关心格式化的规范和数据的呈现，在应用层和传输层之间也不存在像OSI模型中有多余的presentation和session层。

尽管应用一方知道传输层的质量非常重要，比如终端的IP地址和端口号，但一般情况下应用层协议会将传输层协议视为黑盒，该黑盒会提供稳定的网络连接。应用层协议会协同client-server 应用相配合，并使用一些广为人知的保留端口号，比如：超文本传输协议会使用80端口，Telnet则使用23端口。

TCP/IP协议分为用户协议和支持协议。支持协议是面向系统服务，而用户协议则是面向用户使用的应用软件，比如：FTP就是用户协议，而DNS就是系统协议。

一般情况下自传输层以下的所有层都不会关心应用层协议的具体细节，路由和交换机都不会检查封装的流量，只负责提供流通管道。但是作为防火墙和带宽控制应用则必须要解析应用数据，最为典型的就是Resource Reservation Protocol (RSVP)，它会利用网络地址转换器（NAT）来遍历应用负荷。

在TCP/IP模型中`应用层`可对应OSI模型中session层+presentation层+application层的结合。

### 传输层

在传输层会构建基础的数据隧道，各个应用会使用这些隧道进行特定任务（task-specific）的数据交换。传输层构建了host-to-host的连接。这意味着它提供端到端的消息传输服务，这些服务独立于用户数据的结构和为任何特定目的交换信息并且独立于底层网络的后勤。

为了给应用提供特定程序的传输隧道，传输建立了网络端口这一概念。所谓端口就是一个逻辑编号结构，它会分配给一个应用所需的通信通道。对于许多类型的服务，这些端口号已经被标准化，这样客户端可以寻址到服务器服务。

User Datagram Protocol 也称UDP协议是一种无连接电报协议，类似IP它是不可靠的.UDP最常用于流媒体中，在流媒体中及时传输比可靠性更为重要。具体请查看到[实时传输协议 RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol)
