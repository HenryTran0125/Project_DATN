import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";


const Container = styled.div`
  text-align: center;
  margin-top: 0px; /* Adjust the margin as needed */
  color: rgb(0, 0, 0);
  overflow-y: scroll;
  height: 600px;
`

const Box = styled.div`
  font-size: 30px; 
  font-weight: bold;
  color: rgb(71, 0, 0);
`

const List = styled.ul`
  list-style-type: none;
    padding: 0;
`

const Item = styled.li`
  text-align: left;
  margin-bottom: 30px; 
  margin-left: 80px; 
`

const Message = styled.span`
    font-size: 30px;
`

const Label = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
`

const Edit = styled.button`
height: 48px;
width: 48px;
margin-left: 48px;
  /* xmlns:"http://www.w3.org/2000/svg",  */
  /* fill="none" viewBox="0 0 24 24", 
  stroke-width="1.5",
  stroke="currentColor" ,
  class="w-6 h-6"; */
`

const DisplayData = () => {
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
      <Box>
        <h2>Danh Sách Sản Phẩm: </h2>

        {myData.length > 0 ? (
          <List>
            {myData.map((dataItem, index) => (
              <Item>
                {/* Số thứ tự */} 
                <Label>
                  <strong>{index+1}. Tên Sản Phẩm: {dataItem.ten}</strong>  <br />
                  {/* <Edit>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

</Edit> */}

                </Label>
                <strong> Khối Lượng:</strong> {dataItem.khoiLuong} gram
              </Item>
            ))}
          </List>
        ) : (
          <Message>No data available.</Message>
        )}
      </Box>
    </Container>
  );
};

export default DisplayData;
