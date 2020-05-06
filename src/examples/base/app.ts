import { axios } from '../../index'
axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    b: 2,
    c: ['c'],
    d: { d: 'd' },
    f: new Date()
  }
})
axios({
  method: 'post',
  url: '/base/post',
  data: {
    c: 3,
    d: 4
  }
})
