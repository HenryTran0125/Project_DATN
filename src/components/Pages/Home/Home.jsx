// import '../../App.css'; // Import your CSS file for styling
import Setpoint from '../../Setpoint';
import DisplayData from '../../DisplayData';
import SavingData from '../../SavingData';
import AutoFill from '../../AutoFill';
import styled from 'styled-components'

const Body = styled.div`
  background-image: url("/university.jpg"); // Sửa lại đường dẫn nếu cần
  background-size: cover; // Đảm bảo hình ảnh phủ kín phần tử
  background-position: center; // Căn giữa hình ảnh nền
  background-repeat: no-repeat; // Không lặp lại hình ảnh
  width: 100vw; // Chiều rộng viewport
  height: 100vh; // Chiều cao viewport
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; // Sử dụng phần trăm để đảm bảo chiều rộng tương đối
  height: 100%; // Sử dụng phần trăm để đảm bảo chiều cao tương đối
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
  background-color: #3498db;
  background: linear-gradient(#3498db);
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

function Home() {
  return (
    <Body>
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
          <AutoFill />
        </RightContainer>
      </Container>
    </Body>
  )
}

export default Home
