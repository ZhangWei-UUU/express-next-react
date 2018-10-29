# 各种网络

在网络分层中，网络被分为物理层、数据链路层、传输层、网络层、应用层。对于软件工程来说可以不需要关注物理层、数据链路层。而对于传输层来说，由于IP协议和ICMP协议已经比较稳定，所以一般情况下不做太多深入的讨论，一般默认数据由IP协议进行传输。所以软件开发一般会从关注网络层和应用层的网络通信。

在NodeJS中对于TCP协议和UDP协议依赖于两个基础包：`net`网络包和`dgram`数据报包。

在创建TCP服务器直接`net.createServer()`；而创建UDP服务器需要`dgram.createSocket('udp4/6')`;

由于TCP协议在常规的web开发中经常使用并比较简单在这里不做赘述，下面主要讲的是UDP通信：

## UDP


## HTTPS

在NodeJS 中 HTTPS的基础模块是`tls`,它会让HTTP/TCP 在通信过程中通过TLS/SSL,所谓TLS/SSL就是一个公私钥的系统PKI,也就是说在客户端和服务端都有私钥。

假设我们使用的是openSSL生成2048位的RSA私钥：

```
openssl genrsa -out ryans-key.pem 2048
```

在这里`ryans-key.pem`就是一个私钥，后面的案例中会经常使用这把私钥。

在TLS/SSL体系中，所有的服务器都必需要有证书，当然少数客户端也可能要证书。所谓证书就是公钥。第一步就是证书，然后创建CSR文件。

> CSR文件全称 Certificate Signing Request File。它的本质是一个Message，它包含了公钥信息、身份识别信息、数字签名、域名等等，会由应用端发送到证书颁发地方(或者进行所谓应用端自签名)，然后申请到数字身份证。

如：
```
openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem
```

这个`ryanse-csr.pem`就是CSR文件。

假设我们使用的是自签名:

```
openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
```

以`ryans-csr.pem`CSR文件为载体，用`ryanse-key.pem`私钥自签名生成数字身份证`ryans-cert.pem`.

```
// -in 就是指后面的是已签名的数字身份证
openssl pkcs12 -export -in ryans-cert.pem -inkey ryans-key.pem \
      -certfile ca-cert.pem -out ryans.pfx
```

这样用`ryanse-cert.pem`数字身份证生成`ryans.pfx`文件。