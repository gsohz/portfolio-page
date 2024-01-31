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
    <div className="container">
      <div>
        <img
          src="https://github.com/gsohz.png"
          className="logo liquid-shape"
          alt="Minha Foto"
        />
      </div>
      <div className="content">
        <span>Olá, me chamo</span>
        <h1>
          Gabriel <span className="blue">Souza.</span>
        </h1>
        <p>
          Sou tecnólogo em{' '}
          <strong className="pink">
            Análise e Desenvolvimento de Sistemas,
          </strong>{' '}
          atualmente estou estudando
          <strong className="blue"> Full-Stack</strong> focando nas tecnologias
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
        <p>Durante meus estudos tive contato com diversas tecnologias como:</p>

        <div className="cards">
          {knowledges.map(knowledge => {
            return (
              <div className="card">
                <span className="card-title">{knowledge.title}</span>
                {knowledge.content.map(info => {
                  return (
                    <div className="card-info">
                      <img
                        src={info.pic}
                        className="card-logo"
                        title={info.name}
                        alt={`logo ${info.name}`}
                      />
                      <strong className=""> {info.name} </strong>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
