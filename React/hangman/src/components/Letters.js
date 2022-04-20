import React, { Component } from "react";
import styled from "styled-components";

class Letters extends Component{
  render(){
    return(
      <Container>
        <CharBtn>A</CharBtn>
        <CharBtn>B</CharBtn>
        <CharBtn>C</CharBtn>
        <CharBtn>D</CharBtn>
        <CharBtn>E</CharBtn>
        <CharBtn>F</CharBtn>
        <CharBtn>G</CharBtn>
        <CharBtn>H</CharBtn>
        <CharBtn>I</CharBtn>
        <CharBtn>J</CharBtn>
        <CharBtn>K</CharBtn>
        <CharBtn>L</CharBtn>
        <CharBtn>M</CharBtn>
        <CharBtn>N</CharBtn>
        <CharBtn>O</CharBtn>
        <CharBtn>P</CharBtn>
        <CharBtn>Q</CharBtn>
        <CharBtn>R</CharBtn>
        <CharBtn>S</CharBtn>
        <CharBtn>T</CharBtn>
        <CharBtn>U</CharBtn>
        <CharBtn>V</CharBtn>
        <CharBtn>W</CharBtn>
        <CharBtn disabled={true}>X</CharBtn>
        <CharBtn disabled={true}>Y</CharBtn>
        <CharBtn disabled={true}>Z</CharBtn>
      </Container>
    )
  }
}

const Container = styled.div`
    color: var(--Orange);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
    grid-gap: 10px;
    place-items: center;
    margin: 3rem 10px 10px 10px;
`;

const CharBtn = styled.button`
    font-size: large;
    font-weight: 800;
    color: white;
    background-color: var(--Orange);
    border-style: none;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    &:hover{
      outline: 3px solid var(--lightGray);
    }
    &[disabled]{
      background-color: var(--darkGray);
      outline: none;
    };
`;

export default Letters;