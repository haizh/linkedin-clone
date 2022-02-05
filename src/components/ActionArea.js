import React from "react";
import styled from "styled-components";
import people from "../assets/people-one.svg";
import peopleTwo from "../assets/people-two.svg";
import StandardLink from "./StandardLink";

function ActionArea() {
  return (
    <Container>
      <ActionCard>
        <img src={people} alt="people" className="people-img" />
        <Div>
          <h2>Connect with people who can help</h2>
          <StandardLink link={"Find People you Know"} primary={"primary"} />
        </Div>
      </ActionCard>
      <ActionCard>
        <img src={peopleTwo} alt="people2" className="people-img" />
        <Div>
          <h2>Learn the skills that can help you now</h2>
          <StandardLink link={"Find People you Know"} primary={"primary"} />
        </Div>
      </ActionCard>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1124px;
  padding: 0;
  /* background-color: black; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 7rem 0;
`;

const ActionCard = styled.div`
  position: relative;
  height: auto;
  width: 500px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */

  .people-img {
    width: 300px;
    padding-bottom: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 15px 0;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Div = styled.div`
  width: inherit;
  height: auto;

  h2 {
    font-size: 48px;
    line-height: 60px;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.9);
    padding-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 35px;
      line-height: 40px;
    }
  }
`;

export default ActionArea;
