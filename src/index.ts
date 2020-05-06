import { AxiosRequestConfig } from './types/dateInterface'
import { bulidURL } from './helpers/url'
import { xhr } from './xhr'

function transformUrl(config: AxiosRequestConfig): string {
  // 转换 url
  const { url, params } = config
  return bulidURL(url, params)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config) //修改url值
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
export { axios }
