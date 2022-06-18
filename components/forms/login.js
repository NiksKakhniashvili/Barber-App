import React, { useState } from 'react'
import { useRouter } from 'next/router';
import {
  StyledButton,
  StyledInput,
  StyledForm,
  StyledErrorMessage
} from './formStyles'
import { useForm, validateInput } from '../../utils/useForm'


const Login = (props) => {
  const initialState = { email: '' };
  const [values, setValues] = useForm(initialState);
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const handleSubmit = (e) => {
    setErrors({})
    e.preventDefault();
    const errors = validateInput(values)

    if(Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    router.push('/home')

  };


  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>ავტორიზაცია</h1>
      
      <StyledInput
        placeholder="იმეილი"
        type={"text"}
        name="email"
        value={values.email}
        onChange={setValues}
      />
      {errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}

      <StyledButton>შესვლა</StyledButton>
    </StyledForm>
  )
}

export default Login