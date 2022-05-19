import {Dictionary} from '@conts/Types';

export default {
  /**
   * 给url添加一个参数
   * @param url url
   * @param key param
   * @param value value
   * @returns url
   */
  addParam(url: string, key: string, value: string | number): string {
    if (/#.+\?/.test(url)) {
      if (url.indexOf(key + '=') === -1) {
        return `${url}&${key}=${value}`;
      } else {
        url = url.replace(new RegExp(`[?&]${key}=[^&]*&?`, 'g'), str => (str[str.length - 1] === '&' ? `${str[0]}${key}=${value}&` : `${str[0]}${key}=${value}`));
        return url;
      }
    }
    const hashReg = /#.+$/;
    const hashResult = url.match(hashReg) || [];
    const hash = hashResult[0] || '';
    url = url.replace(hashReg, '').replace(new RegExp(`[?&]${key}=[^&]*&?`, 'g'), str => (str[str.length - 1] === '&' ? str[0] : ''));
    let linkSymbol = '&';
    if (url.indexOf('?') === -1) {
      linkSymbol = '?';
    }
    return `${url}${linkSymbol}${key}=${value}${hash}`;
  },
  /**
   * 删除Url中一个参数和值
   * @param url url
   * @param key param
   * @returns url
   */
  deleteParam(url: string, key: string): string {
    const hashReg = /#.+$/;
    let hash = url.match(hashReg) || [];
    // @ts-ignore
    hash = hash[0] || '';
    url = url.replace(hashReg, '').replace(new RegExp(`[?&]${key}=[^&]*&?`, 'g'), str => (str[str.length - 1] === '&' ? str[0] : ''));

    return `${url}${hash}`;
  },
  /**
   * 为url添加一个random参数，值随机。一般强制刷新页面用
   * @param url url
   * @returns randomUrl
   */
  getRandomUrl(url: string): string {
    return this.addParam(url, 'random', Math.random());
  },
  /**
   * 获取全部参数
   * @param url url
   * @returns {[key: string]: any}
   */
  getUrlParams(url: string): Dictionary {
    const return_json: Dictionary = {};
    if (typeof url !== 'string' || url.match(/\?/g) === null) {
      return return_json;
    }
    const url_array: string[] = url.split('?');
    let query_array: string[] = url_array[1].split('&');
    // 有可能出现hash路由后边有参数/r?a=a&b=b#/aaa?c=c
    if (url_array[2]) {
      query_array = query_array.concat(url_array[2].split('&'));
    }
    query_array.forEach(item => {
      const key: string = item.split('=')[0];
      const value: string = decodeURIComponent(item.replace(key + '=', '').split('#')[0]); // 去掉有锚点的情况
      return_json[key] = value;
    });
    return return_json;
  },
  /**
   * 是否为有效的网络Url地址
   * @param url url
   * @returns url
   */
  isValidUrl(url: string): boolean {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return true;
    }
    return false;
  },
  /**
   * 将对象参数encode后加在原url链接上
   * @param url url
   * @param params objectParams
   * @returns encodedUrl
   */
  getEncodedUrl(url: string, params?: object): string {
    let encodeUrl = url;
    if (params) {
      Object.keys(params).forEach((key: string) => {
        encodeUrl = this.addParam(encodeUrl, key, encodeURIComponent(params[key]));
      });
    }
    return encodeUrl;
  },
};
