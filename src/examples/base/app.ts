import { axios } from '../../index'
// 一、增加url后的测试
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 1,
//     b: 2,
//     c: ['c'],
//     d: { d: 'd' },
//     f: new Date()
//   }
// })

// // 二、增加处理data和请求头headers之后的设置
// // 2.1headers若data不是对象类型 则不设置Content-type
// axios({
//   method: 'post',
//   url: '/base/post',
//   params: {
//     a: 1
//   },
//   headers: {
//     "Content-type": "application/json;charset=utf-8"
//   },
//   data: {
//     a: [1, 2],
//     b: { name: 'base' }
//   }
// })

// // 2.2自动根据数据类型来设置headers中content-type的类型
// // const paramsString = 'q=URLUtils.searchParams&topic=api'
// const paramsString = 'a=1&b=2' // ===> {a:1,b:2}
// // const paramsString = "我是a" // ===> {'我是a':''}
// const searchParams = new URLSearchParams(paramsString) // 可以把查询字符串的形式自动转为对象格式和自动根据数据来添加content-type的类型
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })

// 三、增加返回响应数据的处理和返回axios返回是一个promise对象
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then(res => {
  console.log(res)
})
