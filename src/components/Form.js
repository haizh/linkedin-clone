/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";

function Form() {
  const [show, setShow] = useState(true);
  return (
    <FormInput onSubmit>
      <input type="text" name="" id="" placeholder="Email or phone number" />
      <input type="password" name="" id="" placeholder="password" />
      <button
        className="show-btn"
        onClick={(e) => {
          e.preventDefault();
          setShow(!show);
        }}
      >
        {show === true ? "Show" : "Hide"}
      </button>
      <a href="#">Forgot Password?</a>
      <Buttons primary>Sign In</Buttons>
      <Buttons>
        <img
          src="/images/google.svg"
          alt="google sign-in"
          className="google-sign-in"
        />
        Sign In with Google
      </Buttons>
    </FormInput>
  );
}

const FormInput = styled.div`
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

  .show-btn {
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

  .show-btn:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transition-duration: 200ms;
  }

  a {
    text-decoration: none;
    color: gray;
    margin: 20px 0;
  }

  a:hover {
    color: blue;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Buttons = styled.button`
  width: 100%;
  max-width: 425px;
  height: 48px;
  margin: 5px 0;
  position: relative;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  transition: 180ms;
  cursor: pointer;
  border: ${(props) => (props.primary ? "none" : "1px solid rgba(0,0,0,0.6)")};
  border-radius: 20px;
  background: ${(props) => (props.primary ? "#0073b1;" : "white")};
  color: ${(props) => (props.primary ? "white" : "gray")};

  &:hover {
    background: ${(props) => (props.primary ? "#004182" : "rgba(0,0,0,0.2)")};
    border: ${(props) =>
      props.primary ? "null" : "1px solid rgba(0,0,0,0.9)"};
    color: ${(props) => (props.primary ? "null" : "initial")};
    transition: 180ms;
  }

  .google-sign-in {
    position: absolute;
    left: 70px;
    top: 10px;
  }
`;

export default Form;
