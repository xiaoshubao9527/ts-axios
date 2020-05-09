type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'PUT'
  | 'put'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH'
// 请求数据的接口
interface AxiosRequestConfig {
  url: string // 请求的url
  method?: Method // 请求的方式 为可选属性 不选默认为大写的GET请求
  data?: any // 请求中携带的数据 为any类型 可选属性
  params?: any // get请求携带在url后面的额外数据 可选属性
  headers?: any // 请求头 处理请求的数据和设置字符编码格式
  responseType?: XMLHttpRequestResponseType // 指定相应数据的类型 需在send之前设置
}

// 处理响应的数据接口 反馈给用户
interface AxiosResponse {
  //定义axios方法传输到then里面的resolve 数据
  data: any //服务端返回的数据 data
  status: number //HTTP 状态码status
  statusText: string //状态消息 statusText 与状态码相对应的消息 如状态码为200 则状态消息可能为Ok 代表200
  headers: any //响应头 headers
  config: AxiosRequestConfig //请求配置对象 config
  request: any //请求的 XMLHttpRequest 对象实例 request
}
// 接口请求返回是个promise对象 继承Promise<AxiosResponse>泛型接口
interface AxiosPromise extends Promise<AxiosResponse> {}

export { AxiosRequestConfig, AxiosResponse, AxiosPromise }
