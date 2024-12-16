import React from "react";
import styled from "styled-components";

function Banner({ textHolder }) {
  return (
    <Wrapper>
      <h2> {textHolder} </h2>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://plus.unsplash.com/premium_photo-1678375722686-c7ea507c3003?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    display: inline;
    padding-left: 1rem;
    color: white;
    border-left: 5px solid white;
  }

  p {
    color: brown;
  }
`;
