import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft, FiChevronsLeft } from "react-icons/fi";
import { data } from "../data";
const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = data.length - 1;
      }
      return newIndex;
    });
  };
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex > data.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <Container>
      <Section>
        <aside className="btn-group">
          <button type="button" onClick={prevSlide}>
            <FiChevronLeft
              style={{ position: "relative", top: "9px", fontSize: "2rem" }}
            />{" "}
            Previous
          </button>
          <button type="button" onClick={nextSlide}>
            Next{" "}
            <FiChevronRight
              style={{ position: "relative", top: "9px", fontSize: "2rem" }}
            />
          </button>
        </aside>
        {data.map((carousel, carouselIndex) => {
          const { title, image, body } = carousel;
          let position = "next-slide";
          if (carouselIndex === index) {
            position = "active-slide";
          }

          if (
            carouselIndex === index - 1 ||
            (index === 0 && carouselIndex === data.length - 1)
          ) {
            position = "last-slide";
          }
          //code explaination. the first consition makes sure that the first array item gets the active class
          //the OR condition, for the first block ansure that array items greater than zero would
          //always give the ones before them the class of last slide, while the second block ensures
          //that the array item 0 - 1 which we have specified to become the value of 3, gets the
          //last slide class

          return (
            <article className={position} key={carouselIndex}>
              <h2>{title}</h2>
              <p>{body}</p>
              <img src={image} alt="carousel" />
            </article>
          );
        })}
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0;
  height: auto;
  background-color: #faf9f7;
  padding: 100px 0;
  /* border: 2px solid khaki; */
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100vw;
  height: 500px;
  max-width: 1124px;
  position: relative;
  display: flex;
  overflow: hidden;

  .btn-group {
    max-width: 300px;
    width: 100%;

    & > button {
      font-weight: 600;
      line-height: 32px;
      font-size: 16px;
      position: relative;
      background-color: transparent;
      border: none;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  article {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }

  h2 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    color: #2977c9;
    width: 45%;
    padding: 30px 0;
  }

  p {
    font-size: 32px;
    line-height: 40px;
    font-weight: 200;
    width: 50%;
    color: rgba(0, 0, 0, 0.9);
  }

  img {
    width: 100%;
    max-width: 400px;
    position: absolute;
    top: 0;
    right: 20px;
  }

  .last-slide {
    transform: translateX(-100%);
  }
  .next-slide {
    transform: translateX(100%);
  }

  .active-slide {
    /* opacity: 1; */
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    overflow: visible;
    height: 880px;

    h2 {
      width: 80%;
    }
    p {
      width: 90%;
    }
    img {
      top: 28rem;
      left: 0;
      display: block;
      margin: 0 auto;
    }
  }
`;

export default Carousel;
