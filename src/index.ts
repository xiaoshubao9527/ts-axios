import { AxiosRequestConfig } from './types/dateInterface'
import { bulidURL } from './helpers/url'
import { transformRequest } from './data'
import { xhr } from './xhr'

function transformUrl(config: AxiosRequestConfig): string {
  // 转换 url
  const { url, params } = config
  return bulidURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  // 改变携带的数据data 若为标准对象（{}）则进行JSON序列化 否则则不变
  return transformRequest(config.data)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config) //修改url值
  config.data = transformRequestData(config)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
export { axios }
