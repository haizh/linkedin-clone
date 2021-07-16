import React, { useState } from "react";
import styled from "styled-components";

function Form() {
  const [show, setShow] = useState(true);
  return (
    <FormInput onSubmit>
      <input type="text" name="" id="" placeholder="Email or phone number" />
      <input type="password" name="" id="" placeholder="password" />
      <button
        onClick={(e) => {
          e.preventDefault();
          setShow(!show);
        }}
      >
        {show === true ? "Show" : "Hide"}
      </button>
      <a href="#">Forgot Password?</a>
    </FormInput>
  );
}

const FormInput = styled.form`
  display: flex;
  width: 500px;
  margin-top: 20px;
  flex-direction: column;

  & > input {
    max-width: 400px;
    width: 100%;
    padding-left: 10px;
    height: 48px;
    margin: 5px 0;
    background-color: #ffffff;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  input:focus {
    border: 2px solid rgb(10, 102, 194);
    background-color: rgb(232, 240, 254);
  }

  input::placeholder {
    font-size: 0.85rem;
    position: absolute;
    top: 10px;
  }
  & > :focus::placeholder {
    top: 5px;
    font-size: 0.75rem;
    transition-duration: 180ms;
  }

  & > button {
    width: 50px;
    margin-top: -45px;
    margin-left: 350px;
    background-color: transparent;
    border: none;
    font-size: inherit;
    color: gray;
    cursor: pointer;
    padding: 5px;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transition-duration: 200ms;
  }

  a {
    text-decoration: none;
    color: gray;
    margin-top: 20px;
  }

  a:hover {
    color: blue;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export default Form;
