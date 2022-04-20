import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

class App extends Component{
  render(){
    return(
      <Container>
        <GlobalStyle />
        <Header title="Hangman" />
        <Content />
        <Footer />
      </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
  }

  html{
      position: relative;
      min-height: 100%;
  }

  body{
      background-color: white;
      min-height: 97vh;
      overflow: auto;
  }
`;

export default App;
