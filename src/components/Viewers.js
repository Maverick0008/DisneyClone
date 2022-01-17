import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 4px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
  }
`;
