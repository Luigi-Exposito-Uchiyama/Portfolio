import React from 'react';
import { ReactComponent as Perfil } from '../Assets/Perfil.svg';
import styles from '../Components/SobreMim.module.css';
import Detalhes from '../Components/Detalhes';
import Button from '../General/Button';

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
          <a
            className={styles.socialButton}
            href="/curriculo.pdf"
            download="Currículo - Luigi Uchiyama.pdf"
          >
            <Button>Meu Currículo</Button>
          </a>
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
