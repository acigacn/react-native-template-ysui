import {NativeModules, Platform} from 'react-native';
import {Callback} from '@conts/Types';

const CommonBridgeModule = NativeModules.CommonBridgeModule;

/**
 * 原生导出的方法，以供调用原生端能力
 */
const CommonBridge = {
  deviceId: CommonBridgeModule.deviceId,
  userAgent: CommonBridgeModule.userAgent,
  bundlePath: CommonBridgeModule.bundlePath,

  isAndroid() {
    return Platform.OS === 'android';
  },

  isIOS() {
    return Platform.OS === 'ios';
  },

  isWeb() {
    return Platform.OS === 'web';
  },

  pageOpen(url: string, cb: Callback) {
    CommonBridgeModule.pageOpen(url, cb);
  },
  pageBack(instance: any, cb: Callback) {
    CommonBridgeModule.pageBack('' + instance, cb);
  },
};

export default CommonBridge;
