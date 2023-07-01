import { Card } from "react-bootstrap"

const Player = (props) => {
  return (
    <div>
        <Card style={{ width: '17rem',  margin: 15}}>
            <Card.Img style={{ width: '100%',  height:'32vw', objectFit:'cover'}} variant="top" src={props.image} />
            {/* <img src={`../images/${props.img}`} className="card--image" /> */}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Team: {props.team}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Nationality:  {props.nationality}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Jersey Number: {props.jerseyNumber}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Age: {props.age}</Card.Subtitle>
              </Card.Body>
        </Card>
    </div>
  )
}

// Set default props
Player.defaultProps = {
  name: "Name",   
  team: "Team",
  nationality: "Nationality",
  jerseyNumber: "Jersey Number",
  age: "Age",
  image: "Image",
 };

export default Player