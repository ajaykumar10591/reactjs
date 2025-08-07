import React from "react";
import Card from "../../UIElements/Card";
import "./PlaceItem.css";
import Button  from "../../shared/FormElement/Button";
const PlaceItem = props => {
 return (
    <li className="place-item">
      <Card className="place-item__content"> 
      <div className="place-item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="place-info">
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <h3>{props.address}</h3>
        <h3>{props.description}</h3>
      </div>
      <div className="place-actions">
        <Button inverse>View on Map</Button>
        <Button to = {`/places/${props.id}`}>Edit</Button>
        <Button danger>Delete</Button>
      </div>
      </Card>
    </li>
  );
};

export default  PlaceItem