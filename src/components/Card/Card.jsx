import './Card.css'

export default function Card({ knowledge }) {
  return (
    <div className="card">
      <span className="card-title">{knowledge.title}</span>
      {knowledge?.content?.map((info, index) => {
        return (
          <div key={index} className="card-info">
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
}
