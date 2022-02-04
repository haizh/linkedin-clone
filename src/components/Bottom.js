import React from "react";
import styled from "styled-components";
import { bottom } from "../data";
import footer from "../assets/bottom-logo.PNG";

const Bottom = () => {
  return (
    <FooterBottom>
      <div className="img-div">
        <img src={footer} alt="" className="logo" />
      </div>
      {bottom.map((item, index) => {
        return (
          <a href="#" key={index}>
            {item}
          </a>
        );
      })}
    </FooterBottom>
  );
};

const FooterBottom = styled.div`
  display: flex;
  margin: 50px auto auto auto;
  max-width: 1024px;
  justify-content: space-between;
  background-color: white;

  .logo {
    width: 70%;
    // height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }

  a {
    color: inherit;
    font-size: 0.8rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    transition: all linear 190ms;
    color: #0073b1;
  }
`;
export default Bottom;
