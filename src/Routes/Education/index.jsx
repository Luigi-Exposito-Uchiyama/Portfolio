import React from 'react';

/* IMAGENS */
import Fiap from '../../Assets/Fiap.png';
import Origamid from '../../Assets/Curso.png';
import Education from '../../Assets/education.png';

/* CSS */
import styles from '../../Styles/Curriculo.module.css';

const EducationPage = () => {
  return (
    <section>
      <div className={styles.titulo}>
        <img src={Education} alt="education" className={styles.icons} />
        <h1>Education</h1>
      </div>

      <div className={styles.bgCurriculo}>
        <div className={styles.texto}>
          <img src={Fiap} alt="Fiap" />
          <div>
            <p>
              Na FIAP, estou atualmente cursando Análise e Desenvolvimento de
              Sistemas, uma jornada que tem enriquecido minha compreensão dos
              detalhes tecnológicos e aprimorado minhas habilidades na área.
            </p>
          </div>
        </div>
        <div className={styles.texto}>
          <img src={Origamid} alt="origamid" />
          <div>
            <p>
              Foi no curso da Origamid que tive meu primeiro contato com o mundo
              Full Stack, o que despertou minha paixão pela programação. Além
              disso, obtive sucesso na conclusão dos pequenos cursos que
              participei, obtendo certificados que atestam minha dedicação e
              aprendizado nessa área emocionante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
