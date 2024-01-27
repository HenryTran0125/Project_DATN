import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import axios from "axios";
import { useEffect } from "react";

const schema = {
  title: "Lưu trữ dữ liệu khối lượng",
  type: "object",
  required: ["ten", "khoiLuong"],
  properties: {
    ten: { type: "string", title: "Tên Sản Phẩm:" },
    khoiLuong: { type: "number", title: "Khối Lượng:ㅤ" },
  },
};

const uiSchema = {
  "ui:title": (
    <div style={{ fontSize: "2em", fontWeight: "bold", textAlign: "justify" }}>
      Lưu trữ dữ liệu khối lượng
    </div>
  ),
  ten: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "custom-input",
      style: { fontSize: "1.5em", fontWeight: "bold", textAlign: "center" },
    },
  },
  khoiLuong: {
    "ui:widget": "text",
    "ui:options": {
      classNames: "custom-input",
      style: { fontSize: "1.5em", fontWeight: "bold", textAlign: "center" },
    },
  },
};

const setpointSchema = {
  title: "Cập nhật giá trị Setpoint",
  type: "object",
  required: ["setpoint"],
  properties: {
    setpoint: { type: "number", title: "Setpoint:ㅤㅤㅤ" },
  },
};


const AutoFill = () => {
  const [formData, setFormData] = useState({});
  const [setpointFormData, setSetpointFormData] = useState({});

  useEffect(() => {
    getDataFromMongo();
  }, []);

  const getDataFromMongo = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/getAutoFill');
      setFormData(response.data); // Cập nhật formData với dữ liệu từ API
      console.log(response)
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  const handleDataSubmit = async ({ formData }) => {
    try {
      console.log("Dữ liệu gửi đi:", formData);
      const response = await axios.post(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/post",
        formData
      );

      console.log("Kết quả từ server:", response.data);
      setFormData({});
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
  };

  const handleSetpointSubmit = async ({ formData }) => {
    try {
      console.log("Dữ liệu setpoint gửi đi:", formData);
      await axios.post(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/post_setPoint",
        formData
      );

      setSetpointFormData({});
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu setpoint:", error);
    }
  };

  

  return (
    <div className="auth-form-container">
      
      <div style={{ margin: "20px" }}></div>
      <Form
        schema={schema}
        validator={validator}
        formData={formData}
        onChange={({ formData }) => setFormData(formData)}
        onSubmit={handleDataSubmit}
        uiSchema={uiSchema}
      />
    </div>
  );
};

export default AutoFill;
