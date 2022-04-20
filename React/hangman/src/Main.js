import React, { Component } from "react";
import styled from "styled-components";
import Image from "./components/Image";
import Word from "./components/Word";
import Info from "./components/Info";
import Letters from "./components/Letters";

class Main extends Component{
  render(){
    return(
        <Container>
            <LeftBox>
                <Image />
            </LeftBox>
            <RightBox>
                <Word />
                <Info />
                <Letters />
            </RightBox>
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

const LeftBox = styled.div`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 738Px) {
        display: none;
    }
`;

const RightBox = styled.div`
    flex: 3;
`;

export default Main;
