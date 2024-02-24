import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

// Giả định rằng 'university.jpg' nằm trong thư mục 'public'
const LoginLayout = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw; 
  flex-direction: column;
  background-image: url('${process.env.PUBLIC_URL}/3.jpg');
  /* filter: blackandwhite(100%); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const FormLayout = styled.div`
    position: absolute;
    width: 400px;
    margin: 0 auto;
    border: 1px black solid;
    padding: 50px 100px;
    background-color: #83a4d4;
    border-radius: 40px;
    background: #2E2E2E;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
             background: rgba(255, 255, 255, 0.18); /* Adjust the alpha value for more or less transparency */
  /* border-radius: 40px; Rounded corners */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  backdrop-filter: blur(6px); /* The key for the frosted glass effect */
  /* -webkit-backdrop-filter: blur(10px); For Safari browser support */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Optional: subtle border for better definition */
`
const H1 = styled.h1`
  color: #FFFFFF;
  text-align: center;
`

const Form = styled.form`
    width: 100%;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  color: #FFFFFF;
  margin-bottom: 5px;
`

const Check = styled.div`
display: flex;
margin-bottom: 20px;
flex-direction: column;
`

const Input = styled.input`
 /* width: 100%; */
 /* box-sizing: border-box; */
 border: none;
 outline: none;
 background: transparent;
 border-bottom: 1px solid #ffffff;
`

const Warning = styled.span`
  font-size: 12px;
  color: red;
`

const Button = styled.button`
  margin-top: 20px;
  border-radius: 0.5em;
  font-size: 14px;
  border: 1px solid black;
  background-color: #FFFFFF;
  color: black;
  cursor: pointer;
`


function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate()

  function onFormSubmit(data, e) {
    // e.preventDefault()
    navigate('/home');
    console.log(data);
  }

  // console.log(errors);

  
  return (
    <LoginLayout>
      <FormLayout>

      <H1>Login</H1>
      
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <LoginForm>
          <Label>Student ID:</Label>
          <Check>
          <Input 
          type="text" 
          {...register('StudentID', {
            required: "This field is required",
            pattern: {
              value: /^\d+$/,
              message: "ID must be a number",
            }
          })} />
          {errors.StudentID && <Warning>{errors.StudentID.message}</Warning>}
          </Check>


          <Label>Student Name:</Label>
          <Check>

          <Input {
            ...register('StudentName',{
              required: "This field is required",
              pattern:{
                value: /^[A-Za-zÀ-ỹ\s]+$/,
                message: "This field must be text"
              }
            })
          } />
          {errors.StudentName && <Warning>{errors.StudentName.message}</Warning>}
          </Check>

        </LoginForm>

        <Button>Sign in</Button>
      </Form>
      </FormLayout>
    </LoginLayout>
  )
}

export default Login;
