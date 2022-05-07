import axios, {AxiosRequestConfig} from 'axios';
import Env from '@confs/Env';
import {Callback} from '@conts/Types';
import {Error_40X, Error_50X} from '@conts/Error';

/**
 * httpClient 实例初始化和配置
 */
const instance = axios.create({
  baseURL: Env.baseUrl,
  headers: {
    'content-type': 'application/json',
    'User-Agent': Env.userAgent,
  },
  timeout: 5000,
  withCredentials: true,
  responseType: 'json',
});

/**
 * 请求拦截器，处理请求之前的自定义操作
 */
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config && config.headers) {
      config.headers.token = Env.accessToken;
    }
    return config;
  },
  error => {
    console.warn('请求出错啦...', error);
    Promise.reject(error);
  },
);

/**
 * 响应拦截器，统一处理数据返回后的通用操作
 */
instance.interceptors.response.use(
  response => {
    const res = response.data;
    console.log('服务器返回数据了 ====> ', res);
    if (res && typeof res === 'object') {
      switch (parseInt(res.code, 10)) {
        case 200:
          return res;
        case 401:
        case 403:
        case 404: {
          console.warn('需要登录再操作...');
          // TODO 调用客户端登录页面
          return Error_40X({code: res.code, message: res.message});
        }
        case 500:
        case 502:
        case 403: {
          console.warn('服务器异常...');
          // TODO 统一弹出错误提醒
          return Error_50X({code: res.code, message: res.message});
        }
        default:
          return res;
      }
    }
  },
  error => {
    console.warn('请求出错，网络可能有问题了...', error);
    Promise.reject(error);
  },
);

const formDataFromData = (data: any) => {
  const formData = new FormData();
  if (data.name && data.file) {
    formData.append('name', data.name);
    formData.append('file', data.file);
  }
  return formData;
};

export default {
  /**
   * 通过预定义baseUrl get 请求资源
   * @param path pathname,不带域名
   * @param params 请求参数，json对象
   * @returns Promise<any>
   */
  async getWithPath(path: string, params?: object | URLSearchParams): Promise<any> {
    return await instance({
      url: path,
      method: 'GET',
      params: params,
    });
  },
  /**
   * 通过自定义url get 请求资源
   * @param url 自定义url，完整资源路径
   * @returns Promise<any>
   */
  async getWithUrl(url: string): Promise<any> {
    return await instance.get(url);
  },

  async postWithPath(path: string, data?: object): Promise<any> {
    return await instance({
      url: path,
      method: 'POST',
      data: data,
    });
  },
  async postWithUrl(url: string, data?: object): Promise<any> {
    return await instance.post(url, data);
  },

  async uploadWithPath(path: string, data?: object, onUploadProgress?: Callback): Promise<any> {
    return await instance({
      url: path,
      method: 'POST',
      data: formDataFromData(data),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onUploadProgress,
    });
  },

  async uploadWithUrl(url: string, data?: object, onUploadProgress?: Callback): Promise<any> {
    return await instance.post(url, {
      data: formDataFromData(data),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onUploadProgress,
    });
  },
};
