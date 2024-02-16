import React from 'react';
import { ReactComponent as Certificado } from '../Assets/certification.svg';
import ResponsiveWebDevelopment from '../Assets/Responsive Web Development.png';
import FormaçãoSocial from '../Assets/Formação Social e Sustentabilidade.png';
import CSSFlexbox from '../Assets/CSS Flexbox.png';
import CSSGridLayout from '../Assets/CSS Grid Layout.png';
import HTMLeCSSparaIniciantes from '../Assets/HTML e CSS para Iniciantes.png';
import JavaScriptCompletoES6 from '../Assets/JavaScript Completo ES6+.png';
import ReactCompleto from '../Assets/React Completo.png';
import UIDesignAvançado from '../Assets/UI Design Avançado.png';
import UIDesignparaIniciantes from '../Assets/UI Design para Iniciantes.png';
import WordPressComoCMS from '../Assets/WordPress Como CMS.png';
import styles from '../Components/Curriculo.module.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CertificatesPage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    centerPadding: '30px',
    arrows: false,
  };

  return (
    <section>
      <div className={styles.titulo}>
        <Certificado className={styles.icons} />
        <h1>Certification</h1>
      </div>

      <div className={styles.bgCurriculo}>
        <div className={styles.certificados}>
          <h1>Fiap</h1>
          <Slider {...settings}>
            <div>
              <Link
                to="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/82454/497adcb897eb85d68b668b9acb0a1847/certificado.png"
                target="_blank"
              >
                <img
                  src={ResponsiveWebDevelopment}
                  alt="Responsive Web Development"
                />
                <p>Responsive Web Development</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/82422/df5093680615c5827e7bd4084e97f975/certificado.png"
                target="_blank"
              >
                <img
                  src={FormaçãoSocial}
                  alt="Formação Social e Sustentabilidade"
                />
                <p>Formação Social e Sustentabilidade</p>
              </Link>
            </div>
          </Slider>

          <h1 className={styles.separacao}>Origamid</h1>

          <Slider {...settings}>
            <div>
              <Link
                to="https://www.origamid.com/certificate/75a65166/"
                target="_blank"
              >
                <img src={CSSFlexbox} alt="CSS Flexbox" />
                <p>CSS Flexbox</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/2836fa02/"
                target="_blank"
              >
                <img src={CSSGridLayout} alt="CSS Grid Layout" />
                <p>CSS Grid Layout</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/ed087fcc/"
                target="_blank"
              >
                <img
                  src={HTMLeCSSparaIniciantes}
                  alt="HTML e CSS para Iniciantes"
                />
                <p>HTML e CSS para Iniciantes</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/6c1774b4/"
                target="_blank"
              >
                <img
                  src={JavaScriptCompletoES6}
                  alt="JavaScript Completo ES6+"
                />
                <p>JavaScript Completo ES6+</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/41782cf1/"
                target="_blank"
              >
                <img src={ReactCompleto} alt="React Completo" />
                <p>React Completo</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/67f4f769/"
                target="_blank"
              >
                <img src={UIDesignAvançado} alt="UI Design Avançado" />
                <p>UI Design Avançado</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/cc0a74bb/"
                target="_blank"
              >
                <img
                  src={UIDesignparaIniciantes}
                  alt="UI Design para Iniciantes"
                />
                <p>UI Design para Iniciantes</p>
              </Link>
            </div>

            <div>
              <Link
                to="https://www.origamid.com/certificate/c8302b0c/"
                target="_blank"
              >
                <img src={WordPressComoCMS} alt="WordPress Como CMS" />
                <p>WordPress Como CMS</p>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CertificatesPage;
