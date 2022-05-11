# React Native YSUI Template

> 基于react-native官方脚手架模板定制、符合业务视觉规范的开发模板，集成常用库和最佳实践

## 功能

- 可以使用 [React Native CLI](https://github.com/react-native-community/cli)直接创建
- 内置功能[React Native CLI Typescript](https://github.com/react-native-community/react-native-template-typescript)模板的功能
- 扩展了很多日常开发必备的第三方库

## 使用

### 初始化项目

```sh
react-native init MyApp --template https://github.com/acigacn/react-native-template-ysui
```

### 开发 & 打包

```sh
# 使得编码检查和格式化在提交代码前自动修复
yarn run dev:init

# 打js bundle包
yarn run build:all
```

### asstes

本地图片等资源型文件，如果一定要放本地图，请务必先去压缩：https://tinypng.com/

- img：本地图片资源，用本地图前先想想能否通过http引用，是不是必须要放在本地
- json：预留资源，如lottie动画资源描述文件


## 内置的三方库

| 名称                                                         | 版本号  | 功能                                              |
| ------------------------------------------------------------ | ------- | ------------------------------------------------- |
| [react-navigation](https://reactnavigation.org/)             | ^6.0.10  | react-native导航库                                |
| [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) | ^8.5.11  | 可完全替代官方原生Image标签，具有图片自动缓存功能 |
| [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) | ^2.4.1  | 手势库，在React Native中构建最佳的基于触摸的体验  |
| [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) | ^2.8.0 | 动画库，提高复杂动画性能                          |
| [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native) | ^5.1.1  | 动画库                   
| [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) | ^9.1.0  | 字体图标库                                        
| [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)                      | ^2.5.6 | 渐变色                           |
| [axios](https://github.com/axios/axios)                      | ^0.27.2 | 基于Promise的http请求库                           |
| [lodash](https://github.com/lodash/lodash)                      | ^4.17.21 | JS工具库                           |





## 最佳实践

- 字体库原生端集成：https://jishuin.proginn.com/p/763bfbd62a97
