# Docker 网络管理

Docker的containers和services之所以强大，不仅是因为它们自己可以互相连接，也可以连接到non-Docker workloads上。 它并不关心与它相连的节点是否属于Docker体系。

## 网络驱动

Docker的网络子系统具有插件性，通过使用不同的驱动展现不同的能力：

* `bridge`: 默认container所使用的网络驱动，也是这篇文章的重点。

* `host`: 也就是物理机的网络，使用host驱动会拿掉各个container之间的隔离，直接公用物理机的网络。

* `overlay`: 也就是说在集群服务和多个container daemons之间建立一个更大范围的网络。

* `macvlan`:可以为每一个容器分配一个MAC 地址。在网络上作为物理设备显示。

* `none`:

## 使用Bridge网络

### 默认bridge 和 user-defined bridges

**user-defined提供更好的隔离性和交互性**


### 管理用户定义的bridge

```bash
docker network create my-net
```

上面这段命令行，用户就可以自定义一个叫my-net的bridge网络.

#### 将一个container连接到user-defined bridge

在创建container的时候可以通过添加 `--network` flag 定义该容器所使用的网络，比如在下面的命令行中：

```
docker create --name xxxx --network my-net --publish 8080:80 nginx:latest
```

如果container已经创建好:

```
docker network connect <网络名称> <容器名称>
```

## 使用Overlay网络

## 使用Host网络

如果在container中使用host网络， 这种情况下要注意
**Container的网络栈就没有与Docker host进行隔离**。比如，如果你将某个container绑定到80端口并使用host网络。 该container应用就会使用物理机的80端口和物理机的IP地址。

