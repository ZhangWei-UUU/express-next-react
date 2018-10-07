# 网络通信

网络通信是计算机技术中极其基础的知识，掌握网络通信的原理有助于更好的理解上层应用以及处理各类通信问题。本文将通过文字及GIF动画等形式展示各类通信协议。

在了解网络分层模型之前，首先要了解一下上世纪70年代末诞生的 **Open System Interconnection model**.

### Physical Layer 物理层

我们肉眼能看见的物理设备如蓝牙、无线路由器、光纤接口、USB接口所使用的规格，用于处理电压、信号的时序、以及其他物理介质。

### Data Link Layer 数据链路层

Data Link layer 提供了物理设备之间P2P的数据传输通道。用于建立和拆除两个点对点之间的连接协议。其传输的单位为 **`帧`**。我们现在互联网所使用的Data Link layer标准为IEEE 802, 生活中常见的无线WiFi协议和有线以太网协议就是基于此。在IEEE 802下有两个子层：

  * MAC Medium access control
  * LLC Logical link control

### Network Layer 网络层

网络层提供一种数据序列（packets）将数据分片段由一个节点传到另一个节点，在到达终点后重新组装。网络层在通信过程中并不可靠，其可靠性需要上一层传输层进行保障。

### Transport Layer 传输层

传输层通过 flow control, segmentation/desegmentation, and error control 可以保障通信过程中的可靠性。它可以跟踪数据传输过程中状态，一旦出现错误可以要求发起方重新发送数据（常见协议如TCP）。

### Session Layer 会话层
它建立，管理和终止本地和远程应用程序之间的连接。

### Presentation  Layer 表示层

又称为语法层，常用于数据加密、压缩、翻译。HTTPS的Security就是在这一层实现。

### Application  Layer 应用层

对于普通用户和软件开发者最为常见的一层，无论是我们看到的各类网络APP，还是开发者使用的API接口都是在这一层上实现。但是这一层对于网络协议学习者来说极其重要，因为 **大多数的通信协议都是在这一层上，如：HTTP,HTTPS,SMTP,IMAP,FTP,SSH，DNS,TLS/SSL等等**。

| 应用层   | 传输层 | 网络层| 数据链路层 |
| :------:|:-----:| :---:| :-------:|
| HTTP    | TCP   | IP   | MAC      | 
| HTTPS   | UDP   |      |   ARP    |       
| SMTP    | DCCP  |      |          |         
| IMAP    | SCTP  |      |          |     
| DNS     | RSVP  |      |          |        
| FTP     |       |      |          |        
| TLS/SSL |       |      |          |        
| POP     |       |      |          |      
| SSH     |       |      |          |   

## 网络分层

比起Open System Interconnection model 网络分层模型的区别在于将上三层合并为Application Layer. 下面使用一个例子描述一个字符串在被发送过程中在各个层级中的过程。

在应用层发起HTTPS请求到服务器后，字符串会在表示层进行加密处理，通过会话层与服务器建立连接。传输层的TCP协议会在传输过程中不断检测是否安全，而网络层的IP协议会找到服务器所在的IP地址，将packets一个个发出去。在抵达数据链路层的时候，假设使用的是家用wifi,数据通过无线WiFi抵达路由器后，会根据IEEE 802进行编译，编译成物理电压在物理层由光纤发送出去。

## [Handshaking 握手](https://en.wikipedia.org/wiki/Handshaking)

通俗定义的说，就是在网络正式通信之前的一次端对端的通信协商。

