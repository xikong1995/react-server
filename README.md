# react-server

手写 React 服务端渲染，重点关注前端与中间层。同时本仓库也提供了简单的 API 服务。

## 前端与中间层

前端基于 React 框架，中间层使用 Node.js，基于 Express 框架。

### 依赖说明

这里列出一些重点依赖的说明。

| 包名             | 版本   | 说明                             |
| ---------------- | ------ | -------------------------------- |
| react            | 17.0.2 |                                  |
| react-dom        | 17.0.2 |                                  |
| react-router-dom | 6.2.1  | 前端路由，相比早期版本有很大变化 |
| redux            | 4.1.2  | 状态管理                         |
| react-redux      | 7.2.6  |                                  |
| redux-thunk      | 2.4.1  | redux 中间键                     |
| express          | 4.17.2 | node web 框架                    |
| webpack          | 5.65.0 | 打包工具                         |

### 项目运行

```
cd frontend

npm install

npm run dev
```

## API 服务

使用 Java，基于 Spring Boot 框架。

### 项目运行

```
cd backend

./mvnw spring-boot:run
```
