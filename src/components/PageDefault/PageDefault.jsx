import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import Footer from '../Footer';

import bkgImg from '../../assets/noisy-texture02.png';

const Main = styled.main`
  background: #0d0d0d url(${bkgImg}) repeat;
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
