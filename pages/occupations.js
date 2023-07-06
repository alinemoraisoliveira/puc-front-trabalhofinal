import styles from '../styles/Occupations.module.css';
import Header from '../components/Header';

export default function Occupations() {
  return (
    <div className={styles.container}>      
      <Header />

      <main>  
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2> 2020 a atual </h2>
            <h3>Analista e Desenvolvedor de Sistemas · Banco Intermedium</h3>
            <p>
              - Desenvolvimento de API's utilizando: JavaEE, Hibernate, Spring Boot, REST, JUnit, PostgreSQL, serviços AWS (SQS, S3, DynamoDB, RDS) e utilizando das boas práticas de desenvolvimento e aplicação de Clean code. 
              - Desenvolvimento de aplicação PWA construída em javascript com Framework React, Redux, Redux saga, Materialize-ui, entre outros.
              - Metodologias ágeis.
            </p>
          </div>

          <div className={styles.card}>
            <h2> 2017 a 2020 </h2>
            <h3>Analista e Desenvolvedor de Sistemas (Alocado no Banco Central) · Cast group</h3>
            <p>
              - Desenvolvimento e manutenção de aplicações, utilizando: JavaEE, Hibernate, Spring Boot, REST, QueryDSL, JUnit, JavaScript, TypeScript, AngularJS, Bootstrap, DB2 database, entre outros. Utilizando das boas práticas de desenvolvimento de API’s e aplicação de Clean code.
              - Automação de testes utilizando o framework: Cucumber e ferramenta similar ao Concordion: SpecRunner.
              - Metodologias ágeis.
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