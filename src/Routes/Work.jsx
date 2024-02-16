import React from 'react';
import { ReactComponent as Perfil } from '../Assets/Perfil.svg';
import styles from '../Components/SobreMim.module.css';
import styles2 from '../General/Button.module.css';
import Detalhes from '../Components/Detalhes';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section>
      <main className={`container2 ${styles.intro}`}>
        <div className={`${styles.eu} ${styles.eu2}`}>
          <h1>Descrição</h1>
          <p>
            Minha jornada teve início na curiosidade e hoje se reflete em
            habilidades concretas, abrangendo desde HTML5, CSS3, SASS e
            JavaScript, até um sólido domínio de Python, Java e design de UI/UX.
            Unindo essa paixão pela tecnologia com minha busca constante por
            aprendizado, estou preparado para enfrentar desafios e oferecer uma
            contribuição significativa no campo do desenvolvimento Full Stack.
          </p>
          <button className={styles2.button}>
            <Link to="/contact">
              CONTACT ME<span className={styles2.outraFont}>!</span>
            </Link>
          </button>
        </div>
        <div>
          <Perfil className={styles.foto} />
        </div>
      </main>
      <div>
        <Detalhes />
      </div>
    </section>
  );
};

export default Work;
