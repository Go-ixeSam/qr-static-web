import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Qrcode from "./assets/img/qrcode-default.png";
import rightIcon from "./assets/img/right-icon.png";
import APICalling from "./api/APICalling";
function App() {
  const [address, setAddress] = useState({
    lat: "",
    long: "",
    place_id: "",
    formatted_address: "",
  });
  React.useEffect(() => {
    APICalling.covertAddressToCondinate(
      "44 đường số 9 phường 13 quận 6 thành phố hồ chí minh"
    ).then((res) => {
      const resutl = res.data.results[0];
      console.log("đây nè= ", res.data.results[0]);
      const tmp = {
        ...address,
        lat: resutl.formatted_address,
        place_id: resutl.place_id,
        long: resutl.geometry.location.lng,
        formatted_address:resutl.formatted_address,
        lat: resutl.geometry.location.lat,
      };
      setAddress(tmp);
    });
  }, []);
  const size = 20;
  const moMargin = {
    margin: 0,
  };
  return (
    <React.Fragment>
      <img src={Qrcode} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 10,
          width: "max-content",
        }}
      >
        <div className="styling">
          <p>Người nhận</p>
          <p>Số điện thoại</p>
          <p>Địa chỉ</p>
          <p>Loai rau</p>
          <p>Số lượng</p>
        </div>
        <div style={{ marginLeft: 10 }}>
          <p>Nguyễn Khắc Sâm</p>
          <p>0125859955</p>
          <a
          // href={
          //   "https://www.google.com/maps/search/?api=1&query=10.752206,106.6274087&query_place_id=ChIJofr-9SosdTERlbh4EVWpi8g"
          // }
          >
            {address.formatted_address}
            <img src={rightIcon} width={size} height={size} />
          </a>

          <p>Bắp cải</p>
          <p>25</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
