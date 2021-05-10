import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  ${props=>`
    font-size: 2.5vh;
    background: ${props.key? "white" : props.key}
    height: 100%;
    width: 100%;
    display: grid;
    text-align: center;
    align-items: center;
    border-radius: 1vh;
    ${props?.styles}
`}`

const Home = () => {

  return (
    <Wrapper styles={"border-radius:25vh;"}>
        Home
    </Wrapper>
  );
};

export default Home;