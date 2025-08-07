import React from "react";
import "./UserList.css";
import  UserItem from "./UserItem";;

const  UserList = (props) =>{

    if(props.items.length === 0){
        return (
            <div>
                <h1>No User found</h1>
            </div>
        )
    }else{
        return (
                <ul className="users-list">
                    {props.items.map((user) => (
                        <UserItem 
                            key={user.id} 
                            id={user.id} 
                            name={user.name} 
                            image = {user.image}
                            placesCount = {user.places}
                             />
                       
                    ))}
                </ul>
                );
        }

}

export default UserList;
