import axios from 'axios'
import { Modal } from 'antd';
const UserKey = '2d90accf45edb19e93e1b50a009d5a62';
axios.defaults.baseURL = 'https://api.betterdoctor.com';
//请求拦截器
axios.interceptors.request.use(config => {
    // config 为请求的一些配置 例如：请求头 请求时间 Token
    config.headers['Content-Type'] = "application/json; charset=utf-8";
    config.timeout = 100 * 1000 //请求响应时间
    return config
}, error => {
    return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // console.log('res:',response);
        return Promise.resolve(response.data);
    },
    error => {
        if (error && error.response) {
            let res = {}
            res.code = error.response.status
            res.msg = throwErr(error.response.status, error.response) //throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
            Modal.error({ content: res.msg })
            return Promise.reject(res)
        }
        return Promise.reject(error)
    }
)
export default function request(method, url, data) {  //暴露 request 给我们好API 管理
    method = method.toLocaleLowerCase();   //封装RESTful API的各种请求方式 以 post get delete为例
    switch (method) {
        case 'get':
            data.user_key = UserKey;
            return axios.get(url, { params: data });
        case 'post':
            return axios.post(url, data);
        case 'put':
            return axios.put(url, data);
        case 'delete':
            return axios.delete(url, { params: data })
        default:
            break
    }
}
const throwErr = (code, response) => {
    let message = '请求错误'
    switch (code) {
        case 400:
            message = '请求错误'
            break
        case 401:
            message = '未授权，请登录'
            break
        case 403:
            message = '拒绝访问'
            break
        case 404:
            message = `请求地址出错: ${response.config.url}`
            break
        case 408:
            message = '请求超时'
            break
        case 500:
            message = '服务器内部错误'
            break
        case 501:
            message = '服务未实现'
            break
        case 502:
            message = '网关错误'
            break
        case 503:
            message = '服务不可用'
            break
        case 504:
            message = '网关超时'
            break
        case 505:
            message = 'HTTP版本不受支持'
            break
        default:
    }
    return message
}