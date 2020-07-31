import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import bkgImg from '../../assets/noisy-texture02.png';

const Main = styled.main`
  background: #0d0d0d url(${bkgImg}) repeat;
  color: var(--white);
  flex: 1;
  padding-top: 60px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
  padding: ${paddingAll}`
}
`;

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.defaultProps = {
  paddingAll: 0,
};

PageDefault.propTypes = {
  children: PropTypes.element.isRequired,
  paddingAll: PropTypes.number,
};

export default PageDefault;
