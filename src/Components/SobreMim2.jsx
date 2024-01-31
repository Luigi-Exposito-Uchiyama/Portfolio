import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Twitch } from '../Assets/twitch.svg';
import Insta from '../Assets/insta.png';
import { ReactComponent as Tiktok } from '../Assets/TikTok.svg';
import Controle from '../Assets/controle.png';
import { ReactComponent as Linkedin2 } from '../Assets/linkedin 2.0.svg';
import { ReactComponent as Outlook } from '../Assets/outlook.svg';
import { ReactComponent as Whatsapp2 } from '../Assets/wpp2.svg';
import Pc from '../Assets/pc.png';
import styles from './SobreMim2.module.css';

const SobreMim2 = () => {
  return (
    <section className={styles.sobreMim2}>
      <div className={styles.bgPc}>
        <p className={styles.descricao1}>
          Minha paixão pela tecnologia me leva a explorar um mundo de
          possibilidades. Adoro criar sites, design e produção de vídeos.
          Transformar isso em trabalho é gratificante, a diversão que tenho se
          reflete nos projetos. Compartilhar curiosidades sobre tecnologia me
          empolga, é uma forma especial de compartilhar conhecimento. A melhor
          parte? Ver a felicidade das pessoas ao receberem os projetos que criei
          para elas.
        </p>

        <div className={styles.redes}>
          <ul>
            <li>
              <Link
                to="https://www.linkedin.com/in/luigi-uchiyama/"
                target="_blank"
              >
                <Linkedin2 className={styles.redesIcons} />
                <p>https://www.linkedin.com/in/luigi-uchiyama/</p>
              </Link>
            </li>

            <li>
              <Link to="https://outlook.live.com/mail/0/" target="_blank">
                <Outlook className={styles.redesIcons} />
                <p>luigi_uchiyama@outlook.com</p>
              </Link>
            </li>

            <li>
              <Link to="https://wa.me/11957047874" target="_blank">
                <Whatsapp2 className={styles.redesIcons} />
                <p>(11) 95704-7874</p>
              </Link>
            </li>
          </ul>
          <img className={styles.pc} src={Pc} alt="Controle" />
        </div>
      </div>

      <div className={styles.bgControle}>
        <div className={styles.redes2}>
          <ul>
            <li>
              <Link to="https://www.twitch.tv/luigi_uchiyama" target="_blank">
                <Twitch className={styles.redesIcons} />
                <p>https://www.twitch.tv/luigi_uchiyama</p>
              </Link>
            </li>

            <li>
              <Link
                to="https://www.instagram.com/dev.luigiuchiyama/"
                target="_blank"
              >
                <img
                  src={Insta}
                  alt="Instagram"
                  className={styles.redesIcons}
                />
                <p>@dev.luigiuchiyama</p>
              </Link>
            </li>

            <li>
              <Link to="https://www.tiktok.com/@luigiuchiyama" target="_blank">
                <Tiktok className={styles.redesIcons} />
                <p>@luigiuchiyama</p>
              </Link>
            </li>
          </ul>
          <img className={styles.controle} src={Controle} alt="Pc" />
        </div>

        <p className={styles.descricao2}>
          Sabe uma coisa curiosa sobre mim? Eu adoro games! No meu tempo livre,
          gosto de curtir vários tipos de jogos, como FPS, RPG, aventura e jogos
          de corrida, entre outros. Gosto de jogar junto com meus amigos e
          também aproveito para fazer transmissões ao vivo dos meus jogos na
          Twitch.
        </p>
      </div>
    </section>
  );
};

export default SobreMim2;
