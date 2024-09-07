import React from 'react';
import ThiagoPessoaJoias from '../../Assets/ThiagoPessoaJoias.png';
import styles from '../../Styles/Curriculo.module.css';
import geral from '../../App.module.css';

const ThiagoPessoa = () => {
  return (
    <div>
      <div className={styles.bgExperience}>
        <div className={styles.detalhes}>
          <img src={ThiagoPessoaJoias} alt="Thiago Pessoa Joias" />
          <p>Freelancer | Ago/22 - Jan/23</p>
        </div>
        <div className={styles.descricao}>
          <p>
            <span className={geral.cor2}>
              - Atendimento Receptivo Multicanal:
            </span>{' '}
            Sou responsável pelo atendimento receptivo em diversos canais,
            incluindo WhatsApp, Instagram e atendimento presencial. Isso permite
            que a empresa esteja acessível aos clientes em diferentes
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
            Realizo o controle e gerenciamento das informações financeiras e de
            tarefas no sistema Conta Azul e no Trello, garantindo a precisão e
            organização dos dados.
          </p>

          <p>
            <span className={geral.cor2}>
              - Elaboração de Orçamentos e Cobrança:
            </span>{' '}
            Sou responsável pela criação de orçamentos para os clientes, bem
            como pelo acompanhamento e cobrança desses orçamentos. Isso ajuda a
            manter as finanças da empresa em ordem.
          </p>

          <p>
            <span className={geral.cor2}>
              - Suporte no Desenvolvimento do Site Interno:
            </span>{' '}
            Contribuo ativamente no processo de criação e desenvolvimento do
            site interno da empresa, oferecendo ideias e sugestões para melhorar
            seu desempenho e usabilidade. Isso garante uma presença online
            eficaz.
          </p>

          <p>
            <span className={geral.cor2}>- Meu Papel na Empresa:</span>{' '}
            Desempenho um papel crucial no suporte às operações diárias da
            empresa, desde o atendimento ao cliente até a organização interna e
            o desenvolvimento online. Minhas tarefas são essenciais para o
            sucesso e eficiência geral da empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThiagoPessoa;
