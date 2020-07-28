import React from 'react';
import Logo from '../../assets/axethings-md.png';
import './Menu.css';
import Button from '../Button/Button';

export default () => {
  return (
    <nav className="Menu" >
      <a href="/" >
        <img className="Logo" src={Logo} alt="AxeThings Logo" />
      </a>
      
      <Button as="a" href="/" textButton="Novo Ví­deo" >
        Novo Vídeo
      </Button>
    </nav>
  )
}
