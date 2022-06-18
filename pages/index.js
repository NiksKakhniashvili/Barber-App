import React, { useState, useContext } from "react";
import styled from "styled-components";
import Login from "../components/forms/login";
import Register from "../components/forms/register";
// import { AuthContext } from "../context/authContext";

const AuthPage = () => {
  // const { status, user, students } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <StyledRightContainer>
        {isLogin ? (
          <Login />
        ) : (
          <Register />
        )}
        <StyledLinkText onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "არ ხართ დარეგისტრირებული? გაიარეთ რეგისტრაცია აქიდან"
            : "დაბრუნდით ავტორიზაციის გვერდზე"}
        </StyledLinkText>
      </StyledRightContainer>
      <StyledHalfImage />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledRightContainer = styled.div`
  height: 100%;
  /* background-image: linear-gradient(to right, #f0cf65 0%, #fff 60%); */
  align-content: center;

  display: grid;
`;

const StyledHalfImage = styled.div`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 100vh;
  width: 100%;
  background-image: url("https://www.pngkey.com/png/detail/230-2305498_barbershop-vector-barber-barber-shop-vector-png.png");
  /* background-size: contain; */
  background-repeat: no-repeat;
  box-shadow: 0 1rem 2rem rgba(#000, 0.2);
`;

const StyledLinkText = styled.div`
  margin: 20px;
  font-size: 18px;
  color: #000000bf;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #545454bf;
  }
`;

export default AuthPage;
