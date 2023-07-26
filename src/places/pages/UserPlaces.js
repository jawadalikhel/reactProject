import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACE = [
    {
        id: "p1",
        title: "Empire State building",
        description: "A famouse building in New York",
        imageUrl: "https://www.publicdomainpictures.net/pictures/20000/nahled/empire-state-building.jpg",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Emp. State building New York",
        description: "A famouse building in New York",
        imageUrl: "https://www.publicdomainpictures.net/pictures/20000/nahled/empire-state-building.jpg",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: "u2"
    }
];

const UserPlaces = () =>{
    // Extracting the "userId" parameter from the URL
    const userId = useParams().userId;
    // Filtering the dummy data to get the places created by the user with the extracted "userId"
    const loadedPlaces = DUMMY_PLACE.filter(place => place.creator === userId);
    // Rendering the "PlaceList" component with the filtered places as the "items" prop
    return(
        <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces;