import {CommonBridge} from '@helps/LDAppBridge';

export default {
  /**
   * 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
   */
  baseUrl: 'http://localhost:80',

  get userAgent() {
    if (CommonBridge.userAgent) {
      return CommonBridge.userAgent;
    }
    return 'defaultUserAgent';
  },

  get accessToken() {
    return 'token';
  },
};
