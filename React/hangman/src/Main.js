import React, { Component } from "react";
import styled from "styled-components";

class Main extends Component{
  render(){
    return(
        <Container>
            Hello, World!
        </Container>
    )
  }
}

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;
    overflow-wrap: inherit;
`;

export default Main;
