import React, { useState } from "react";
import styled from "styled-components";
import StandardLink from "./StandardLink";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Categories() {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Section>
        <h2>Find open jobs and internships</h2>
        <Div>
          <p className="box-title">SUGGESTED SEARCHES</p>
          <List>
            <StandardLink link={"Engineering"} />
            <StandardLink link={"Business Development"} />
            <StandardLink link={"Administrative Assistant"} />
            <StandardLink link={"Retail Associate"} />
            <StandardLink link={"Customer Service"} />
            <StandardLink link={"Operations"} />
            <StandardLink link={"Information Technology"} />
            <StandardLink link={"Marketing"} />
            <StandardLink link={"Human Resource"} />
            <StandardLink link={"Healthcare Services"} />
            <StandardLink link={"Program and Project Management"} />
            {show && <StandardLink link={"Sales"} />}
            {show && <StandardLink link={"Accounting"} />}
            {show && <StandardLink link={"Consulting"} />}
            {show && <StandardLink link={"Education"} />}
            {show && <StandardLink link={"Arts and Design"} />}
            {show && <StandardLink link={"Entrepreneurship"} />}
            {show && <StandardLink link={"Community and Social Services"} />}
            {show && <StandardLink link={"Media and Communications"} />}
            <button
              className={`toggle-btn ${show && "btn-shift"}`}
              onClick={() => setShow(!show)}
            >
              {show ? (
                <p>
                  Show less <FiChevronDown />
                </p>
              ) : (
                <p>
                  Show more <FiChevronUp />
                </p>
              )}
            </button>
          </List>
        </Div>
      </Section>
      <SubContainer>
        <Section primary>
          <h2 primary>Post your job and find the people you need</h2>
          <StandardLink link={"Post a Job"} primary={"primary"} />
        </Section>
      </SubContainer>
    </Container>
  );
}

const Container = styled.section`
  padding: 0;
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.primary ? "#F1ECE5" : "#faf9f7")};
`;

const SubContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1ece5;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.primary ? "baseline" : "initial")};
  padding: ${(props) => (props.primary ? "80px 0" : "200px 0px")};

  h2 {
    font-size: ${(props) => (props.primary ? "40px" : "48px")};
    color: ${(props) => (props.primary ? "#b24020" : "rgba(0, 0, 0, 0.9)")};
    line-height: ${(props) => (props.primary ? "50px" : "60px")};
    font-weight: ${(props) => (props.primary ? "400" : "200")};
    width: 35%;
    margin-right: 70px;
  }
`;

const Div = styled.div`
  width: 600px;
  flex-grow: 1;

  .box-title {
    padding: 12px;
    font-weight: 600;
    line-height: 20px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;

  .toggle-btn {
    position: absolute;
    top: 20rem;
    left: 15px;
    color: rgba(0, 0, 0, 0.796);
    line-height: 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .btn-shift {
    top: 32rem;
  }
`;

export default Categories;
