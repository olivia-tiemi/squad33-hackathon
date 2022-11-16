import axios from "axios";
import { clear } from "../utils/storage";

const BASE_URL = "http://localhost:8080/api";

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 403) {
      window.location.replace("http://localhost:3000");
      clear();
    }
    console.log(error);
  }
);

export default axiosPrivate;
