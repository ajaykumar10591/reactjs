import React from "react";
import Card from "../../UIElements/Card";
import PlaceItem from "./PlaceItem";
const PlaceList = props => {
    console.log(props.item);
    if(props.item.length === 0){
        return (
            <div>
                <Card className="place-item">
                    <div className="place-item__content">
                        <h2>No places found</h2>
                    </div>
                </Card>
            </div>
        )
        
    }

    
  return <ul className="place-list">

    {props.item.map(
     
        place => <PlaceItem 
        key={place.id} 
        id = {place.id}
        image = {place.imageUrl}
        description  =  {place.description} 
        address  =  {place.address} 
        title = {place.title}
        creator = {place.creator}
        coordinate = {place.coordinates} />
    )}

  </ul>
};

export default  PlaceList;