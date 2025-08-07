import React from "react";
import Card from "../../UIElements/Card";
import "./PlaceItem.css";
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
        <button>View on Map</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      </Card>
    </li>
  );
};

export default  PlaceItem