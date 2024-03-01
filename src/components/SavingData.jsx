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

const setpointUiSchema = {
  "ui:title": (
    <div style={{ fontSize: "2em", fontWeight: "bold", textAlign: "center" }}>
      Cập nhật giá trị Setpoint
    </div>
  ),
  setpoint: {
    "ui:options": {
      classNames: "custom-input",
      style: { fontSize: "1.5em", fontWeight: "bold", textAlign: "center" },
    },
  },
};

const SavingData = () => {
  const [formData, setFormData] = useState({});
  const [setpointFormData, setSetpointFormData] = useState({});
  const [myData, setMyData] = useState();

  const handleDataSubmit = async ({ formData }) => {
    try {
      console.log("Data sent:", formData);
      const response = await axios.post(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/post",
        formData
      );

      console.log("Respsonse:", response.data);
      setFormData({});
    } catch (error) {
      console.error("Errors:", error);
    }
  };

  const handleSetpointSubmit = async ({ formData }) => {
    try {
      console.log("Set Point:", formData);
      await axios.post(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/post_setPoint",
        formData
      );

      setSetpointFormData({});
    } catch (error) {
      console.error("Set Point errors:", error);
    }
  };

  const fetchData = async () => {
    try{
      const response = await axios.get("https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/getUpdate")
      console.log(response.data[0].weight);
      setFormData(prev => ({...prev, khoiLuong: response.data[0].weight}));
    }catch(error){
      console.error("Error fetching data:", error);
    }
  }

  const startPolling = () => {
    const pollingInterval = setInterval(fetchData, 1000);
    return () => clearInterval(pollingInterval);
  };

  useEffect(() => {
    fetchData();
    const stopPolling = startPolling();

    return () => {
      stopPolling();
    };
  }, [])

  return (
    <div className="auth-form-container">
      <Form
        schema={setpointSchema}
        validator={validator}
        formData={setpointFormData}
        onChange={({ formData }) => setSetpointFormData(formData)}
        onSubmit={handleSetpointSubmit}
        uiSchema={setpointUiSchema}
      />
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

export default SavingData;
