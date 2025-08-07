import React  from 'react';
import  PlaceList from '../components/PlaceList';

const UserPlaces = () => {

    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world!',
            coordinates: {
                lat: 40.7484474,
                lng: -73.9871516
            },
            address: '20 W 34th St, New York, NY 10001',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg'
        },
        {
            id: 'p2', 
            title: 'Statue of Liberty',
            description: 'One of the most iconic monuments in the United States!',
            coordinates: {
                lat: 40.6892,
                lng: -74.0445
            },
            address: 'Liberty Island, New York, NY 10004',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg'
        },
        {
            id: 'p3',
            title: 'Central Park',
            description: 'An urban oasis in the heart of New York City!',
            coordinates: {
                lat: 40.7829,
                lng: -73.9654
            },
            address: 'Central Park, New York, NY',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Central_Park_-_The_Pond_%2848377220157%29.jpg/1200px-Central_Park_-_The_Pond_%2848377220157%29.jpg'
        }
    ]
    return (
        <div>
            <PlaceList item = {DUMMY_PLACES} />
        </div>
    )
}

export default UserPlaces;