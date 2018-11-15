# [Websocket](https://www.npmjs.com/package/websocket)

在了解websocket之前首先需要了解什么是`Internet Protocol Suite`和`Echo Protocol`.

**Echo Protocol** 是在RFC 862中定义Internet Protocol Suite的一种服务。它在设计初衷是用于网络测试和测量在不同IP直接的网络往返时间。

Echo Protocol在通信时使用的是服务器的固定端口7,并使用TCP或者UDP协议进行通信。

## 互联网协议套件 Internet protocol suite

Internet protocol suite 是一个概念性的模型，它是一系列用在互联网（或类似的电脑网络）上的通信协议的集合。TCP/IP协议广为人知，这是由于这一套协议中TCP和IP协议是基础协议。Internet protocol suite 又称为国防部模型（DoD Model）,这是由于其在发展的过程中都是由美国国防部资助的。

The Internet protocol suite provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. This functionality is organized into four abstraction layers, which classify all related protocols according to the scope of networking involved.From lowest to highest, the layers are the link layer, containing communication methods for data that remains within a single network segment (link); the internet layer, providing internetworking between independent networks; the transport layer, handling host-to-host communication; and the application layer, providing process-to-process data exchange for applications.

Technical standards specifying the Internet protocol suite and many of its constituent protocols are maintained by the Internet Engineering Task Force (IETF). The Internet protocol suite predates the OSI model, a more comprehensive reference framework for general networking systems.

### 早期研究

Internet protocol suite 上世纪69年代晚期由美国国防部高级研究项目局（DARPA）主导并最终研发出的科研成果。在1969年ARPANET网络协议诞生后，DARPA开始着力于大量的数字传输技术上。在1972年，Robert E. Kahn 加入 DARPA信息程序技术办公室，
他的工作主要在两个方面：1.satellite packet networks(卫星分组网络)；2. ground-based radio packet networks（地面无线电分组网络）。在工作中他意识到贯穿这二者之间通信的价值所在。在1973年春天，NCP协议的开发者Vinton Cerf联合Kahn 开始了开放架构的互联模型的工作上，为全球设计下一代协议。

在1973年夏天，
By the summer of 1973, Kahn and Cerf had worked out a fundamental reformulation, in which the differences between local network protocols were hidden by using a common internetwork protocol, and, instead of the network being responsible for reliability, as in the ARPANET, this function was delegated to the hosts. Cerf credits Hubert Zimmermann and Louis Pouzin, designer of the CYCLADES network, with important influences on this design. The protocol was implemented as the Transmission Control Program, first published in 1974.[4]


### 数据链路层

The link layer has the networking scope of the local network connection to which a host is attached. This regime is called the link in TCP/IP literature. It is the lowest component layer of the Internet protocols, as TCP/IP is designed to be hardware independent. As a result, TCP/IP may be implemented on top of virtually any hardware networking technology.

The link layer is used to move packets between the Internet layer interfaces of two different hosts on the same link. The processes of transmitting and receiving packets on a given link can be controlled both in the software device driver for the network card, as well as on firmware or specialized chipsets. These perform data link functions such as adding a packet header to prepare it for transmission, then actually transmit the frame over a physical medium. The TCP/IP model includes specifications of translating the network addressing methods used in the Internet Protocol to link layer addresses, such as Media Access Control (MAC) addresses. All other aspects below that level, however, are implicitly assumed to exist in the link layer, but are not explicitly defined.

This is also the layer where packets may be selected to be sent over a virtual private network or other networking tunnel. In this scenario, the link layer data may be considered application data which traverses another instantiation of the IP stack for transmission or reception over another IP connection. Such a connection, or virtual link, may be established with a transport protocol or even an application scope protocol that serves as a tunnel in the link layer of the protocol stack. Thus, the TCP/IP model does not dictate a strict hierarchical encapsulation sequence.

The TCP/IP model's link layer corresponds to the Open Systems Interconnection (OSI) model physical and data link layers, layers one and two of the OSI model.

### 应用层

应用层包含了HTTP,FTP,SMTP,DHCP协议，数据会根据这些应用层协议进行编码，然后封装到传输层的协议单元（如：TCP，UDP message）中, 然后继续向下层协议封装传输。

The TCP/IP model does not consider the specifics of formatting and presenting data, and does not define additional layers between the application and transport layers as in the OSI model (presentation and session layers). Such functions are the realm of libraries and application programming interfaces.

Application layer protocols generally treat the transport layer (and lower) protocols as black boxes which provide a stable network connection across which to communicate, although the applications are usually aware of key qualities of the transport layer connection such as the end point IP addresses and port numbers. Application layer protocols are often associated with particular client-server applications, and common services have well-known port numbers reserved by the Internet Assigned Numbers Authority (IANA). For example, the HyperText Transfer Protocol uses server port 80 and Telnet uses server port 23. Clients connecting to a service usually use ephemeral ports, i.e., port numbers assigned only for the duration of the transaction at random or from a specific range configured in the application.

The transport layer and lower-level layers are unconcerned with the specifics of application layer protocols. Routers and switches do not typically examine the encapsulated traffic, rather they just provide a conduit for it. However, some firewall and bandwidth throttling applications must interpret application data. An example is the Resource Reservation Protocol (RSVP). It is also sometimes necessary for network address translator (NAT) traversal to consider the application payload.

The application layer in the TCP/IP model is often compared as equivalent to a combination of the fifth (Session), sixth (Presentation), and the seventh (Application) layers of the Open Systems Interconnection (OSI) model.

Furthermore, the TCP/IP reference model distinguishes between user protocols and support protocols.[28] Support protocols provide services to a system. User protocols are used for actual user applications. For example, FTP is a user protocol and DNS is a support protocol.