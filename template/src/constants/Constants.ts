// import Pages from '@views/index';
import {name as appName} from '../../app.json';

const Constants = {
  /**
   * 插件名称
   */
  appName,

  /**
   * 页面Url前缀
   * 完整RN页: https://app.lingdong.cn/r/SmartBasic/HomePage
   */
  rnUrlPrefix: `https://app.lingdong.cn/r/${appName}/`,

  /**
   * 原生页: https://app.lingdong.cn/n/HomePage
   */
  nativeUrlPrefix: 'https://app.lingdong.cn/n/',

  /**
   * 由url映射到pageComp，规则如下：
   */
  // RNPageUrls: Object.keys(Pages).map(key => {
  //   return `${Constants.urlPrefix}${key}`;
  // }),
};

export default Constants;
