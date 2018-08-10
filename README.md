## Intro

一个具备主流项目基础配置、预留配置空间的 vue 2.x 模版，基于 vue-cli 3 实现。

原始模版和思想来自于 [vue-develop-template](https://github.com/PerseveranceZ/vue-develop-template)。

## Feature

- 基于 vue-cli 3
- 具有约定性质的项目结构
- 配置项集中管理
- 利用 webpack require.context 实现 router vuex 的自动注入
- 开发环境默认启用 vuex 的严格模式、日志监控
- 已注入 axios api const 全局自定义插件
- 预留了 router axios 全局拦截器
- 配置全局 scss-bem

## Start

```
npm i
npm run serve
```

## Commands

```
npm run build
npm run lint
```
