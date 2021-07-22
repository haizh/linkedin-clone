import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Categories() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <Section>
          <h2>Find open jobs and internships</h2>
          <Div>
            <p className="box-title">SUGGESTED SEARCHES</p>
            <List>
              <Links>Engineering</Links>
              <Links>Business Development</Links>
              <Links>Administrative Assistant</Links>
              <Links>Retail Associate</Links>
              <Links>Customer Service</Links>
              <Links>Operations</Links>
              <Links>Information Technology</Links>
              <Links>Marketing</Links>
              <Links>Human Resource</Links>
              <Links>Healthcare Swervices</Links>
              <Links>Program and Project Management</Links>
              {show && <HiddenLinks>Sales</HiddenLinks>}
              {show && <HiddenLinks>Accounting</HiddenLinks>}
              {show && <HiddenLinks>Consulting</HiddenLinks>}
              {show && <HiddenLinks>Education</HiddenLinks>}
              {show && <HiddenLinks>Arts and Design</HiddenLinks>}
              {show && <HiddenLinks>Entrepreneurship</HiddenLinks>}
              {show && (
                <HiddenLinks> Community and Social Services</HiddenLinks>
              )}
              {show && <HiddenLinks> Media and Communications</HiddenLinks>}
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
      </Container>
      <Container primary>
        <Section primary>
          <h2 primary>Post your job and find the people you need</h2>
          <Post>Post a job</Post>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0;
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.primary ? "#F1ECE5" : "#faf9f7")};
`;

const Section = styled.section`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.primary ? "baseline" : "initial")};
  padding: ${(props) => (props.primary ? "50px 0" : "200px 0px")};

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

  .category-link {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.796);
    border-radius: 25px;
    background-color: #e6e5e4;
    padding: 12px 20px;
    margin: 5px;
  }

  .hide-link {
    display: none;
  }

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

const Links = styled.a`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.796);
  border-radius: 25px;
  background-color: #e6e5e4;
  padding: 12px 20px;
  margin: 5px;

  &:hover {
    background-color: #999999;
    transition: all linear 190ms;
    text-decoration: underline;
  }
`;
const HiddenLinks = styled.a`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.796);
  border-radius: 25px;
  background-color: #e6e5e4;
  padding: 12px 20px;
  margin: 5px;

  &:hover {
    background-color: #999999;
    transition: all linear 190ms;
    text-decoration: underline;
  }
`;

const Post = styled.a`
  background-color: #e6e5e4;
  padding: 12px 20px;
`;
export default Categories;
