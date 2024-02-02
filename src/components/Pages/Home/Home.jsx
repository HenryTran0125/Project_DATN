// import '../../App.css'; // Import your CSS file for styling
import Setpoint from '../../Setpoint'
import DisplayData from '../../DisplayData';
import SavingData from '../../SavingData';
import AutoFill from '../../AutoFill';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; // Viewport Width
  height: 100vh; // Viewport Height
  background-image: url("/TDTU.jpg"); // Corrected path assuming food.jpg is in the public directory
  /* background-size: cover; // Cover the entire viewport */
  background-position: center; // Center the background image
  background-repeat: no-repeat; // Do not repeat the image
`
const LeftContainer = styled.div`
width: 600px; /* Kích thước cố định cho container-left */
  padding: 20px;
  margin-right: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border-radius: 30px;
  text-align: center;
  color: #5c0404;
  overflow: hidden;
  background-color: #3498db;
  background: linear-gradient(#3498db);
`

const RightContainer = styled.div`
   width: 600px; /* Kích thước cố định cho container-right */
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border-radius: 30px;
  text-align: center;
  color: #01393a;
  overflow: hidden;
  background-color: #3498db;
  background: linear-gradient(#3498db);
`

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`


function Home() {
  return (
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
  )
}

export default Home
