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
        title: "Empire State building",
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
    // return the user's id from the url
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACE.filter(place => place.creator === userId);
    return(
        <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces;