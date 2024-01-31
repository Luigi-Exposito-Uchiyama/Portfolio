import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SobreMim.module.css';
import Social from './RedesSociais.module.css';
import Instagram from '../Assets/Instagram.png';
import Github from '../Assets/Github.png';
import Whatsapp from '../Assets/Whatsapp.png';
import Linkedin from '../Assets/linkedin.png';
import { ReactComponent as Perfil } from '../Assets/Perfil.svg';
import Button from '../General/Button';
import TypingEffect from '../General/TypingEffect.jsx';
import '../App.module.css';

const SobreMim = () => {
  return (
    <main className={`container2 ${styles.intro}`}>
      <div className={styles.eu}>
        <TypingEffect />
        <p>
          Como um garoto apaixonado por Desenvolvimento, estudo e produzo
          conteúdo há mais de 2 anos.
        </p>
        <div className={styles.social}>
          <Link className={styles.socialButton} to="/contact">
            <Button>CONTACT ME</Button>
          </Link>
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
              <img className={Social.socialSvg} src={Github} alt="Github"></img>
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
    </main>
  );
};

export default SobreMim;
