/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import CadastroVideo from './pages/cadastro/Video/Video';
import CadastroCategoria from './pages/cadastro/Categoria/Categoria';

// import Menu from './components/Menu/Menu';
// import Footer from './components/Footer';
import PageDefault from './components/PageDefault/PageDefault';

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
  document.getElementById('root'),
);
