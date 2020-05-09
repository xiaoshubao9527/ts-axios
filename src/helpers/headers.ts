import { isPlainObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  //normalizedName 参数的标准名
  if (!headers) {
    //判断headers是否存在
    return
  }
  // 若刚开始用户定义的Content-type属性大小写不相同则删除原来用户设置的Content-type，换成正确的Content-type并把用户设置的值赋值给正确的Content-type
  Object.keys(headers).forEach(name => {
    //存在的话的把headers的所有名值对遍历处理一遍
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      // 当传入了 Content-Type参数后, 先把自带的参数名进行判断, 当且仅当单词相同但大写不同时进行一次转化
      delete headers[name] //使用标准参数, 删除掉自身的的参数名
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type') //进行参数预处理

  if (isPlainObject(data)) {
    //是否附带的参数数据 是否是真正意义上的对象
    if (headers && !headers['Content-Type']) {
      //如果 headers存在,但是里面没有Content-Type的话, 就把类型锁死为json
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
