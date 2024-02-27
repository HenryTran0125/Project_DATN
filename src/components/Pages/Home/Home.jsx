// import '../../App.css'; // Import your CSS file for styling
import Setpoint from '../../Setpoint';
import DisplayData from '../../DisplayData';
import SavingData from '../../SavingData';
import AutoFill from '../../AutoFill';
import styled from 'styled-components';
import Header from '../../Header/Header';

const Body = styled.div`
  width: 100vw; 
  min-height: 100vh; 
  background-color: #ffd8a8;
  position: relative;
`

const Container = styled.div`
  display: flex;
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
  background-color: #ffd8a8;
`

const LeftContainer = styled(BaseContainer)`
  color: #5c0404;
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


function Home() {
  return (
    <Body>
      <Header />
      <Container>
        {/* Container 1 */}
        <LeftContainer>
          <H1>Data From MongoDB</H1>
          <Setpoint />
          <SavingData />
        </LeftContainer>

        
        {/* Container 2 */}
        <RightContainer>
          <DisplayData />
          {/* <AutoFill /> */}
        </RightContainer>
      </Container>

      <Button>Finish</Button>
    </Body>
  )
}

export default Home
