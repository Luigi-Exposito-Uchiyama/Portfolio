import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as PortfolioImg } from '../Assets/portfolio.svg';
import styles from '../Components/Curriculo.module.css';
import lavagemAquariusVideo from '../Assets/Lavagem Aquarius.mp4';

const Portfolio = () => {
  return (
    <section>
      <div className={styles.titulo}>
        <PortfolioImg className={styles.icons} />
        <h1>Portfólio</h1>
      </div>
      <div className={`${styles.bgCurriculo} ${styles.portfolio}`}>
        <Link to="https://lavagemaquarius.com" target="_blank">
          <video className={styles.video} id="meuVideo" autoPlay loop muted>
            <source src={lavagemAquariusVideo} type="video/mp4" />
          </video>
        </Link>
        <p>
          Criei e agora incluo no meu portfólio o site do
          <Link to="https://lavagemaquarius.com" target="_blank">
            Lava-Rápido Aquarius.
          </Link>
          Nele, concentro as informações essenciais sobre os excelentes serviços
          de lavagem oferecidos, bem como destaco a ótima localização para os
          clientes. Uma vitrine virtual que reflete qualidade e praticidade.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
