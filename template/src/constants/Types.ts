/**
 * 通用类型定义
 */

/**
 * 函数类型
 */
export type Callback = (...args: any[]) => any | undefined;

/**
 * 字典（Map）类型
 */
export type Dictionary = {
  [key: string]: any;
};
