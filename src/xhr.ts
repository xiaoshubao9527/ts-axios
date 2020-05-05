import {AxiosRequestConfig} from './types/dateInterface'
function xhr(config: AxiosRequestConfig) {
    const {data = null, method = 'get', url} = config
    const request = new XMLHttpRequest() // 实例化 xml实例
    request.open(method.toUpperCase(), url, true) // 第一个参数为为请求的方式(大写) 第二个请求的url  第三个为是否异步请求 true为异步
    request.send(data) // 正式发起请求
}
export {xhr}