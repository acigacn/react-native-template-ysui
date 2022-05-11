import {NativeModules, Platform} from 'react-native';
import {Callback} from '@conts/Types';

const CommonBridgeModule = NativeModules.CommonBridgeModule;

console.log('CommonBridgeModule ======>', CommonBridgeModule);

/**
 * 原生导出的方法，以供调用原生端能力
 */
const CommonBridge = {
  // deviceId: CommonBridgeModule.deviceId,
  // userAgent: CommonBridgeModule.userAgent,
  // bundlePath: CommonBridgeModule.bundlePath,

  isAndroid() {
    return Platform.OS === 'android';
  },

  isIOS() {
    return Platform.OS === 'ios';
  },

  isWeb() {
    return Platform.OS === 'web';
  },

  pageOpen(page: any, cb?: Callback) {
    if (CommonBridgeModule.pageOpen) {
      CommonBridgeModule.pageOpen(page.url, cb);
    }
  },
  pageBack(page: any, cb?: Callback) {
    if (CommonBridgeModule.pageBack) {
      CommonBridgeModule.pageBack('' + page.instance, cb);
    }
  },
};

export default CommonBridge;
