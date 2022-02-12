import React from "react";
import styled from "styled-components";

function StandardLink(props) {
<<<<<<< HEAD
  const { link, primary } = props;
  //   return <Links>{link}</Links>;
  return primary ? <Links primary>{link}</Links> : <Links>{link}</Links>;
=======
  const { link, primary, secondary } = props;
  //   return <Links>{link}</Links>;
  return primary ? (
    <Links primary>{link}</Links>
  ) : secondary ? (
    <Links secondary>{link}</Links>
  ) : (
    <Links>{link}</Links>
  );
>>>>>>> 52f984351d7309dac6cd9725717094540cc7479f
}

const Links = styled.a`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;
<<<<<<< HEAD
  color: rgba(0, 0, 0, 0.796);
  border-radius: 25px;
  background-color: ${(props) => (props.primary ? "transparent" : "#e6e5e4")};
=======
  // color: rgba(0, 0, 0, 0.796);
  color: ${(props) => (props.secondary ? "white" : "rgba(0, 0, 0, 0.796)")};
  border-radius: 25px;
  background-color: ${(props) =>
    props.primary ? "transparent" : props.secondary ? "#0073b1" : "#e6e5e4"};
>>>>>>> 52f984351d7309dac6cd9725717094540cc7479f
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
