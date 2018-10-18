## 竹纸 Bamboo Paper

As a open resource project, Bamboo Paper combines many popular technologies,which include react, webpack, less, express, Docker, Jenkins ,next.js and so on. Our target is to create a simply used business web app for small companies and personal developers.


## Upgrade Babel
```
npx babel-upgrade
```
## Local Development

```shell
yarn && yarn dev
```

## Local Production

```shell
yarn build
```

## Add Your Production Remote Branch

In your local repo
```shell
git remote add <remoteName> username@ipaddress:.gitpath 
```

## Publish to Production Server

```shell
git push production master
```

## 不足之处

1. 在性能优化上css文件为render-block resouces
2. 在资源加载通信协议上使用的是HTTP/1.1而非HTTP/2
3. 没有涉及Progressive Web App技术

## Snapshort Testing 快照测试

### 更新快照

```
yarn test --updateSnapshot
yarn test -u 
```

上面两个命令均可以对快照进行更新。