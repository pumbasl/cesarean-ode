import React from 'react';
import { Global, css } from '@emotion/react'

import Main from './Main';
import Wrapper from './components/Wrapper';
import Code from './components/Code';
import Result from './components/Result';

const globalSyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
  body{
    background-color: #261C2C;
    font-family: 'Fredoka', sans-serif;
  }
`;

export default function App(){
  return(
    <Wrapper>
      <Global styles={globalSyles} />
      <Main />
      <Code />
      <Result />
    </Wrapper>
  );
}