import { v4 as uuidv4 } from 'uuid';

export function guid() {
  return uuidv4().replace(/-/g, '');
}

/**
 * 解析URL参数为对象
 * @param {string} url
 */
export function parseUrlParams(url: string) {
  const params: any = {};
  const query = url.split('?')[1];

  if (query) {
    query.split('&').forEach((param) => {
      const [key, value] = param.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
  }

  return params;
}
