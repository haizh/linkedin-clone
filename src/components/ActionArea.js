import React from "react";
import styled from "styled-components";

function ActionArea() {
  return (
    <Container>
      <ActionCard>
        <h2>Connect with people</h2>
        <h2>Connect with people</h2>
        <p>find people you know</p>
        <p>find people you know</p>
      </ActionCard>
      <ActionCard>
        <h2>Connect with people</h2>
        <h2>Connect with people</h2>
        <p>find people you know</p>
        <p>find people you know</p>
      </ActionCard>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1124px;
  padding: 0;
  background-color: black;
  margin: 0 auto;
  display: flex;
`;

const ActionCard = styled.div`
  position: relative;
  height: 200px;
  width: 300px;
  margin: 0 10px;
  background-color: rebeccapurple;
`;

export default ActionArea;
