// api/productApi.js
import React from "react";
const axios = require("axios");
const APICalling = {
  getQRCodeInfo: (params) => {
    // const url = "";
    return axios.default.get();
  },
  covertAddressToCondinate: (address) => {
    const url = "/api/geocode/json";
    //! kiểu put ở dưới là cách để thiết lập đối với những api mà sử dụng query param
    return axios.default.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA20DZM-KQ30vUa63XoopRiJIzyis_t21I`,
      null
    );
  },
};
export default APICalling;
