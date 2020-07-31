import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonEffect = styled.button`
  position: relative;
  margin: 0;
  padding: 6px 8px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bgcolor === 'dark' ? 'black' : 'white')};
  /* border: 1px solid rgba(22, 76, 167, 0.6); */
  border: 0px;
  border-radius: 4px;
  color: ${(props) => `var(--${props.color})` || 'var(--primary)'};
  
  /* font-weight: 400; */
  /* font-size: 16px; */
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  box-shadow: ${(props) => (
    props.color === 'secondary'
      ? '0px 0px 3px 1px rgba(255,154,0,0.60)'
      : '0px 0px 3px 1px rgba(54,220,184,0.60)')
};

  & span {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    z-index: 20;
  }

  &:after {
    position: absolute;
    right: 0;
    left: 50%;
    transition: .5s;
    content: '';
    width: 0;
    bottom: 0;
    height: 2px;
    background: ${(props) => (
    props.color === 'secondary'
      ? 'var(--secondary)'
      : 'var(--primary)')
};
  }

  
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: ${(props) => (props.color === 'secondary'
    ? '0px 0px 3px 1px rgba(255,154,0,0.95)'
    : '0px 0px 3px 1px rgba(54,220,184,0.95)')};
    /* border-radius: 10px; */
    /* animation: rotate 0.7s ease-in-out both; */
  }

  &:hover:after, &:focus:after {
    left: 0;
    width: 100%;
  }
  
  &:hover, &:focus span {
    animation-delay: 0.06s;
  }
`;

ButtonEffect.defaultProps = {
  bgcolor: 'dark',
  color: 'primary',
};

ButtonEffect.propTypes = {
  bgcolor: PropTypes.oneOf(['dark', 'light']),
  color: PropTypes.string,
};

export default ButtonEffect;
