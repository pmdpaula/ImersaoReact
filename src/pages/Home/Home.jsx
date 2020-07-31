import React from 'react';
import BannerMain from '../../components/BannerMain/BannerMain';
import Carousel from '../../components/Carousel/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';

const Home = () => (
  <>
    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription="O que é Front-End? ..."
    />

    {
      dadosIniciais.categorias.map((category, index) => (
        <Carousel
          key={String(index)}
          ignoreFirstVideo={false}
          category={category}
        />
      ))
      }
  </>
);

export default Home;
