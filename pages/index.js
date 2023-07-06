import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function About() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h1 className="title"> Aline Morais de Oliveira </h1>
        <p className={styles.description}> Analista e Desenvolvedor de Sistemas </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Sobre</h3>
            <p>Atuante no mercado de T.I., com mais de 9 anos de experiência em desenvolvimento de software. 
                Me esforço para aprender continuamente e experimentar novas linguagens e estruturas. Eu tive 
                oportunidades de programar usando Java EE, Hibernate, Spring, Spring Boot, REST, QueryDSL, JavaScript, 
                TypeScript, AngularJs, JUnit entre outros. Utilizando das boas práticas de desenvolvimento de API’s e 
                aplicação de Clean code.

                Com uma ótima vida profissional em diversos produtos experimentando projetos ágeis e também projetos 
                tradicionais em cascata. Fiz parte de várias equipes de projetos, aprendi a me adaptar, a conviver e 
                a aceitar diferenças, comprometida em oferecer o melhor para cada equipe e colega.

                Comunicação fácil. Eu gosto de aprender e estou constantemente procurando novos desafios.
            </p>
          </div>
        </div>
      </main>
      
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}