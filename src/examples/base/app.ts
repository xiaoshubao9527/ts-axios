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
    a: [1, 2],
    b: { name: 'base' }
  }
})
