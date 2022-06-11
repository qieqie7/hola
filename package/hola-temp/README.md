# 目标
成为 vue-template-admin 一样可以真正提效的工具
### 一期目标
- ~~支持react jsx 开发~~
- ~~支持开发服务器~~
- ~~支持ts~~
- ~~支持eslint检测~~
- ~~支持prettier插件美化~~
- ~~引入babel~~
- ~~使用@babel/preset-typescript取代awesome-typescript-loader和ts-loader~~
- ~~简易首页~~
- ~~css 处理 less-loader~~
- source-map
    - ~~js source-map~~
    - ~~css source-map~~
    - 但是这两个sourcemap不在一个路径下 chrome里面
- ~~css 作为外部链接映入~~
- ~~ hmr ~~
- ~~静态资源处理~~
- ~~css module~~
- ~~配置 alias~~
- webpack.config.ts 文件修改，重启开发服务器
- ~~ 为什么热更新没有按照预期的执行，是目前只有一个bundle.js吗 ~~
- devServer.open 设置之后，每次重启就会打开新的页面，如何检测当前页面是否存在开发页面
- commit 提交规范
- 启用 hash 去缓存
- webpack 差分 开发配置 与 生产配置
  - ~~生产环境不应该打包source-map文件~~
  - build后 css代码没有压缩
  - source-map文件在index.bundle.js文件内
- DllPlugin Dynamic Link Library
    - 这个得好好设计一下，相关资料显示提升不明显，在出现性能问题之前暂时不配置
- 多线程打包
- ~~ polyfill的按需加载   preset-env + core-js ~~
- 开发环境开启GZIP
- 【开发环境】端口被占用，提示是否使用当前占用端口+1
- ~~react reactdom 代码拆分 // 这个打包优化有点复杂 SplitChunksPlugin~~
- ~~react-router~~
    - ~~安装~~
    - ~~使用~~
- react-redux
    - ~~安装~~
- ~~ antd or arco.design ui库接入 ~~
- clean-dist-plugin
- open-browser-webpack-plugin
- ~~big 问题    useEffect 会执行2遍  React 18 的 bug~~
- expose-loader
- eslint warn 错误不报
- webpack cache
- postcss
- ~~代码中无需引入react~~ 
https://react.docschina.org/blog/2020/09/22/introducing-the-new-jsx-transform.html 


## prod
- css 独立文件

### 二期目标
- 提供配置文件，集中配置处理
  - 【开发环境】提供GZIP选项
- 按需配置
- 作为 cli 安装
