import axios from "axios";
import { BASE_URL } from "./apiPath";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized access
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        // Handle server error
        console.log("Server error occurred");
      } else if (error.code === "ECONNABORTED") {
        // Handle request timeout
        console.log("Request timed out");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
