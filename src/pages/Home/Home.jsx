import React, { useEffect, useState } from 'react';
import { WindupChildren, Pace } from 'windups';
import BannerMain from '../../components/BannerMain/BannerMain';
import Carousel from '../../components/Carousel/Carousel';
import categoriesRepository from '../../repositories/categories';

const Home = () => {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const showLoading = () => (
    <div style={{ padding: 'var(--paddingDefault)' }}>
      <p>Carregando...</p>
      <WindupChildren>
        <Pace getPace={(char) => (char === ' ' ? 20 : 5)}>
          Um momentinho e já vamos mostrar um monte das suas coisas legais...
        </Pace>
      </WindupChildren>
    </div>
  );

  return (
    <>

      {initialData.length === 0 && showLoading()}

      {initialData.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </>
  );
};

export default Home;
