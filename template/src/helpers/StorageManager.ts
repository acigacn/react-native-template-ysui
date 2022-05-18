import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 本地缓存使用（原RN自带的AsyncStorage已过期，不推荐使用）
 */
export default {
  /**
   * 通过key缓存value
   * @param key
   * @param value
   */
  async setItem(key: string, value: any) {
    try {
      let data = value;
      if (typeof value === 'object') {
        data = JSON.stringify(value);
      }
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.log('saving error: ' + error);
    }
  },
  /**
   * 根据key获取缓存数据
   * @param key
   * @returns  Promise<any>
   */
  async getItem(key): Promise<any> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('getData error: ' + error);
    }
    return null;
  },

  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('removeData error: ' + error);
    }
  },
  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('clearAllData error: ' + error);
    }
  },
};
