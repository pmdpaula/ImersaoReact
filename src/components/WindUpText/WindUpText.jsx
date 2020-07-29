import React from "react";
import { useWindupString, CharWrapper } from "windups";
import styled from "styled-components";

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
const SpookyChar = ({children}) => {
  return <span className={fadeInAnimationStyle}>{children}</span>
}


export default (props) => {
  const [text] = useWindupString(props.text);
  return (
    <div>
      <CharWrapper element={SpookyChar}>
        {text}
      </CharWrapper>
    </div>
  );
};

// export default SpookyChar;