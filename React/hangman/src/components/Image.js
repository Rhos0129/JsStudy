import React, { Component } from "react";
import styled from "styled-components";

class Image extends Component{
  render(){
    return(
        <Container>
            <img src={ require('../images/image0.png') } />
        </Container>
    )
  }
}

const Container = styled.div``;

export default Image;