/**
 * 数据业务层
 */
import Request from '@helps/Request';
import {mainData} from '@api/Home';

export const getHomeData = async (params?: any) => {
  let result = null;
  try {
    result = await Request.getWithPath(mainData, params);
  } catch (error) {
    console.warn('getHomeData error', error);
  }
  return result;
};
