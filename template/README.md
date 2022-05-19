# SmartBasic

智能设备插件基础工程

## 工程说明

<details>
<summary>目录</summary>
<pre>
<code>
├── android 安卓工程源码（用于插件调试，可删除）
├── ios iOS工程源码（用于插件调试，可删除）
├── res RN工程资源文件，图片资源放这里
├── scripts 工程脚本，非直接开发用
├── src RN业务源码
├──── api 业务api定义
├──── common 公共业务组件
├──── components 通用基础组件
├──── configs 应用配置项
├──── constants 应用常量
├──── helpers 工具类
├──── mock 模拟数据
├──── services 业务层，用作数据处理
├──── stores 扩展项（redux或mobx）
└──── views 页面集合
</code>
</pre>
</details>

## 项目分支

建议采用：git-flow流程做分支管理

## 本地开发

### 环境配置

初始化仓库以及安装**git hooks**

`yarn run dev:init`

hooks安装成功后，项目根目录下会多出**.husky**，这个在提交commit时会强制校验代码和格式化。以保证程序健壮性...

强烈建议不要忽略该步骤！！！

### 开发与调试

- 服务启动：`yarn start`
- 安卓真机本地调试：`adb reverse tcp:8081 tcp:8081`

## 打包发布

全平台打包

`yarn run build:all`

发布：https://b9nhtlfpd3.feishu.cn/wiki/wikcnhQ83JSbbSXBkMSlrdV04hf