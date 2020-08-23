import React from "react";
import styled from "styled-components";
import { colours } from "./styles/variables";

import Chat from './components/Chat';

const StyledApp = styled.div`
  background-image: url("./images/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: fixed;
  text-align: center;
  width: 100%;
`;

const StyledHeader = styled.div`
  background-color: ${colours.bgPrimary};
  height: 75px;
  margin: 0 0 30px;
  text-align: center;
  width: 100%;
`;

const StyledTitle = styled.h1`
  color: #fff;
  line-height: 75px;
  margin: 0;
  text-align: center;
  width: 100%;
`;

function App() {
  return (
    <StyledApp className="App">
      <StyledHeader>
        <StyledTitle>Chatty</StyledTitle>
      </StyledHeader>
      <Chat />
    </StyledApp>
  );
}


export default App
