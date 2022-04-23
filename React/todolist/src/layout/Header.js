import React, { Component } from "react";
import styled from "styled-components";
import "./common.css";

class Header extends Component {
  render(){
    return(
    <Container>
        <Subject>React</Subject>
        <Title>{this.props.title}</Title>
    </Container>
    )
  }
}

const Container = styled.div`
    padding: 10px;
    font-size: large;
    text-align: center;
    background-color: var(--mainColor);
    color: var(--subColor);
`;

const Title = styled.h1`
    margin-top: 8px;
`;

const Subject = styled.p`
    margin-bottom: 0;
    text-align: center;
`;

export default Header;