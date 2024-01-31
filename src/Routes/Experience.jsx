import React from 'react';
import Teleperformance from '../Assets/Teleperformance.png';
import ThiagoPessoaJoias from '../Assets/ThiagoPessoaJoias.png';
import { ReactComponent as Experience } from '../Assets/experience.svg';
import styles from '../Components/Curriculo.module.css';
import geral from '../App.module.css';

const ExperiencePage = () => {
  return (
    <section>
      <div className={styles.titulo}>
        <Experience className={styles.icons} />
        <h1>Experience</h1>
      </div>
      <div className={styles.bgCurriculo}>
        <div className={styles.texto}>
          <img src={Teleperformance} alt="Teleperformance" />
          <div>
            <p>
              <span className={geral.cor2}>
                - Atendimento ao Cliente via Chat Genesys Cloud:
              </span>{' '}
              Sou responsável por oferecer atendimento ao cliente por meio do
              sistema Genesys Cloud, garantindo uma experiência positiva.
            </p>

            <p>
              <span className={geral.cor2}>
                - Integração com Chatbot Watson:
              </span>{' '}
              No primeiro contato, o cliente interage com o chatbot Watson, que
              coleta informações iniciais. Assim que necessário, o chat é
              direcionado para mim para atendimento personalizado.
            </p>

            <p>
              <span className={geral.cor2}>- Registro de Interações:</span>{' '}
              Registro todas as interações com os clientes de forma precisa e
              detalhada no sistema Oracle Service Cloud. Isso ajuda a manter um
              histórico completo das conversas, facilitando a comunicação com
              outros departamentos responsáveis.
            </p>

            <p>
              <span className={geral.cor2}>
                - Identificação das Necessidades do Cliente:
              </span>{' '}
              Minha função principal é identificar as necessidades individuais
              de cada cliente e oferecer soluções rápidas e eficazes.
            </p>

            <p>
              <span className={geral.cor2}>
                - Garantia da Satisfação do Cliente:
              </span>{' '}
              Trabalho para assegurar a satisfação do cliente, ouvindo suas
              preocupações e tomando medidas adequadas para resolver seus
              problemas.
            </p>

            <p>
              <span className={geral.cor2}>
                - Contribuição para o Sucesso da Empresa:
              </span>{' '}
              Meu papel é fundamental para garantir a satisfação do cliente e
              contribuir para o sucesso global da empresa, mantendo altos
              padrões de atendimento e comunicação eficaz.
            </p>

            <p>- Jovem Aprendiz | Março/23 - Atual</p>
          </div>
        </div>

        <div className={styles.texto}>
          <img src={ThiagoPessoaJoias} alt="Thiago Pessoa Joias" />
          <div>
            <p>
              <span className={geral.cor2}>
                - Atendimento Receptivo Multicanal:
              </span>{' '}
              Sou responsável pelo atendimento receptivo em diversos canais,
              incluindo WhatsApp, Instagram e atendimento presencial. Isso
              permite que a empresa esteja acessível aos clientes em diferentes
              plataformas.
            </p>

            <p>
              <span className={geral.cor2}>
                - Agendamento e Organização de Tarefas:
              </span>{' '}
              Desempenho um papel fundamental no agendamento de reuniões e na
              organização das tarefas diárias. Isso contribui para a eficiência
              operacional e para o cumprimento de prazos importantes.
            </p>

            <p>
              <span className={geral.cor2}>
                - Controle no Sistema Conta Azul e Trello:
              </span>{' '}
              Realizo o controle e gerenciamento das informações financeiras e
              de tarefas no sistema Conta Azul e no Trello, garantindo a
              precisão e organização dos dados.
            </p>

            <p>
              <span className={geral.cor2}>
                - Elaboração de Orçamentos e Cobrança:
              </span>{' '}
              Sou responsável pela criação de orçamentos para os clientes, bem
              como pelo acompanhamento e cobrança desses orçamentos. Isso ajuda
              a manter as finanças da empresa em ordem.
            </p>

            <p>
              <span className={geral.cor2}>
                - Suporte no Desenvolvimento do Site Interno:
              </span>{' '}
              Contribuo ativamente no processo de criação e desenvolvimento do
              site interno da empresa, oferecendo ideias e sugestões para
              melhorar seu desempenho e usabilidade. Isso garante uma presença
              online eficaz.
            </p>

            <p>
              <span className={geral.cor2}>- Meu Papel na Empresa:</span>{' '}
              Desempenho um papel crucial no suporte às operações diárias da
              empresa, desde o atendimento ao cliente até a organização interna
              e o desenvolvimento online. Minhas tarefas são essenciais para o
              sucesso e eficiência geral da empresa.
            </p>
            <p>- Freelancer | Ago/22 - Jan/23</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
