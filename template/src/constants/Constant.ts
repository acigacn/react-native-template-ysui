import Pages from '@views/index';

const Constant = {
  urlPrefix: 'https://app.lingdong.cn/r/',

  /**
   * 由url映射到pageComp，规则如下：
   * RN页:https://app.lingdong.cn/r/HomePage
   * 原生页: https://app.lingdong.cn/n/HomePage
   */
  PageUrls: Object.keys(Pages).map(key => {
    return `${Constant.urlPrefix}${key}`;
  }),
};

export default Constant;
