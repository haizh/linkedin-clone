import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <Container>
      <div>
        <iframe
          className="frame"
          width="100%"
          height="432"
          src="https://www.youtube.com/embed/EEikRQ58NwM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Lets step forward</p>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1128px;
  margin: auto;
  min-height: 700px;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(
    to right,
    white 0%,
    white 30%,
    ghostwhite 30%,
    ghostwhite 100%
  );

  div {
    width: 500px;
    height: 432px;
    overflow: hidden;
    align-self: center;
    border-radius: 2%;
  }

  p {
    color: rgb(178, 64, 32);
    align-self: center;
    font-size: 2.5rem;
    padding: 0 1.5rem;
  }
`;

export default Video;
