import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Qrcode from "./assets/img/qrcode-default.png";
import rightIcon from "./assets/img/right-icon.png";
import APICalling from "./api/APICalling";
function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [address, setAddress] = useState({
    lat: "",
    long: "",
    place_id: "",
    formatted_address: "",
  });
  const [Id, setID] = useState("");
  let [alrigh, setAlrigh] = useState(true);
  const Error = (
    <p style={{ color: "red" }}>Hệ thống bị lỗi, hãy thử lại lần nữa</p>
  );
  React.useEffect(() => {
    // console.log("link",document.location.href,"và search, ",document.location.search)
    const params = new URLSearchParams(document.location.search); //* lấy đoạn query tring trong URL
    const ID = params.get("Id"); // * lấy ra giá trị của param đầu vào
    console.log(document.location.search);
    APICalling.getQRCodeInfo(ID).then((res) => {
      const data = res.data;
      setExchangeData({
        giver: data.fullNameHost,
        receiver: data.fullNameReceiver,
        phone: data.receiverPhoneNumber,
        receiverAddress: data.receiverAddress,
        quantity: data.quantity,
        vegetable: data.vegNameReceive,
        qrcode: data.qrCode,
      });
      console.log("result= ",data)
      APICalling.covertAddressToCondinate(data.receiverAddress).then((res) => {
        const resutl = res.data.results[0];
        const tmp = {
          ...address,
          lat: resutl.formatted_address,
          place_id: resutl.place_id,
          long: resutl.geometry.location.lng,
          formatted_address: resutl.formatted_address,
          lat: resutl.geometry.location.lat,
        };
        setAddress(tmp);
      });
    });
  }, []);
  const size = 20;
  const qrcodeSize = 200;
  const moMargin = {
    margin: 0,
  };
  const {
    giver,
    receiver,
    phone,
    receiverAddress,
    quantity,
    vegetable,
    qrcode,
  } = exchangeData;
  {
    return (
      <React.Fragment>
        <img src={qrcode} height={qrcodeSize} width={qrcodeSize} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            width: "max-content",
          }}
        >
          <div className="styling">
            <p>Người cho </p>
            <p>Người nhận</p>
            <p>Số điện thoại</p>
            <p>Địa chỉ</p>
            <p>Loai rau</p>
            <p>Số lượng</p>
          </div>
          <div style={{ marginLeft: 10 }}>
            <p>{giver}</p>
            <p>{receiver}</p>
            <p>{phone}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${address.lat},${address.long}&query_place_id=${address.place_id}`}
            >
              {address.formatted_address}
              <img src={rightIcon} width={size} height={size} />
            </a>

            <p>{vegetable}</p>
            <p>{quantity}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
