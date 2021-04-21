import axios from "axios";
import queryString from "query-string";
import React from "react";
import { useState, useEffect } from "react";
export const axiosClient = axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json",
  },
  //   ! Việc parse param của asiox có hơi
  // !vấn đề nên ta sẽ sử dụng query string để xủ lí việc này

  //? Ví dụ như ta phải viét query stirng thế này : ?userid=""&password="". Khá là mệt,
  //?dùng cái thư việ này ta chỉ cần bỏ param vào thôi, còn lại nó sẽ tự chuyển thành query trên
  paramsSerializer: (params) => queryString.stringify(params),
});
export const axiosForGoogleAPI = axios.create({
  baseURL: "https://maps.googleapis.com/maps",
  headers: {
    "content-type": "application/json",
  },
  //   ! Việc parse param của asiox có hơi
  // !vấn đề nên ta sẽ sử dụng query string để xủ lí việc này

  //? Ví dụ như ta phải viét query stirng thế này : ?userid=""&password="". Khá là mệt,
  //?dùng cái thư việ này ta chỉ cần bỏ param vào thôi, còn lại nó sẽ tự chuyển thành query trên
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosForGoogleAPI.interceptors.request.use(async (config) => {
  return config;
});

// * mỗi reponse ta sẽ phải thực hiện lấy
axiosForGoogleAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);
axiosClient.interceptors.request.use(async (config) => {
  return config;
});

// * mỗi reponse ta sẽ phải thực hiện lấy
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

// export default axiosClient;
