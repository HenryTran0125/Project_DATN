import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayData.css"; // Import your CSS file for styling

const DisplayData = () => {
  const [myData, setMyData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/getDisplay"
      );
      setMyData(response.data);
      console.log(myData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
  }, []);

  return (
    <div className="my-data-container">
      <h1 className="my-data-title">
        <span>Danh Sách Sản Phẩm: </span>
        {myData.length > 0 ? (
          <ul className="my-list">
            {myData.map((dataItem, index) => (
              <li key={index} className="my-list-item">
                {/* Số thứ tự */}
                <strong>Tên:</strong> {dataItem._id} <br />{" "}
                <strong> Khối Lượng:</strong> {dataItem.total} gram
              </li>
            ))}
          </ul>
        ) : (
          <span className="no-data-message">No data available.</span>
        )}
      </h1>
    </div>
  );
};

export default DisplayData;
