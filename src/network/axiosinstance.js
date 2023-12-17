import axios from "axios";

export const axiosInstance = axios.create({
      baseURL : "http://197.134.251.238:9010"
      // baseURL : "http://192.168.11.222:9010"
    //baseURL : "ttp://192.168.11.31:8000"
    // http://197.134.251.238:9010/
    
        
})

export default axiosInstance;

