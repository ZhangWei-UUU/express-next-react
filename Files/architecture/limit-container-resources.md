# [限制容器资源](https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details)

通过`docker info`可以查询物理机上Docker的全局信息。

## 内存
### 了解内存泄漏的危险

在Linux物理机上，当Linux kernel检测到物理机内存不足够时，会抛出`OOME`或`Out of Memory Exception`,之后杀死进程释放内存。包括Docker，一切格杀勿论。


比如你只有一个CPU, 如果限制某个容器最多只能使用50%的CPU:

```bash
docker run -it --cpus=".5" ubuntu /bin/bash
```