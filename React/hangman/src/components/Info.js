import React, { Component } from "react";
import styled from "styled-components";

class Info extends Component{
  render(){
    return(
      <Container>
          <Text>Left : 3 of 7</Text>
      </Container>
    )
  }
}

const Container = styled.div`
    text-align: right;
    color: var(--darkGray);
    margin: 1rem 0;
`;
const Text = styled.span``;

export default Info;