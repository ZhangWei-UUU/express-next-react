# 竹纸产品设计文档

竹纸作为一款开源公益性产品在整个技术选型和架构上做了专业严格的规范。在产品开发上PC端使用了以React+Next.js+express.js+antd为主要架构的技术选型。在移动端则选择了以React-Native为核心的技术架构。在移动端路由上使用了React Navigation为栈队导航。

在代码规范的管理上，使用的是eslint进行检查，在代码兼容性上使用的是Babel7,在单元测试方面使用jest.在数据存储方面使用数据库为文档型MongoDB数据库。

在运维方面，基于腾讯云构建实现100%容器化管理。对数据、代码进行完全隔离。

在敏捷开发和持续化集成方面通过Circle CI、Jenkins、Github进行代码管理。确保开发环境、测试环境、生产环境的持续化集成。

| 前端架构           | 服务端技术 | 持续集成    | 应用容器化 | 数据库   | 代码兼容与管理 | 单元测试  | 打包压缩 | 
| :-------------:   |:--------:| :--------: | :-------:|:-------:|:------------:|:-------:|:-------:|
| Next.js           | Express  | circle CI  | Docker   | MongoDB | Babel7       | Jest    | Webpack|
| React             | nodemon  | Jenkins    |          |         | Eslint       |         |        |
| Antd              |   ip     |   Github   |          |         |              |         |        |
| Less              |          |            |          |         |              |         |        |
| raw-loader        |          |            |          |         |              |         |        |
| react-codemirror2 |          |            |          |         |              |         |        |

云服务器公网IP:118.25.214.169;