import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Categories() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Container>
        <Section>
          <h2>Find open jobs and internships</h2>
          <Div>
            <p className="box-title">SUGGESTED SEARCHES</p>
            <List>
              <a className="category-link" href="">
                Engineering
              </a>
              <a className="category-link" href="">
                Business Development
              </a>
              <a className="category-link" href="">
                Finance
              </a>
              <a className="category-link" href="">
                Administrative Assistant
              </a>
              <a className="category-link" href="">
                Retail Associate
              </a>
              <a className="category-link" href="">
                Customer Service
              </a>
              <a className="category-link" href="">
                Operations
              </a>
              <a className="category-link" href="">
                Information Technology
              </a>
              <a className="category-link" href="">
                Marketing
              </a>
              <a className="category-link" href="">
                Human Resource
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Healthcare Service
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Program and Project Management
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Sales
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Accounting
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Arts and Design
              </a>

              <a className={`category-link ${show && "hide-link"}`}>
                Community and Social Services
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Consulting
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Education
              </a>
              <a className={`category-link ${show && "hide-link"}`} href="">
                Entrepreneurship
              </a>

              <a className={`category-link ${show && "hide-link"}`}>
                Media and Communications
              </a>
              <button
                className={`toggle-btn ${!show && "btn-shift"}`}
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <p>
                    Show more <FiChevronDown />
                  </p>
                ) : (
                  <p>
                    Show less <FiChevronUp />
                  </p>
                )}
              </button>
            </List>
          </Div>
        </Section>
      </Container>
      <Container primary>
        <div className="job-post">
          <h2 className="post-text">
            Post your job and find the people you need
          </h2>
          <Post>Post a job</Post>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0;
  width: 100%;
  height: auto;
  /* background-color: #faf9f7; */
  background-color: ${(props) => (props.primary ? "#F1ECE5" : "#faf9f7")};
`;

const Section = styled.section`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => (props.primary ? "50px 0" : "200px 0px")};

  h2 {
    font-size: 48px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 60px;
    font-weight: 200;
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
    top: 17rem;
    left: 15px;
    color: rgba(0, 0, 0, 0.796);
    line-height: 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
  }

  .btn-shift {
    top: 32rem;
  }

  & > a:hover {
    background-color: #999999;
    transition: all linear 190ms;
    text-decoration: underline;
  }
`;

const Post = styled.a`
  background-color: #e6e5e4;
  padding-bottom: 0px !important;
`;
export default Categories;
