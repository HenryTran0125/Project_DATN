import styled from 'styled-components'

const LoginLayout = styled.main`
display: flex;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
`

function Login() {
  return (
    <LoginLayout>
      <h1>Login</h1>
    </LoginLayout>
  )
}

export default Login
