import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})
//拦截器
axios.interceptors.request.use(config => {
    //1.发送网络请求时在界面显示Loading对象
    //2.某些请求要求用户必须携带token
    //3.params/data序列化操作
    return config
}, err => {
    console.log(err)
})
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    //一般对err.response.status的状态码进行处理
    console.log(err)
})
export default instance