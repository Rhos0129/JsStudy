import React, { Component } from "react";
import styled from "styled-components";

class Word extends Component{
  render(){
    return(
        <Container>
          <Char>_</Char>
          <Char>P</Char>
          <Char>P</Char>
          <Char>_</Char>
          <Char>E</Char>
        </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    color: var(--Orange);
    text-align: center;
    font-size: 3rem;
    font-weight: bolder;
`;

const Char = styled.span`
`;

export default Word;