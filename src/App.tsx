import React, { useState } from "react";
import styled from "styled-components";
import { Navigation } from "./components/Navigation";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./shared/styles/GlobalStyles";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle/>
        <Routes>
          <Navigation/>
        </Routes>

    </Wrapper>
  );
};


const Wrapper = styled.div`
height: 100vh;
width: 100vw;
`