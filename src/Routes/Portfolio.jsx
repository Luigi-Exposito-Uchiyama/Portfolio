import React from 'react';
import { Link } from 'react-router-dom';

/* ACESSIBILIDADE */
import Button from '../Components/Botao';

/* IMAGENS */
import { ReactComponent as PortfolioImg } from '../Assets/portfolio.svg';

/* CSS */
import styles from '../Styles/Portfolio.module.css';
import title from '../Styles/Curriculo.module.css';

const Project = ({
  title,
  description,
  repositoryLink,
  projectLink,
  videoSource,
  videoPosition,
}) => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.tituloMobile}>{title}</h1>
      {videoPosition === 'left' && (
        <Link to={projectLink} target="_blank" rel="noopener noreferrer">
          <video className={styles.video} id="meuVideo" autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
          </video>
        </Link>
      )}
      <div className={styles.informacao}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.botoes}>
            {repositoryLink && (
              <Link
                className={styles.botao}
                to={repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <span className={styles.repositorio}>Repositório</span>
                </Button>
              </Link>
            )}
            <Link
              className={styles.botao}
              to={projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <span className={styles.link}>Ver Projeto</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {videoPosition === 'right' && (
        <Link to={projectLink} target="_blank" rel="noopener noreferrer">
          <video
            className={`${styles.video} ${styles.videoRight}`}
            id="meuVideo"
            autoPlay
            loop
            muted
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </Link>
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <section>
      <div className={title.titulo}>
        <PortfolioImg className={title.icons} />
        <h1>Portfólio</h1>
      </div>
      <Project
        title="Burguer Mania"
        description="Apresento o site da Burguer Mania, criado com React e integrado a uma API para fornecer dados dinâmicos sobre nossos hambúrgueres. O site oferece uma navegação prática e intuitiva, permitindo explorar o cardápio com descrições, ingredientes e imagens de cada hambúrguer, garantindo uma experiência envolvente e de qualidade."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/Burguer-Mania"
        projectLink="https://burguermania.vercel.app"
        videoSource="/Burguer Mania.mp4"
        videoPosition="right"
      />
      <Project
        title="Lavagem Aquarius"
        description="Apresento o site do Lava-Rápido Aquarius, uma plataforma virtual que oferece uma visão abrangente dos serviços de lavagem disponíveis, assim como sua localização conveniente para os clientes. Este site foi projetado para transmitir qualidade e praticidade, apresentando informações essenciais de forma clara e acessível aos visitantes."
        projectLink="https://lavagemaquarius.com"
        videoSource="/Lavagem Aquarius.mp4"
        videoPosition="left"
      />
      <Project
        title="Bikcraft"
        description="Desenvolvi meu segundo projeto para a Bikcraft como parte do curso na Origamid, onde apliquei os conhecimentos aprimorados em HTML, CSS e UI design. Com uma compreensão mais profunda das técnicas e práticas, o site da Bikcraft foi elaborado para transmitir a identidade e os valores da marca fictícia de bicicletas customizadas. Através de um design aprimorado e funcionalidades aprimoradas, busquei oferecer uma experiência visualmente atraente e altamente intuitiva para os visitantes."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/Bikcraft-2.0"
        projectLink="https://luigi-exposito-uchiyama.github.io/Bikcraft-2.0/"
        videoSource="/Bikcraft2.0.mp4"
        videoPosition="right"
      />
      <Project
        title="Haven Tranquility"
        description="Desenvolvi o projeto Haven Tranquility como parte de um trabalho acadêmico na faculdade. Este sistema, construído utilizando Next.js, está integrado a um sistema em Java e banco de dados para salvar o cadastro dos usuários. O Haven Tranquility foi concebido com o propósito de ajudar as pessoas com saúde mental, fornecendo dicas específicas para cada caso de usuário, visando auxiliar na solução de seus problemas mentais."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/Haven-Tranquility"
        projectLink="https://haven-tranquility.vercel.app"
        videoSource="/Haven Tranquility.mp4"
        videoPosition="left"
      />
      <Project
        title="Animais Fantásticos"
        description="Durante meu curso na Origamid, desenvolvi o projeto Animais Fantásticos com o objetivo de aprender sobre JavaScript. Este site é uma plataforma interativa que apresenta informações detalhadas sobre diversos animais, oferecendo uma experiência educativa e divertida para os usuários. Por meio deste projeto, pude aprimorar minhas habilidades em JavaScript e criar uma interface dinâmica e envolvente."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/Animais-Fantasticos"
        projectLink="https://luigi-exposito-uchiyama.github.io/Animais-Fantasticos/"
        videoSource="/AnimaisFantasticos.mp4"
        videoPosition="right"
      />
      <Project
        title="Bikcraft"
        description="Desenvolvi meu primeiro projeto para a Bikcraft como parte do início do curso na Origamid, marcando o ponto inicial da minha jornada no mundo do desenvolvimento web. Neste projeto inicial, estava dando os primeiros passos no aprendizado de HTML, CSS e UI design. Apesar da simplicidade, o site da Bikcraft representa o começo da minha jornada na criação de plataformas digitais, enquanto eu buscava capturar a essência e os valores da marca fictícia de bicicletas customizadas e acessórios."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/Bikcraft-1.0"
        projectLink="https://luigi-exposito-uchiyama.github.io/Bikcraft-1.0/"
        videoSource="/Bikcraft1.0.mp4"
        videoPosition="left"
      />
      <Project
        title="Wildbeast"
        description="Desenvolvi o site Wildbeast durante um curso avançado da Origamid, focado em aprofundar o conhecimento em CSS Grid Layout. Este projeto foi uma oportunidade para explorar e praticar técnicas avançadas desse recurso, resultando em um design dinâmico e responsivo. O Wildbeast representa não apenas uma evolução na minha habilidade em CSS Grid Layout, mas também na criação de interfaces web modernas e atraentes."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/Wildbeast"
        projectLink="https://luigi-exposito-uchiyama.github.io/Wildbeast/"
        videoSource="/Wildbeast.mp4"
        videoPosition="right"
      />
      <Project
        title="Flexblog"
        description="
        Desenvolvi o FlexBlog como parte de um curso da Origamid focado em explorar e dominar os conceitos de CSS Flexbox. Este projeto foi uma oportunidade para aprofundar meu conhecimento nessa poderosa técnica de layout, permitindo-me criar designs mais flexíveis e responsivos. O FlexBlog representa não apenas um aprendizado em CSS Flexbox, mas também uma evolução na minha capacidade de desenvolver interfaces web modernas e adaptáveis."
        repositoryLink="https://github.com/Luigi-Exposito-Uchiyama/FlexBlog"
        projectLink="https://luigi-exposito-uchiyama.github.io/FlexBlog/"
        videoSource="/Flexblog.mp4"
        videoPosition="left"
      />
    </section>
  );
};

export default Portfolio;
