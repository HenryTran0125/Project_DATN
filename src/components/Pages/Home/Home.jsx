// import '../../App.css'; // Import your CSS file for styling
import Setpoint from '../../Setpoint';
import DisplayData from '../../DisplayData';
import SavingData from '../../SavingData';
import AutoFill from '../../AutoFill';
import styled from 'styled-components';
import Header from '../../Header/Header';
import { useState } from 'react';

const Body = styled.div`
  width: 100vw; 
  min-height: 100vh; 
  background-image: url('${process.env.PUBLIC_URL}/6.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 100%;
  min-height: 100%; 
`

// Định nghĩa cho LeftContainer và RightContainer giống nhau nên có thể tạo một BaseContainer để tái sử dụng mã
const BaseContainer = styled.div`
  width: 600px; /* Kích thước cố định cho containers */
  padding: 20px;
  margin-right: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border-radius: 30px;
  text-align: center;
  overflow: hidden;
  /* background-color: #ffd8a8; */
`

const LeftContainer = styled(BaseContainer)`
  color: black;
  box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
             background: rgba(255, 255, 255, 0.18); /* Adjust the alpha value for more or less transparency */
  /* border-radius: 40px; Rounded corners */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  backdrop-filter: blur(6px); /* The key for the frosted glass effect */
  /* -webkit-backdrop-filter: blur(10px); For Safari browser support */
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const RightContainer = styled(BaseContainer)`
  color: #01393a;
`

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`

const Button = styled.button`
  position: absolute;
  bottom: 20%;
`


const Home = () => {
  const [timeStamp, setTimeStamp] = useState();


  return (
    <Body>
      <Header />
      <Container>
        {/* Container 1 */}
        <LeftContainer>
          <H1>Data From MongoDB</H1>
          <Setpoint />
          <SavingData setTimeStamp = {setTimeStamp} />
        </LeftContainer>

        
        {/* Container 2 */}
        
          <DisplayData timeStamp = {timeStamp}/>
          {/* <AutoFill /> */}
        
      </Container>
    </Body>
  )
}

export default Home
