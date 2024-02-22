import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import { useState } from 'react';

// Giả định rằng 'university.jpg' nằm trong thư mục 'public'
const LoginLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw; 
  flex-direction: column;
  /* background-image: url('${process.env.PUBLIC_URL}/1.jpg'); */
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
`

const FormLayout = styled.div`
    border: 1px black solid;
    padding: 30px;
    background-color: #83a4d4;
    border-radius: 2px;
`
const H1 = styled.h1`
  color: #112A46;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: 5px;
`

const Input = styled.input`
  margin-bottom: 30px;
`


function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const [inputForm, setInputForm] = useState("");

  function handleChange(e){
    // setInputForm(e.target.value);
    console.log(e.target.value)
  }

  function onFormSubmit(data) {
    console.log(data);
  }

  // console.log(register);
  console.log(errors);

  
  return (
    <LoginLayout>
      <FormLayout>

      <h1>Login</h1>
      {/* <img src='${process.env.PUBLIC_URL}/2.jpg' /> */}
      
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <LoginForm>
          <Label>Student ID:</Label>
          <Input 
          type="text" 
          
          onChange = {handleChange}
          {...register('StudentID', {
            required: "This field is required",
            pattern: {
              value: /^\d+$/,
              message: "ID must be a number",
            }
          })} />


          <Label>Student Name:</Label>
          <Input {
            ...register('Student Name',{
              validate: value => /^\d+$/.test(value) || "The input must be number"
            })
          } />
        </LoginForm>
      </form>
      </FormLayout>
    </LoginLayout>
  )
}

export default Login;
