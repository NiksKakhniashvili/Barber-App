import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  StyledButton,
  StyledInput,
  StyledForm,
  StyledErrorMessage,
} from "./formStyles";
import { useForm, validateInput } from "../../utils/useForm";

const Register = (props) => {
  const router = useRouter();
  const [registerAs, setRegisterAs] = useState('')

  const initialState = {
    name: "",
    surname: "",
    email: "",
    price: "",
    password: "",
    passwordRepeat: "",
  };

  const [values, setValues] = useForm(initialState);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    setErrors({});
    e.preventDefault();
    const errors = validateInput(values);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    router.push('/home')
  };


  const renderForms = () => {
    let comp

    if(registerAs === 'barber') {
      comp = (
        <>
          <StyledInput
            placeholder="სახელი"
            type={"text"}
            name="name"
            value={values.name}
            onChange={setValues}
          />
          {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
          <StyledInput
            placeholder="გვარი"
            type={"text"}
            name="surname"
            value={values.surname}
            onChange={setValues}
          />
          {errors.surname && (
            <StyledErrorMessage>{errors.surname}</StyledErrorMessage>
          )}
          <StyledInput
            placeholder="იმეილი"
            type={"text"}
            name="email"
            value={values.email}
            onChange={setValues}
          />
          {errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
          <StyledInput
            placeholder="ფასი"
            type={"number"}
            name="price"
            value={values.price}
            onChange={setValues}
          />
          <StyledInput
            placeholder="პაროლი"
            type={"password"}
            name="password"
            value={values.password}
            onChange={setValues}
          />
          {errors.password && (
            <StyledErrorMessage>{errors.password}</StyledErrorMessage>
          )}
          <StyledInput
            placeholder="გაიმეორეთ პაროლი"
            type={"password"}
            name="passwordRepeat"
            value={values.passwordRepeat}
            onChange={setValues}
          />
          {errors.passwordRepeat && (
            <StyledErrorMessage>{errors.passwordRepeat}</StyledErrorMessage>
          )}
        
        <StyledButton type="submit">რეგისტრაცია</StyledButton>
        </>
      )
      

    }

    if(registerAs === 'client') {
      comp = (
        <>
        <StyledInput
          placeholder="სახელი"
          type={"text"}
          name="name"
          value={values.name}
          onChange={setValues}
        />
        {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
        <StyledInput
            placeholder="პაროლი"
            type={"password"}
            name="password"
            value={values.password}
            onChange={setValues}
          />
          {errors.password && (
            <StyledErrorMessage>{errors.password}</StyledErrorMessage>
          )}

        <StyledButton type="submit">რეგისტრაცია</StyledButton>
      </>
      )
    }

    return comp
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>რეგისტრაცია</h1>


      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <StyledButton onClick={() => setRegisterAs('barber')}>ბარბერი</StyledButton>
        <StyledButton onClick={() => setRegisterAs('client')}>მომხმარებელი</StyledButton>
      </div>

      {renderForms()}

    </StyledForm>
  );
};

export default Register;
