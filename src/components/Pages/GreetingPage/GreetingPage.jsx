import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react';
import styled from 'styled-components'
import 'animate.css';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  font-family: Georgia, 'Times New Roman', Times, serif;
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
      <h1 className='animate__animated animate__fadeOutUp animate__delay-4s'>Good morning Ton Duc Thang University Council!</h1>
    </Main>
  )
}

export default GreetingPage
