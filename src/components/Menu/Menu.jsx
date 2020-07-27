import React from 'react';
import Logo from '../../assets/axetech01-lg.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink/ButtonLink';
import Button from '../Button/Button';

export default () => {
  return (
    <nav className="Menu" >
      <a href="/" >
        <img className="Logo" src={Logo} alt="AxeTech Logo" />
      </a>
      
      <Button as="a" href="/" className="ButtonLink" textButton="Novo VÃ­deo" >
        Novo Vídeo
      </Button>
    </nav>
  )
}
