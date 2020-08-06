/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesActions from '../../api/actions/CategoriesActions';
import { hasDataLoaded, indexIsIqualToZero } from '../../constants';
import Loading from '../../components/Loading';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesActions
      .getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {Boolean(hasDataLoaded(initialData)) && <Loading />}

      {initialData.map((category, index) => {
        if (indexIsIqualToZero(index)) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].name}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />

              <Carousel ignoreFirstVideo category={initialData[0]} />
            </div>
          );
        }

        return <Carousel key={category.id} category={category} />;
      })}
    </PageDefault>
  );
}

export default Home;
