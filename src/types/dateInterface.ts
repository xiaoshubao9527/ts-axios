type Method = 'get' | 'GET' | 'post' | 'POST' | 'PUT' |'put' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS'
            | 'patch' | 'PATCH';
interface AxiosRequestConfig {
    url: string     // 请求的url
    method?: Method // 请求的方式 为可选属性 不选默认为大写的GET请求
    data?: any       // 请求中携带的数据 为any类型 可选属性
    params?: any     // get请求携带在url后面的额外数据 可选属性
}
export {AxiosRequestConfig}
