import React from 'react';
import { Link } from 'react-router-dom';

/* ACESSIBILIDADE */
import styles2 from '../Button/Button.module.css';
import Button from '../Button';

/* IMAGENS */
import Teleperformance from '../../Assets/Teleperformance.png';
import ThiagoPessoaJoias from '../../Assets/ThiagoPessoaJoias.png';
import Fiap from '../../Assets/Fiap.png';
import Origamid from '../../Assets/Curso.png';

/* CSS */
import '../../App.module.css';
import styles from './Detalhes.module.css';

const Detalhes = () => {
  return (
    <section className={`container2 ${styles.carreira}`}>
      <div className={styles.curriculo}>
        <h1>Experience</h1>
        <p>
          Já fiz parte do time de algumas empresas e agora gostaria de
          compartilhar minha experiência, cada um proporcionando insights únicos
          e valiosos para o meu crescimento profissional.
        </p>
        <div className={styles.detalhes}>
          <div className={styles.iconsCurriculo}>
            <img
              src={Teleperformance}
              alt="Teleperformance"
              className={styles.iconsCurriculo2}
            />
            <img
              src={ThiagoPessoaJoias}
              alt="Thiago Pessoa Joias"
              className={styles.iconsCurriculo2}
            />
          </div>
          <Link to="/experience">
            <Button>
              Saiba Mais<span className={styles2.outraFont}>!</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles.curriculo}>
        <h1>Education</h1>
        <p>
          Nos últimos 21 anos, finalizei o Ensino Médio e me aprofundei em
          cursos de Front-End na Origamid. Agora, estou estudando ADS na FIAP
          para continuar minha jornada educacional.
        </p>
        <div className={styles.detalhes}>
          <div className={styles.iconsCurriculo}>
            <img src={Fiap} alt="Fiap" className={styles.iconsCurriculo2} />
            <img
              src={Origamid}
              alt="Origamid"
              className={styles.iconsCurriculo2}
            />
          </div>
          <Link to="/education">
            <Button>
              Saiba Mais<span className={styles2.outraFont}>!</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles.curriculo}>
        <h1>Certificates</h1>
        <p>
          Durante minha jornada de estudos, conquistei certificados que
          demonstram minha dedicação ao aprendizado, comprovando minha busca
          constante por conhecimento.
        </p>
        <div className={styles.detalhes}>
          <div className={styles.iconsCurriculo}>
            <img src={Fiap} alt="Fiap" className={styles.iconsCurriculo2} />
            <img
              src={Origamid}
              alt="Origamid"
              className={styles.iconsCurriculo2}
            />
          </div>
          <Link to="/certificates">
            <Button>
              Saiba Mais<span className={styles2.outraFont}>!</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Detalhes;
