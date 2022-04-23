import React, { Component } from "react";
import styled from "styled-components";
import Main from "../Main"

class Content extends Component{
    render(){
        return(
            <Container>
                <Main />
            </Container>
        )
    }
}

const Container=styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 10%;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width: 738Px) {
        padding: 5%;
    }
`;

export default Content;