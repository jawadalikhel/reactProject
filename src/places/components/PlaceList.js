import React from "react";
import "./styles/PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = (props) =>{
    // If the "items" prop is an empty array, display a message and a button to create a new place
    if(props.items.length === 0){
        return(
            <div className="place-list center">
                <Card>
                    <h2>No Places Found. Maybe Create One?</h2>
                    <Button to="/places/new">Share Place</Button>
                </Card>
            </div>
        )
    }

    // If "items" prop contains one or more elements, display the list of places
    return(
        <ul className="place-list">
            {
                // Looping through each place item in the "items" array and rendering a PlaceItem component for each one
                props.items.map((place) =>{
                    return (
                        <PlaceItem 
                            key={place.id} 
                            id={place.id} 
                            image={place.imageUrl} 
                            title={place.title} 
                            description={place.description}
                            address={place.address}
                            creatorId={place.creator}
                            coordinates={place.location}
                        />
                    )
                })
            }
        </ul>
    )
}

export default PlaceList;