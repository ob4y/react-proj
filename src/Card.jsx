import "./Card.css"
export default function Card({ course }){
  const { id, name, image, postDate } = course
  return (
    <div className="card">
      <img src={image} alt="course image"/>
      <div className="card-info">
        <div className="row-card-name">
          <div className="card-id">{id}</div>
          <span>{`Posted on: ${postDate}`}</span>
        </div>
        <div className="card-name">{name}</div>
      </div>
      
    </div>
  )
}