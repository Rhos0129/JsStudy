import React, { Component } from "react";
import styled from "styled-components";
import "./common.css";

class Footer extends Component{
  render(){
    return(
      <Container>
          <Text>@Rhos0129</Text>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: var(--Orange);
  bottom: 0;
  width: 100%;
  color: white;
  text-align: right;
`;

const Text = styled.p`
  padding: 15px;
`;

export default Footer;