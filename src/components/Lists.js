import React from "react";
import styled from "styled-components";

function Lists({ props }) {
  console.log(props);
  return (
    <Div>
      <ul>
        {props.map((prop, propIndex) => {
          if (propIndex == 0) {
            return <li className="heading">{prop}</li>;
          }
          return (
            <li>
              <a href="">{prop}</a>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}

const Div = styled.div`
  color: rgba(0, 0, 0, 0.9);
  // border: 2px solid brown;
  margin: 0 3rem;

  li {
    margin: 0.5rem 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    transition: all linear 190ms;
    color: #0073b1;
  }

  .heading {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

export default Lists;
