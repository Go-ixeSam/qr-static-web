// api/productApi.js
import React from "react";
import { axiosClient, axiosForGoogleAPI } from "./axiosClient";
const axios = require('axios');
const APICalling = {
  getQRCodeInfo: (params) => {
    const url = "";
    return axiosClient.get(url, { params });
  },
  covertAddressToCondinate: (params) => {
    const url = "/api/geocode/json";
    //! kiểu put ở dưới là cách để thiết lập đối với những api mà sử dụng query param
    // return axiosForGoogleAPI.get(url, {}, { params: params });
    // return axiosForGoogleAPI.get(
    return axios.default.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {},
      {
        params: {
          address: "44 đường số 9 phường 13 quận 6 thành phố hồ chí minh",
          key: "AIzaSyA20DZM-KQ30vUa63XoopRiJIzyis_t21I",
        },
      }
    );
  },
};
export default APICalling;
