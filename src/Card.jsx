import "./Card.css"
export default function Card({ course }){
  const { id, name, image } = course
  return (
    <div className="card">
      <img src={image} alt="course image"/>
      <div className="card-info">
        <div className="card-id">{id}</div>
        <div className="card-name">{name}</div>
      </div>
      
    </div>
  )
}