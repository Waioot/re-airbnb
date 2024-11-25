import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

// 创建请求类
class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      res => res.data,
      err => Promise.reject(err)
    );
  }
  // 发送请求
  request(config) {
    return this.instance.request(config);
  }

  // 封装请求方法
  get(config) {
    return this.request({ ...config, method: 'GET' });
  }
  // post 请求
  post(config) {
    return this.request({ ...config, method: 'POST' });
  }
}

const YRequest = new Request(BASE_URL, TIMEOUT);
export default YRequest;
