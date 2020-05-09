import { AxiosRequestConfig, AxiosPromise } from './types/dateInterface'
import { bulidURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { xhr } from './xhr'

// 转化url
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}
// 转化data
function transformData(config: AxiosRequestConfig): any {
  // 改变携带的数据data 若为标准对象（{}）则进行JSON序列化 否则则不变
  return transformRequest(config.data)
}
// 转化headers
function transformHeaders(config: AxiosRequestConfig): any {
  // 改变携带的数据data 若为标准对象（{}）则进行JSON序列化 否则则不变
  return processHeaders(config.headers, config.data)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config) //修改url值
  config.data = transformData(config) // 修改data值
  config.headers = transformHeaders(config) // 修改headers值
}

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}
export { axios }
