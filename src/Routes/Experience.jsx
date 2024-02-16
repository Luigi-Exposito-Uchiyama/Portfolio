import React, { useEffect, useState } from 'react';
import { ReactComponent as Experience } from '../Assets/experience.svg';
import styles from '../Components/Curriculo.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Teleperformance from '../Empresas/Teleperformance';
import ThiagoPessoa from '../Empresas/ThiagoPessoa';

const ExperiencePage = () => {
  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    function handleResize() {
      setShowSlider(window.innerWidth > 550);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    arrows: false,
  };

  return (
    <section>
      <div className={styles.titulo}>
        <Experience className={styles.icons} />
        <h1>Experience</h1>
      </div>

      <div className={styles.bgCurriculo}>
        {showSlider && (
          <Slider {...settings}>
            <Teleperformance />
            <ThiagoPessoa />
          </Slider>
        )}
        {!showSlider && (
          <div>
            <Teleperformance />
            <ThiagoPessoa />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperiencePage;
