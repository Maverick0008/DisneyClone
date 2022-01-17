import React from "react";
import styled from "styled-components";
const Movies = () => {
  return (
    <Container>
      <h4>Recomended for you</h4>
      <Content>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/1c31bfabce9a9977b524f090923377f4b0a3016537fdb6ea7592dab3e87f5c4f/original"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/55856e5f183d5aa87f64c18470d6227381ea56c47de5e415d1afac073cba8574/original"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/0b2b144caa6df79709d171894570e804514c8f200a811a4dd58cd6bbb8e7f3a5/original"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/eaae3a6c628011823990144877d47bd3ca77e878011f64f079bae2b328581755/original"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: px solid rgba(249,249,249,0.1);
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  img {
    width: 100%;
    object-fit: cover;
  }
  &:hover  {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
  }
`;
