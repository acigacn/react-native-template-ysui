import * as RootNavigation from '@comms/RootNavigation';
import Constants from '@conts/Constants';
import UrlHelper from '@helps/UrlHelper';
import {CommonBridge} from '@helps/LDAppBridge';
import {PageOptions} from '@views/base/types';

export default {
  /**
   * 返回上一级页面，如果RN栈返回到根了，则直接退出RN插件
   */
  backPage() {
    if (RootNavigation.canGoBack()) {
      return RootNavigation.goBack();
    }
    CommonBridge.back('', () => {
      console.log('原生返回,退出RCTViewController');
    });
  },
  backToRootPage(options?: PageOptions) {
    if (options?.url) {
      return CommonBridge.popToRoot(options.url);
    }
    RootNavigation.popToTop();
  },

  openPage(page: string, params?: object, options?: PageOptions) {
    // RN内导航
    const navigationRN = (p: string, pa?: object) => {
      if (options?.multimes) {
        RootNavigation.navigate(p, pa);
      } else {
        RootNavigation.push(p, pa);
      }
    };
    if (options?.native) {
      const encodeUrl = UrlHelper.getEncodedUrl(`${Constants.nativeUrlPrefix}${page}`, params);
      console.log('将打开原生页面：', encodeUrl);
      CommonBridge.openPage(encodeUrl, e => {
        console.log('页面由原生端打开', e);
      });
    } else {
      navigationRN(page, params);
    }
  },

  replacePage(page: string, params?: object) {
    RootNavigation.replace(page, params);
  },
};
