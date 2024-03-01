import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

function WelcomePage() {
    

    const Greeting = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
    `

    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login')
        }, 5000)

        //Clean up function
        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <Greeting>
            <h1>Good Morning Ton Duc Thang University Council!</h1>
        </Greeting>
    )
}

export default WelcomePage
