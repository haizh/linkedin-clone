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
  flex-wrap: wrap;

  .logo {
    width: 70px;
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

  @media (max-width: 768px) {
    flex-direction: column;

    a {
      margin-left: 10px;
      padding: 0.2rem 0;
    }
  }
`;
export default Bottom;
