import React from 'react';
import Opps from '../../assets/oppsNadaAqui01.png';
import { Link } from 'react-router-dom';
import { Pace, WindupChildren } from "windups";

import './NotFound.css';
import Button from '../../components/Button/Button';


export default () => (
  <div className="NotFound" >

    <WindupChildren >
      <img src={Opps} className="opps" alt="Not Found" />
      {"Poxa desculpe. "}
      <Pace getPace={(char) => (char === " " ? 100 : 10)}>
        {"Não encontrei a página procurada."}
      </Pace>
      <Button as={Link} to="/" style={{color: "var(--secondary)"}} >
        Volte para Home aqui
      </Button>
    </WindupChildren>
  </div>
)

