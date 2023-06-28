import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

<<<<<<< HEAD
const BASE_URL = "http://localhost:8080/";
=======
export const BASE_URL = "http://localhost:8080";
>>>>>>> e82fdcc4602ff33ba61a47b3135c26e092703d2a

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

<<<<<<< HEAD
//*defaultAxiosInstance.interceptors.request.use(
  //(config) => {
    //const correctPath: boolean = config.url !== "login";
    //if (localStorage.getItem("accessToken") !== "" && correctPath) {
      //config.headers.Authorization = `Bearer ${localStorage.getItem(
        //"accessToken"
      //)}`;
    //}
    //return config;
  //},
  //(error: AxiosError) => {
    //return Promise.reject(error);
  //}
//);
=======
api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  let correctPath: boolean = config.url !== "login";
  if (localStorage.getItem("jwt") !== "" && correctPath) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }
  return config;
  },

  (error: AxiosError) => {
      return Promise.reject(error);
  }
)
export default api;
>>>>>>> e82fdcc4602ff33ba61a47b3135c26e092703d2a
