import React from 'react';
import { Link } from 'react-router-dom';
import { Pace, WindupChildren } from 'windups';
import Opps from '../../assets/oppsNadaAqui01.png';

import './NotFound.css';
import ButtonEffect from '../../components/ButtonEffect/ButtonEffect';

const NotFound = () => (
  <div className="NotFound">
    <img src={Opps} className="opps" alt="Not Found" />

    <WindupChildren>
      {'Poxa desculpe. '}
      <Pace getPace={(char) => (char === ' ' ? 300 : 30)}>
        Não encontrei a página procurada.
      </Pace>
      <ButtonEffect as={Link} to="/" bgcolor="dark" color="secondary">
        <span>Volte para Home aqui</span>
      </ButtonEffect>
    </WindupChildren>
  </div>
);

export default NotFound;
