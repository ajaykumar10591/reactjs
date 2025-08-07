import React from "react";
import { Link } from 'react-router-dom';
import Avatar from "../../UIElements/Avatar";
import Card from "../../UIElements/Card";
import "./UserItem.css";

const UserItem = (props) => {   

    return (
        <li className="user-item">
            <Card>
                <Link to={`/${props.id}/places`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="user-content"> 
                        <Avatar image={props.image} alt={props.name} />
                        <div className="user-info">
                            <h2>{props.name}</h2>
                            <h3>{props.placesCount} Places</h3>
                        </div>   
                    </div>
                </Link>
            </Card>
        </li>
        
    )

}

export default UserItem;
