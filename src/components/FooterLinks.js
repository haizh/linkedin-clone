import React from "react";
import Lists from "./Lists";
import styled from "styled-components";
import { general } from "../data";
import { browse } from "../data";
import business from "../data";
import { directories } from "../data";
import login from "../assets/login-logo.svg";

console.log(login);

function FooterLinks() {
  return (
    <Container>
      <div className="img-div">
        <img src={login} alt="" className="logo" />
      </div>
      <Lists props={general} />
      <Lists props={browse} />
      <Lists props={business} />
      <Lists props={directories} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  //   border: 2px solid red;
  justify-content: space-around;

  .img-div {
    padding-top: 0.5rem;
  }
  .logo {
    width: 90px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export default FooterLinks;
