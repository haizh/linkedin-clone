import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from "react-icons/fi";
import { data } from "../data";
const Lazy = () => {
  return (
    <Container>
      <Section>
        <article className="active-slide">
          <div></div>
          <div className="div-two"></div>
          <div className="div-three"></div>
        </article>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0;
  height: auto;
  background-color: #faf9f7;
  padding: 100px 0;
  /* border: 2px solid khaki; */
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100vw;
  height: 500px;
  max-width: 1124px;
  position: relative;
  display: flex;
  overflow: hidden;

  .btn-group {
    max-width: 300px;
    width: 100%;

    & > button {
      font-weight: 600;
      line-height: 32px;
      font-size: 16px;
      position: relative;
      background-color: white;
      border: 1px solid red;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  article {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    /* background-color: black; */

    div {
      width: 60%;
      height: 50px;
      background-color: white;
      margin: 10px;
    }

    .div-two {
      height: 300px;
    }
    .div-three {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 20px;
    }
  }

  h2 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    color: #2977c9;
    width: 45%;
    padding: 30px 0;
  }

  p {
    font-size: 32px;
    line-height: 40px;
    font-weight: 200;
    width: 50%;
    color: rgba(0, 0, 0, 0.9);
  }

  img {
    width: 100%;
    max-width: 400px;
    position: absolute;
    top: 0;
    right: 20px;
  }

  .last-slide {
    transform: translateX(-100%);
  }
  .next-slide {
    transform: translateX(100%);
  }

  .active-slide {
    /* opacity: 1; */
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    overflow: visible;
    height: 880px;

    h2 {
      width: 80%;
    }
    p {
      width: 90%;
    }
    img {
      top: 28rem;
      left: 0;
      display: block;
      margin: 0 auto;
    }
  }
`;

export default Lazy;
