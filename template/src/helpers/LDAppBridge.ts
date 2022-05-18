import {NativeModules, Platform} from 'react-native';
import {Callback} from '@conts/Types';

const CommonBridgeModule = NativeModules.CommonBridgeModule;
const UserBridgeModule = NativeModules.UserBridgeModule;
const DeviceBridgeModule = NativeModules.DeviceBridgeModule;

const getNonullProperty = (module: any, key: string): any => {
  if (module && module[key]) {
    return module[key];
  }
  console.log('module or module.key is undefined=======>', module, key);
  return null;
};

/**
 * 公共桥接属性和方法
 */
export const CommonBridge = {
  isAndroid() {
    return Platform.OS === 'android';
  },
  isIOS() {
    return Platform.OS === 'ios';
  },
  isWeb() {
    return Platform.OS === 'web';
  },
  /**
   * 应用英文名称
   */
  get appName(): string {
    return getNonullProperty(CommonBridgeModule, 'appName');
  },
  /**
   * 插件应用沙盒路径，用于通过file协议读取本地图片地址
   */
  get bundlePath(): string {
    return getNonullProperty(CommonBridgeModule, 'bundlePath');
  },
  /**
   * 自定义的代理名称。用于定义网络请求
   */
  get userAgent(): string {
    return getNonullProperty(CommonBridgeModule, 'userAgent');
  },
  /**
   * 系统名称。如：Android、iOS、iPad OS
   */
  get osName(): string {
    return getNonullProperty(CommonBridgeModule, 'osName');
  },
  /**
   * 系统版本号。ios如：15.4.1，安卓如：12
   */
  get osVersion(): string {
    return getNonullProperty(CommonBridgeModule, 'osVersion');
  },
  /**
   * 应用版本号。如1.2.3
   */
  get appVersion(): string {
    return getNonullProperty(CommonBridgeModule, 'appVersion');
  },
  /**
   * RN 引擎主版本号。如：0.68.2
   */
  get rnEngineVersion(): string {
    return getNonullProperty(CommonBridgeModule, 'rnEngineVersion');
  },
  /**
   * 系统状态栏高度，用于异形屏适配webview中H5自定义导航
   */
  get statusBarHeight(): string {
    return getNonullProperty(CommonBridgeModule, 'statusBarHeight');
  },
  /**
   * 设置cookie
   * @param {[type]} name:string   [description]
   * @param {[type]} value:string  [description]
   * @param {[type]} domain:string [description]
   */
  setCookie(name, value, domain) {
    if (CommonBridgeModule && CommonBridgeModule.setCookie) {
      CommonBridgeModule.setCookie(name, value, domain);
    }
  },
  /**
   * 根据name获取指定域名下的cookie
   * @param name cookie名称
   * @param domain 域名
   * @param cb 回调
   */
  getCookie(name, domain, cb?: Callback) {
    if (CommonBridgeModule && CommonBridgeModule.getCookie) {
      CommonBridgeModule.getCookie(name, domain, cb);
    }
  },
  /**
   * 根据名称和域名删除客户端指定cookie
   * @param name cookie名称
   * @param domain 种cookie的域名
   */
  removeCookie(name, domain) {
    if (CommonBridgeModule && CommonBridgeModule.removeCookie) {
      CommonBridgeModule.removeCookie(name, domain);
    }
  },
  /**
   * 移除所有cookie
   */
  removeAllCookies() {
    if (CommonBridgeModule && CommonBridgeModule.removeAllCookies) {
      CommonBridgeModule.removeAllCookies();
    }
  },
  /**
   * 调用原生端页面打开
   * @param url
   * @param cb
   */
  openPage(url: string, cb?: Callback) {
    if (CommonBridgeModule && CommonBridgeModule.openPage) {
      CommonBridgeModule.openPage(url, cb);
    }
  },
  /**
   * 原生端返回上一页
   */
  back(url: any | undefined, cb?: Callback) {
    if (CommonBridgeModule && CommonBridgeModule.back) {
      CommonBridgeModule.back(url, cb);
    }
  },
  /**
   * 返回原生端BottomTabBar的根节点
   * @param url
   * @param cb
   */
  popToRoot(url: any | undefined, cb?: Callback) {
    if (CommonBridgeModule && CommonBridgeModule.popToRoot) {
      CommonBridgeModule.popToRoot(url, cb);
    }
  },
};

/**
 * 用户业务桥接和方法
 */
export const UserBridge = {
  /**
   * 获取鉴权token
   */
  get accessToken() {
    return getNonullProperty(UserBridgeModule, 'accessToken');
  },
  /**
   * 获取用户id
   */
  get userId() {
    return getNonullProperty(UserBridgeModule, 'userId');
  },
  /**
   * 跳转到native登录
   */
  jumpToLogin(instance: string | undefined, cb?: Callback) {
    if (UserBridgeModule && UserBridgeModule.jumpToLogin) {
      UserBridgeModule.jumpToLogin(instance, cb);
    }
  },
  /**
   * 通知客户端更新用户信息
   * @param info
   * @param cb
   */
  updateUserInfo(info: any | undefined, cb?: Callback) {
    if (UserBridgeModule && UserBridgeModule.updateUserInfo) {
      UserBridgeModule.updateUserInfo(info, cb);
    }
  },
};

export const DeviceBridge = {
  /**
   * 设备唯一标识。用于打点，用户行为追踪
   */
  get deviceId() {
    return getNonullProperty(DeviceBridgeModule, 'deviceId');
  },
  /**
   * 设备运行内存(RAM)。用于大列表性能优化（安卓专用）
   */
  get deviceMemory() {
    return getNonullProperty(DeviceBridgeModule, 'deviceMemory');
  },
  /**
   * 设备认证型号。如：iPhone14,4、M2102J2SC（小米10）
   */
  get deviceModel() {
    return getNonullProperty(DeviceBridgeModule, 'deviceModel');
  },
  /**
   * 调起相机扫描二维码
   * @param cb
   */
  scanQRCode(cb: Callback) {
    if (DeviceBridgeModule && DeviceBridgeModule.scanQRCode) {
      DeviceBridgeModule.scanQRCode(cb);
    }
  },
};
