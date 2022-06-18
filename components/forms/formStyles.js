import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 60%;
  margin: 0 auto;

  h1 {
    color: #000000bf;
    text-align: center;
    font-size: 38px;
    margin-bottom: 50px;
  }
`


export const StyledInput = styled.input`
  font-size: 20px;
  margin: 5px 0;
  width: 100%;
  display: block;
  padding: 15px;
  border-radius: 1rem;
  border: none;
  background-color: #f2f3f4;

  box-shadow: 0 1rem 2rem rgba(#000, 0.2);

  &:focus {
    outline: none;
  }
`

export const StyledTextArea = styled.textarea`
  font-size: 20px;
  margin: 5px 0;
  width: 100%;
  display: block;
  padding: 15px;
  border-radius: 1rem;
  border: none;
  background-color: #f2f3f4;

  box-shadow: 0 1rem 2rem rgba(#000, 0.2);

  &:focus {
    outline: none;
  }
`

export const StyledButton = styled.button`
  width: 100%;
  background: blue;
  margin-top: 20px;
  outline: none;
  border: none;

  color: white;
  text-align: center;
  padding: 10px 15px;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  color: #fff;
  margin: 10px;
  background-size: 300% 300%;
  color: white;
  font-size: 1.4rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    to right,
    #895cf2 0%,
    #ffabf4 50%,
    #895cf2 100%
  );
  transition: 0.5s;
  margin-top: 2rem;
  &:hover {
    background-position: right center;
  }

  &:focus {
    outline: none;
  }
`

export const StyledErrorMessage = styled.p`
  font-size: 16px;
  margin: 5px 10px;
  color: #ff1919;
`