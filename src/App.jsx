import React from 'react';
import Menu from './components/Menu/Menu';
import BannerMain from './components/BannerMain/index';
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';
import dadosIniciais from './data/dados_iniciais.json'


function App() {

  return (
    <div style={{background: "#141414"}} >
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={`O que é Front-End? ...`}
      />

      {
      dadosIniciais.categorias.map((category, index) => {
        return (
          <Carousel
            key={index}
            // ignoreFirstVideo
            category={category}
            // category={dadosIniciais.categorias[0]}
          />
        )
      })
      }
      <Footer
        category={dadosIniciais.categorias[1]}
      />

    </div>
  );
}

export default App;
