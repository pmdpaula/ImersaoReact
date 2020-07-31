import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import Logo from '../../assets/axethings-02-md.png';
import ButtonEffect from '../ButtonEffect/ButtonEffect';

export default () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="AxeThings Logo" />
    </Link>

    {/* <Button as={Link} to="/cadastro/video" >
        Novo Vídeo
      </Button> */}

    <ButtonEffect as={Link} to="/cadastro/video" bgcolor="dark" color="primary">
      <span>Novo Vídeo</span>
    </ButtonEffect>
  </nav>
);
