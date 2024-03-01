import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";


const Container = styled.div`
  text-align: center;
  border-radius: 30px;
  margin-top: 0px; /* Adjust the margin as needed */
  color: rgb(0, 0, 0);
  /* overflow-y: scroll; */
  height: 500px;
  width: 90%;
  background-color: white;
  box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
             background: rgba(255, 255, 255, 0.18); /* Adjust the alpha value for more or less transparency */
  /* border-radius: 40px; Rounded corners */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  backdrop-filter: blur(6px); /* The key for the frosted glass effect */
  /* -webkit-backdrop-filter: blur(10px); For Safari browser support */
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #009879;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid black;
`;

const Tr = styled.tr`
  
    background-color: white;
  
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
`

const DisplayData = ({timeStamp}) => {
  const [myData, setMyData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/get-xdisr/endpoint/getDisplay"
      );
      console.log(response.data)
      setMyData(response.data);
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

  // console.log(myData)


  return (
    <Container>
      <h2>Danh Sách Sản Phẩm: </h2>
      {myData.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Thời gian</Th>
              <Th>Tên Sản Phẩm</Th>
              <Th>Khối Lượng</Th>
            </tr>
          </thead>
          <tbody>
            {myData.map((dataItem, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{timeStamp}</Td>
                <Td>{dataItem.ten}</Td>
                <Td>{dataItem.khoiLuong} gram</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No data available.</p>
      )}
    </Container>
  );
};

export default DisplayData;
