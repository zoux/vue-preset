## Intro

一个用于快速生成项目模版的 vue-cli preset，具备主流项目基础配置、预留配置空间。基于 vue 2 + vue-cli 3 实现。

愿景是不再为新项目而重复性的初始化配置。

> 之前由 vue-cli plugin [vue-cli-plugin-template](https://github.com/zoux/vue-cli-plugin-template) 实现快速生成项目模版的功能。


### 为什么在生成模版时，使用 preset 而不是 plugin？

在生成模版时，preset 相比于 plugin 更高效。

preset 一步即可生成模版 `vue create -p zoux/vue-preset my-app`；而 plugin 需要先 `vue create my-app` 后再 `vue add @zouxin/vue-template` 才可完成相似效果。


## Use

```bash
vue create -p zoux/vue-preset my-app
```

若项目为移动端项目，可使用 [vue-cli-plugin-pxtorem](https://github.com/zoux/vue-cli-plugin-pxtorem) 添加 px -> rem + flexible 的自适应能力。

若项目需要优化首屏渲染，可使用 [vue-cli-plugin-skeleton](https://github.com/zoux/vue-cli-plugin-skeleton) 添加骨架屏。


## Feature

- 基于 vue-cli 3
- 约定性的项目结构
- 集中管理的项目配置
- webpack require.context 实现 components/inject router vuex services/api 的自动注入
- 预留了 router axios 全局拦截器
- 开发环境默认启用 vuex 的严格模式、日志监控
- 可配置全局注入或按需加载 $axios $request $api $constants $utils 等服务
- 全局注入 scss-bem


## Framework

```
.
├── assets                              公共资源
│   ├── iconfont                        阿里 iconfont
│   ├── image
│   └── style
├── components                          公共组件
│   ├── import                          按需引入的组件
│   └── inject                          自动注入的组件
├── config                              项目配置
│   └── interceptors                    拦截器配置
├── router                              vue-router 模块
├── services                            公共服务
│   ├── api                             api 模块
│   ├── axios                           axios 实例化模块
│   ├── constants                       constants 常量模块
│   ├── request                         基于 axios 实例封装的请求工具
│   └── utils                           工具库
├── store                               vuex 模块
├── views                               模块/页面
├── App.vue                             根页面
├── main                                根实例
.
```


## 调试

直接使用当前目录下的 preset.json 文件：

`vue create --preset ./ app`


## License

MIT
