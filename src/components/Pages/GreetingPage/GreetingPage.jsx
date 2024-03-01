import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react';
import styled from 'styled-components'
import 'animate.css';

const Main = styled.main`
  display: flex;
  /* position: relative;
  justify-content: center; */
  /* align-items: center; */
  min-height: 100vh;
  min-width: 100vw;
  font-family: "Lobster", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-image: url("${process.env.PUBLIC_URL}/3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const H1 = styled.h1`
  color: #e3fafc;
  position: absolute;
  top: 45%;
  left: 20%;
  font-size: 40px;
`


function GreetingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() =>{
      navigate('/login')
    }, 5000)

    //Cleanup function
    return () => clearTimeout(timeout)
  }, [navigate])
  
  return (
    <Main>
      <H1 className='animate__animated animate__fadeOutUp animate__delay-4s'>Good morning Ton Duc Thang University Council!</H1>
    </Main>
  )
}

export default GreetingPage
