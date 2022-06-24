import axios from "axios";

const instance = axios.create({
    // 创建axios实例
    baseURL:"http://localhost:8080/api/v1/",
    timeout:5000,
})

export default instance