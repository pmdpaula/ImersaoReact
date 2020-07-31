import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import bkgImg from '../../assets/noisy-texture02.png';

const Main = styled.main`
  background: #0d0d0d url(${bkgImg}) repeat;
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const PageDefault = ({ children }) => (
  <>
    <Menu />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageDefault;
