import router from "@/router";
import axios from "axios";
//创建axios实例
const service = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 5000,
  headers: {
    "Content-type": "application/json;charset=utf-8"
  }
})

//请求拦截
service.interceptors.request.use(
  config => {
    config.headers = config.headers || {}
    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token") || ""
    }
    return config
  })

//响应拦截
service.interceptors.response.use(
  res => {
    console.log(res);
    const code: number = res.status
    if (code != 200) {
      return Promise.reject(res.data)
    }
    return res.data
  },
  err => {
    console.log(err);
    const code: number = err.response.status
    if(code === 999){
      router.push('./')
    }
    return Promise.reject(err.response)
  })

export default service