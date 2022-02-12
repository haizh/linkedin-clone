import React, { useState } from "react";
import styled from "styled-components";
import footerHero from "../assets/footer-hero.png";
import StandardLink from "./StandardLink";
import FooterLinks from "./FooterLinks";

// console.log(imgS);

export const Footer = () => {
  return (
    <>
      <Container>
        <div>
          <p>Join your colleagues classmates and friends on Linkedin</p>
          <StandardLink link={"Get Started"} secondary={"secondary"} />
        </div>
      </Container>
      <FooterLinks />
    </>
  );
};
const Container = styled.section`
  width: 100%;
  display: flex;
  height: 700px;
  background-image: url(${footerHero});
  background-size: contain;
  background-repeat: no-repeat;
  // border: 2px solid red;

  div {
    max-width: 1124px;
    margin: 0 auto;
    padding: 2rem 10rem;
    // border: 2px solid pink;

    @media (max-width: 768px) {
      padding: 1rem;
    }

    p {
      padding-bottom: 3rem;
      font-size: 50px;
      color: black;
      font-weight: 200;
      line-height: 60px;

      @media (max-width: 768px) {
        font-size: 35px;
        line-height: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    background-image: none;
    height: auto;
    padding: 3rem 0;
  }
`;
