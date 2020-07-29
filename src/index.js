import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import Opps from './assets/oppsNadaAqui.png'

import Home from './pages/Home/Home.jsx';
import CadastroVideo from './pages/cadastro/Video/Video.jsx';
import CadastroCategoria from './pages/cadastro/Categoria/Categoria';

// import Menu from './components/Menu/Menu';
// import Footer from './components/Footer';
import PageDefault from './components/PageDefault/PageDefault';


const NotFound = () => (
    <>
    {/* <Menu /> */}
    <div style={{color: "var(--primary)", paddingTop: 10}}>
      <img className="NotFound" src={Opps} alt="Not Found" />
    </div>
    </>
)


ReactDOM.render(
  <BrowserRouter>
    <PageDefault>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={NotFound} />
      </Switch>
    </PageDefault>
  </BrowserRouter>,
  document.getElementById('root')
);

