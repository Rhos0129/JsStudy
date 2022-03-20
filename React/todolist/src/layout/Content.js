import React, { Component } from "react";
import styled from "styled-components";

class Content extends Component{
    render(){
        return(
            <Container></Container>
        )
    }
}

const Container=styled.div`
    padding-top : 2rem;
    padding-bottom: 7rem;
    padding-left: 10%;
    padding-right: 10%;
    height: auto;
    min-height: 100%;
`;

export default Content;