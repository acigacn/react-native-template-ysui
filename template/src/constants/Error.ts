/**
 * 错误码定义
 */

export const Error_40X = ({code, message}) => {
  return {
    code: code,
    message: message ? message : '请求资源不存在或无权限访问',
  };
};

export const Error_50X = ({code, message}) => {
  return {
    code: code,
    message: message ? message : '服务器异常',
  };
};
