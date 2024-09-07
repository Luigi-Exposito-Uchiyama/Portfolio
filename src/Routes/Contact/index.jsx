import React from 'react';
import { Link } from 'react-router-dom';

/* IMAGENS */
import Twitch from '../../Assets/twitch.svg';
import Github from '../../Assets/Github2.svg';
import Tiktok from '../../Assets/Tiktok2.svg';
import Linkedin from '../../Assets/linkedin 2.0.svg';
import Gmail from '../../Assets/Gmail.svg';
import Insta from '../../Assets/insta2.svg';
import Whats from '../../Assets/wpp.svg';

/* CSS */
import styles from '../../Styles/RedesSociais.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.card}>
        <Link
          to="https://www.twitch.tv/luigi_uchiyama"
          className={`${styles.socialContainer} ${styles.containerSeven}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Twitch} alt="Twitch"></img>
        </Link>

        <Link
          to="https://github.com/Luigi-Exposito-Uchiyama"
          className={`${styles.socialContainer} ${styles.containerEight}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Github} alt="Github"></img>
        </Link>

        <Link
          to="https://www.tiktok.com/@luigiuchiyama"
          className={`${styles.socialContainer} ${styles.containerSix}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Tiktok} alt="Tiktok"></img>
        </Link>

        <Link
          to="https://www.linkedin.com/in/luigi-uchiyama/"
          className={`${styles.socialContainer} ${styles.containerNine}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Linkedin} alt="Linkedin"></img>
        </Link>

        <Link
          to="https://mail.google.com/mail/u/0/#inbox"
          className={`${styles.socialContainer} ${styles.containerTen}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Gmail} alt="Gmail"></img>
        </Link>

        <Link
          to="https://www.instagram.com/dev.luigiuchiyama/"
          className={`${styles.socialContainer} ${styles.containerFive}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Insta} alt="Insta"></img>
        </Link>

        <Link
          to="https://wa.me/11957047874"
          className={`${styles.socialContainer} ${styles.containerEleven}`}
          target="_blank"
        >
          <img className={styles.socialSvg} src={Whats} alt="Whats"></img>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
