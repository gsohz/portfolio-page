import './App.css'
import imgJava from './assets/java-svgrepo-com.svg'
import imgJs from './assets/javascript-svgrepo-com.svg'
import imgPHP from './assets/php-svgrepo-com.svg'
import imgTs from './assets/typescript-logo-svgrepo-com.svg'
import imgMySQL from './assets/mysql-svgrepo-com.svg'
import imgMongo from './assets/mongodb-svgrepo-com.svg'
import imgReact from './assets/react.svg'
import imgHtml from './assets/html-5-svgrepo-com.svg'
import imgCss from './assets/css-3-svgrepo-com.svg'
import imgNodejs from './assets/nodejs-svgrepo-com.svg'
import imgSpringboot from './assets/icons8-spring-boot-480.png'
import imgLinkedin from './assets/linkedin-svgrepo-com.svg'
import imgGitHub from './assets/github-142-svgrepo-com.svg'
import imgCV from './assets/icons8-curriculum-64.png'
import Card from './components/Card/Card'
import pdfCV from './assets/Curriculo-Gabriel_Ferreira.pdf'

import Project from './components/Project/Project'
import StarsCanvas from './components/StarBackground/StarBackground'

function App() {
  const knowledges = [
    {
      title: 'Linguagens',
      content: [
        { name: 'Java', pic: imgJava },
        { name: 'Javascript', pic: imgJs },
        { name: 'PHP', pic: imgPHP },
        { name: 'Typescript', pic: imgTs }
      ]
    },
    {
      title: 'Banco de dados',
      content: [
        { name: 'MySQL', pic: imgMySQL },
        { name: 'MongoDB', pic: imgMongo }
      ]
    },
    {
      title: 'Front-End',
      content: [
        { name: 'React', pic: imgReact },
        { name: 'HTML', pic: imgHtml },
        { name: 'CSS', pic: imgCss }
      ]
    },
    {
      title: 'Back-End',
      content: [
        { name: 'Node.js', pic: imgNodejs },
        { name: 'Springboot', pic: imgSpringboot }
      ]
    }
  ]

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="section-portfolio">
            <div className="header-portfolio">
              <div className="header-portfolio-info">
                <span>Olá, me chamo</span>
                <h1 className="header-portfolio-name">
                  Gabriel <span className="blue">Souza.</span>
                </h1>
              </div>
              <div className="header-portfolio-pic">
                <div className="header-portfolio-pic-social">
                  <a
                    href="https://www.linkedin.com/in/gabsouza4/"
                    target="_blank"
                    title="Visitar LinkedIn"
                  >
                    <img
                      src={imgLinkedin}
                      className="logo-social-media"
                      alt="Logo LinkedIn"
                    />
                  </a>
                  <a
                    href="https://github.com/gsohz"
                    target="_blank"
                    title="Visitar GitHub"
                  >
                    <img
                      src={imgGitHub}
                      className="logo-social-media"
                      alt="Logo GitHub"
                    />
                  </a>
                  <a title="Download CV" href={pdfCV} download>
                    <img
                      src={imgCV}
                      className="logo-social-media logo-cv"
                      alt="Logo GitHub"
                    />
                  </a>
                </div>

                <img
                  src="https://github.com/gsohz.png"
                  className="logo liquid-shape"
                  alt="Minha Foto"
                />
              </div>
            </div>
            <p>
              Sou tecnólogo em{' '}
              <strong className="pink">
                Análise e Desenvolvimento de Sistemas,
              </strong>{' '}
              atualmente estou estudando
              <strong className="blue"> Full-Stack</strong> focando nas
              tecnologias
              <strong className="blue"> Java</strong> e{' '}
              <strong className="blue"> React.</strong>
            </p>
            <p>
              Com um ano de experiência em estágio de suporte técnico e
              desenvolvimento de software, desempenhei um papel fundamental no
              desenvolvimento de sites em PHP, na modelagem do banco de dados em
              MySQL, e assegurei a implementação e o funcionamento eficaz das
              aplicações em produção. Sou uma pessoa
              <strong className="pink"> proativa,</strong>
              <strong className="pink"> criativa,</strong> com
              <strong className="pink"> capacidade de adaptação,</strong>
              <strong className="pink"> aprendizado rápido</strong> e
              <strong className="pink"> compromisso com os prazos.</strong>
            </p>
          </div>

          <div className="section-portfolio">
            <h1>Meus conhecimentos</h1>
            <p>
              Durante meus estudos tive contato com diversas tecnologias como:
            </p>

            <div className="cards">
              {knowledges.map((knowledge, index) => {
                return <Card key={index} knowledge={knowledge} />
              })}
            </div>
          </div>

          <div className="section-portfolio">
            <h1>Meus projetos</h1>

            <div className="content-project">
              <Project />
            </div>
          </div>
        </div>
      </div>

      <StarsCanvas />
    </>
  )
}

export default App
