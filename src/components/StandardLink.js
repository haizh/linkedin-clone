import React from "react";
import styled from "styled-components";

function StandardLink(props) {
  const { link, primary } = props;
  //   return <Links>{link}</Links>;
  return primary ? <Links primary>{link}</Links> : <Links>{link}</Links>;
}

const Links = styled.a`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.796);
  border-radius: 25px;
  background-color: ${(props) => (props.primary ? "transparent" : "#e6e5e4")};
  padding: 12px 20px;
  border: ${(props) => (props.primary ? " 1px solid black" : "none")};
  margin: 5px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#e6e5e4" : "#888888")};
    transition: all linear 190ms;
    text-decoration: underline;
  }
`;

export default StandardLink;
