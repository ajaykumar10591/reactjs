import React from "react";
import UserList from "../components/UserList";  

const User = () => {

    const UserData = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://picsum.photos/200?random=1', // Unique dummy image URL
            places: 3
        },
        {
            id: 'u2',
            name: 'John Doe',
            image: 'https://picsum.photos/200?random=2', // Unique dummy image URL
            places: 5
        },
        {
            id: 'u3',
            name: 'Jane Smith',
            image: 'https://picsum.photos/200?random=3', // Unique dummy image URL
            places: 2
        },
        {
            id: 'u4',
            name: 'Alice Johnson',
            image: 'https://picsum.photos/200?random=4', // Unique dummy image URL
            places: 4
        },
        {
            id: 'u5',
            name: 'Bob Brown',
            image: 'https://picsum.photos/200?random=5', // Unique dummy image URL
            places: 1
        },
        {
            id: 'u6',
            name: 'Charlie Davis',
            image: 'https://picsum.photos/200?random=6', // Unique dummy image URL
            places: 6
        },
        {
            id: 'u7',
            name: 'Diana Evans',
            image: 'https://picsum.photos/200?random=7', // Unique dummy image URL
            places: 3
        },
        {
            id: 'u8',
            name: 'Ethan Harris',
            image: 'https://picsum.photos/200?random=8', // Unique dummy image URL
            places: 2
        },
        {
            id: 'u9',
            name: 'Fiona Clark',
            image: 'https://picsum.photos/200?random=9', // Unique dummy image URL
            places: 7
        },
        {
            id: 'u10',
            name: 'George Lewis',
            image: 'https://picsum.photos/200?random=10', // Unique dummy image URL
            places: 5
        },
        {
            id: 'u11',
            name: 'Dummy User',
            image: 'https://picsum.photos/200?random=11', // Unique dummy image URL
            places: 0
        },
    ]

    return <UserList items = {UserData}/>
}

export default User;