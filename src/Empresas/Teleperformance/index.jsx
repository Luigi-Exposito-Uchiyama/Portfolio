import React from 'react';
import TeleperformanceImg from '../../Assets/Teleperformance.png';
import styles from '../../Styles/Curriculo.module.css';
import geral from '../../App.module.css';

const Teleperformance = () => {
  return (
    <div className={styles.bgExperience}>
      <div className={styles.detalhes}>
        <img src={TeleperformanceImg} alt="Teleperformance" />
        <p>Jovem Aprendiz | Março/23 - Abril/24</p>
      </div>
      <div className={styles.descricao}>
        <p>
          <span className={geral.cor2}>
            - Atendimento ao Cliente via Chat Genesys Cloud:
          </span>{' '}
          Sou responsável por oferecer atendimento ao cliente por meio do
          sistema Genesys Cloud, garantindo uma experiência positiva.
        </p>

        <p>
          <span className={geral.cor2}>- Integração com Chatbot Watson:</span>{' '}
          No primeiro contato, o cliente interage com o chatbot Watson, que
          coleta informações iniciais. Assim que necessário, o chat é
          direcionado para mim para atendimento personalizado.
        </p>

        <p>
          <span className={geral.cor2}>- Registro de Interações:</span> Registro
          todas as interações com os clientes de forma precisa e detalhada no
          sistema Oracle Service Cloud. Isso ajuda a manter um histórico
          completo das conversas, facilitando a comunicação com outros
          departamentos responsáveis.
        </p>

        <p>
          <span className={geral.cor2}>
            - Identificação das Necessidades do Cliente:
          </span>{' '}
          Minha função principal é identificar as necessidades individuais de
          cada cliente e oferecer soluções rápidas e eficazes.
        </p>

        <p>
          <span className={geral.cor2}>
            - Garantia da Satisfação do Cliente:
          </span>{' '}
          Trabalho para assegurar a satisfação do cliente, ouvindo suas
          preocupações e tomando medidas adequadas para resolver seus problemas.
        </p>

        <p>
          <span className={geral.cor2}>
            - Contribuição para o Sucesso da Empresa:
          </span>{' '}
          Meu papel é fundamental para garantir a satisfação do cliente e
          contribuir para o sucesso global da empresa, mantendo altos padrões de
          atendimento e comunicação eficaz.
        </p>
      </div>
    </div>
  );
};

export default Teleperformance;
