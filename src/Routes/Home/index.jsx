import React from 'react';
import { Link } from 'react-router-dom';

/* ACESSIBILIDADE */
import Detalhes from '../../Components/Detalhes';
import Button from '../../Components/Button';
import TypingEffect from '../../Components/TypingEffect';

/* IMAGENS */
import Instagram from '../../Assets/Instagram.png';
import Github from '../../Assets/Github.png';
import Whatsapp from '../../Assets/Whatsapp.png';
import Linkedin from '../../Assets/linkedin.png';
import { ReactComponent as Perfil } from '../../Assets/Perfil.svg';

/* CSS */
import '../../App.module.css';
import styles from './Home.module.css';
import Social from '../../Styles/RedesSociais.module.css';

const Home = () => {
  return (
    <section>
      <div className={styles.intro}>
        <div className={styles.eu}>
          <TypingEffect />
          <p>
            Como um garoto apaixonado por Desenvolvimento, estudo e produzo
            conteúdo há mais de 2 anos.
          </p>
          <div className={styles.social}>
            <a
              className={styles.socialButton}
              href="/curriculo.pdf"
              download="Currículo - Luigi Uchiyama.pdf"
            >
              <Button>
                <span className={styles.download}>Meu Currículo</span>
              </Button>
            </a>

            <div className={Social.card}>
              <Link
                to="https://www.instagram.com/dev.luigiuchiyama/"
                className={`${Social.socialContainer} ${Social.containerOne}`}
                target="_blank"
              >
                <img
                  className={Social.socialSvg}
                  src={Instagram}
                  alt="Instagram"
                ></img>
              </Link>

              <Link
                to="https://wa.me/11957047874"
                className={`${Social.socialContainer} ${Social.containerTwo}`}
                target="_blank"
              >
                <img
                  className={Social.socialSvg}
                  src={Whatsapp}
                  alt="Whatsapp"
                ></img>
              </Link>

              <Link
                to="https://github.com/Luigi-Exposito-Uchiyama"
                className={`${Social.socialContainer} ${Social.containerThree}`}
                target="_blank"
              >
                <img
                  className={Social.socialSvg}
                  src={Github}
                  alt="Github"
                ></img>
              </Link>

              <Link
                to="https://www.linkedin.com/in/luigi-uchiyama/"
                className={`${Social.socialContainer} ${Social.containerFour}`}
                target="_blank"
              >
                <img
                  className={Social.socialSvg}
                  src={Linkedin}
                  alt="Linkedin"
                ></img>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Perfil className={styles.foto} />
        </div>
      </div>

      <Detalhes />

      <div className={styles.bgDados}>
        <h1>Minhas Conquistas</h1>
        <div className={styles.dados}>
          <p>
            <span className={styles.tamanho}>+1</span>
            <span>graduação</span>
          </p>
          <p>
            <span className={styles.tamanho}>+2</span>
            <span>experiências</span>
          </p>
          <p>
            <span className={styles.tamanho}>+7</span>
            <span>projetos</span>
          </p>
          <p>
            <span className={styles.tamanho}>+10</span>
            <span>certificados</span>
          </p>
          <p>
            <span className={styles.tamanho}>+12</span>
            <span>cursos</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
