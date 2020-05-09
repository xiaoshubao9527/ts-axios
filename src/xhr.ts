import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from './types/dateInterface'
function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const { data = null, method = 'get', url, headers = {}, responseType } = config
    const request = new XMLHttpRequest() // 实例化 xml实例
    if (responseType) {
      // 如果指定了响应数据的类型 则就赋值
      request.responseType = responseType
    }
    request.open(method.toUpperCase(), url, true) // 第一个参数为为请求的方式(大写) 第二个请求的url  第三个为是否异步请求 true为异步
    //增加如下部分 这里要额外判断一个逻辑，当我们传入的 data 为空的时候，请求 header 配置 Content-Type 是没有意义的，于是我们把它删除。
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name] // 要是data里面本就没啥数据的时候, 我们就用不着专门设置啥content-type了
      } else {
        request.setRequestHeader(name, headers[name]) //但是如果有data的话,设置 HTTP 请求头的值
      }
    })
    request.send(data) // 正式发起请求
    request.onreadystatechange = function() {
      // readyState自身状态码发生改变时触发
      if (request.readyState !== 4) return // 如果自身状态码不为4（即不成功）则return
      const responseHeaders = request.getAllResponseHeaders()
      //以字符串的形式返回所有用 CRLF(回车换行符) 分隔的响应头，如果没有收到响应，则返回 null

      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      //检查是否我们自行设置了responseType的值, 并根据值来进行返回值来设置返回的值得类型
      //request.response 返回一个 ArrayBuffer、Blob、Document，或 DOMString，具体是哪种类型取决于 XMLHttpRequest.responseType 的值
      //request.responseText 返回一个 DOMString，该 DOMString 包含对请求的响应，如果请求未成功或尚未发送，则返回 null。
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response) //将上述数据集合起来传输至 axios的then方法中
    }
  })
}
export { xhr }
