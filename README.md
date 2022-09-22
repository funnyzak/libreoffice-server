# LiberOffice Server

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![action][ci-image]][ci-url]
[![license][license-image]][repository-url]
[![GitHub last commit][last-commit-image]][repository-url]
[![GitHub commit activity][commit-activity-image]][repository-url]

[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/libreoffice-server?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/libreoffice-server?style=flat-square
[ci-image]: https://img.shields.io/github/workflow/status/funnyzak/libreoffice-server/Node.js%20CI
[ci-url]: https://github.com/funnyzak/libreoffice-server/actions
[license-image]: https://img.shields.io/github/license/funnyzak/libreoffice-server.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/libreoffice-server

基于 [koa-starter](https://github.com/funnyzak/koa-starter) 构建的 LibeOffice Server 转换服务。

## 目录

- [LiberOffice Server](#liberoffice-server)
  - [目录](#目录)
  - [必要条件](#必要条件)
  - [结构](#结构)
  - [运行](#运行)
  - [用例](#用例)
    - [CURL](#curl)
  - [接口](#接口)
  - [部署](#部署)
  - [参考](#参考)
  - [赞赏](#赞赏)
  - [Author](#author)
  - [License](#license)

## 必要条件

- 使用包管理器 (Linux) 或 msi (Windows) 在 /Applications (Mac) 中安装 libreoffice。

## 结构

    ├── .vscode                                // vscode 配置
    ├── app.js                                 // app入口文件
    ├── common                                 // 公共库
    ├── config                                 // 应用配置
    ├── deploy                                 // 部署示例
    ├── controller                             // 路由控制器
    ├── index.js                               // 启动文件
    ├── lib                                    // 工具库
    ├── logs                                   // 日志文件夹
    ├── middleware                             // 中间件
    ├── test                                   // 测试覆盖
    ├── models                                 // db model
    ├── public                                 // 静态资源文件夹
    ├── router                                 // 路由
    ├── schema                                 // 验证规则
    ├── service                                // 应用业务
    └── views                                  // 模板

## 运行

1. **config**下，创建 **config-[name].js** 配置文件；
2. 安装项目依赖，启动项目。

```bash
npm ci

## 开发启动
npm run watch

## 生产启动
npm start

## 测试覆盖
npm run cov
```

## 用例

### CURL

```bash
# 上传word转换为pdf
curl --request PUT \
  --url 'http://localhost:2058/soffice/word2pdf?prefix=w2022' \
  --header 'content-type: multipart/form-data' \
  --form 'file=@/Users/potato/Desktop/sample.docx'

# 通过word url链接转换PDF，并返回文件流
curl --request GET \
  --url 'http://localhost:2058/soffice/preview?url=http://localhost:3001/upload/document/w2022/20220922/3dd78142-5250-486f-b66b-f4ad64e9f4a7.docx'
```

## 接口

已经实现的接口，已梳理为接口文档，托管在[APIPOST](<(https://console-docs.apipost.cn/preview/cdf94b1afb4dff14/6254d2b2fe5faa73)>)，[在线查看](https://console-docs.apipost.cn/preview/cdf94b1afb4dff14/6254d2b2fe5faa73)。

## 部署

- [通过 Docker-Compose 完成自动化部署](https://github.com/funnyzak/libreoffice-server/tree/main/deploy/docker)

## 参考

- [Mongodb-utils](https://github.com/mono-js/mongodb-utils)
- [Redis](http://doc.redisfans.com/)
- [IoRedis](https://docs.redis.com/latest/rs/references/client_references/client_ioredis/)
- [MongoDb](https://docs.mongodb.com/)
- [sequelizejs](https://sequelize.org/master/manual/getting-started.html)
- [Joi](https://joi.dev/api/)
- [libreoffice-convert](https://github.com/elwerene/libreoffice-convert)

## 赞赏

![赞赏](https://raw.githubusercontent.com/funnyzak/funnyzak/master/public/assets/img/coffee.png)

## Author

| [![twitter/funnyzak](https://s.gravatar.com/avatar/c2437e240644b1317a4a356c6d6253ee?s=70)](https://twitter.com/funnyzak 'Follow @funnyzak on Twitter') [![Join the chat at https://gitter.im/libreoffice-server/community](https://badges.gitter.im/libreoffice-server/community.svg)](https://gitter.im/libreoffice-server/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| [funnyzak](https://yycc.me/)

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
