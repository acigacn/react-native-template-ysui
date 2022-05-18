/**
 * 本地缓存使用，由于 AsyncStorage 过期，官方已不推荐使用。因此这里使用浏览器自带的缓存操作
 */
export default {
  setItem(key, value) {
    console.log('getItem', window);
    if (window.localStorage) {
      localStorage.setItem(key, value);
    }
  },
  getItem(key) {
    if (window.localStorage) {
      return localStorage.getItem(key);
    }
    return '';
  },
  removeItem(key) {
    if (window.localStorage) {
      return localStorage.removeItem(key);
    }
  },
  clear() {
    if (window.localStorage) {
      return localStorage.clear();
    }
  },
};
