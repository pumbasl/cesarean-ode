/** @jsx jsx */
import React from 'react';
import { jsx, Global, css } from '@emotion/react'

import Main from './Main';
import Wrapper from './components/Wrapper';
import CreateCode from './components/CreateCode';

const globalSyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
  body{
    background-color: rgb(236, 236, 236);
    font-family: 'Fredoka', sans-serif;
  }
`;

export default function App(){
  return(
    <Wrapper>
      <Global styles={globalSyles} />
      <Main />
      <CreateCode />
    </Wrapper>
  );
}