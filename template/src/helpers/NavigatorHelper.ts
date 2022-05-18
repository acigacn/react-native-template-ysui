import * as RootNavigation from '@comms/RootNavigation';
// import Constant from '@conts/Constant';
import {CommonBridge} from '@helps/LDAppBridge';

export default {
  /**
   * 返回上一级页面，如果RN栈返回到根了，则直接退出RN插件
   */
  backPage() {
    if (RootNavigation.canGoBack()) {
      return RootNavigation.goBack();
    }
    console.log('原生返回,退出RCTViewController');
    CommonBridge.back();
  },
  backToRootPage() {
    RootNavigation.popToTop();
  },

  openPage(page: string, params?: object, options?: any) {
    if (options && options.multimes) {
      return RootNavigation.navigate(page, params);
    }
    return RootNavigation.push(page, params);
  },

  replacePage(page: string, params?: object) {
    RootNavigation.replace(page, params);
  },
};
