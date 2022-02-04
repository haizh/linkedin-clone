import React, { useState } from "react";
import styled from "styled-components";
import footerHero from "../assets/footer-hero.png";
import StandardLink from "./StandardLink";

// console.log(imgS);

export const Footer = () => {
  return (
    <Container>
      <div>
        <p>Join your colleagues classmates and friends on Linkedin</p>
        <StandardLink link={"Get Started"} secondary={"secondary"} />
      </div>
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  display: flex;
  height: 700px;
  background-image: url(${footerHero});
  background-size: contain;
  background-repeat: no-repeat;

  div {
    max-width: 1124px;
    border: 2px solid green;
    margin: 0 auto;
    padding: 2rem 10rem;

    p {
      padding-bottom: 3rem;
      font-size: 50px;
      color: #2977c9;
      font-weight: 200;
      line-height: 60px;
    }
  }
`;
