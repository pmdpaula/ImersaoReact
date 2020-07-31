import React from 'react';
import { useWindupString, CharWrapper } from 'windups';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Our animation CSS. A slow fade in.
const fadeInAnimationStyle = styled.p`
@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: fadeIn;
  animation-duration: 3s;
  animation-iteration-count: 1;
`;

// A component to wrap around each character.
const SpookyChar = ({ children }) => <span className={fadeInAnimationStyle}>{children}</span>;

const WindUpText = ({ textWind }) => {
  const [text] = useWindupString(textWind);
  return (
    <div>
      <CharWrapper element={SpookyChar}>
        {text}
      </CharWrapper>
    </div>
  );
}

SpookyChar.propTypes = {
  children: PropTypes.element.isRequired,
};

WindUpText.propTypes = {
  textWind: PropTypes.string.isRequired,
};

export default WindUpText;
