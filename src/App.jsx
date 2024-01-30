import './App.css'

function App() {
  const langs = [
    { name: 'Java', pic: '' },
    { name: 'Javascript', pic: '' },
    { name: 'PHP', pic: '' },
    { name: 'Typescript', pic: '' }
  ]

  const dbs = [
    { name: 'MySQL', pic: '' },
    { name: 'MongoDB', pic: '' },
    { name: 'Java', pic: '' }
  ]

  const frontend = [
    { name: 'React', pic: '' },
    { name: 'HTML', pic: '' },
    { name: 'CSS', pic: '' }
  ]

  const backend = [
    { name: 'Node.js', pic: '' },
    { name: 'Springboot', pic: '' }
  ]

  const knowledges = [
    { name: 'API Rest', pic: '' },
    { name: 'Responsividade', pic: '' }
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
          <strong className="pink"> aprendizado rápido</strong> e tenho
          <strong className="pink"> compromisso com os prazos.</strong>
        </p>
        <p>
          Durante meus estudos tive contato com diversas tecnologias como:
          <div className="card">
            <span className="card-title">Linguagens</span>
            <strong className="blue"> Java, </strong>
            <strong className="blue">React, </strong>
            <strong className="blue">PHP, </strong>
            <strong className="blue">MySQL, </strong>
            <strong className="blue">MongoDB, </strong>
            <strong className="blue">Javascript, </strong>
            <strong className="blue">Typescript, </strong>
            <strong className="blue">HTML, </strong>
            <strong className="blue">CSS, </strong>
            <strong className="blue">Node.js, </strong>
            <strong className="blue">Springboot, </strong>
            <strong className="blue">API Rest </strong>e
            <strong className="blue"> Responsividade.</strong>
          </div>
        </p>
      </div>
    </div>
  )
}

export default App
