import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./styles/PlaceForm.css";

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
        title: "Emp. State  New York",
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

const UpdatePlace = () =>{
    const [isLoading, setIsLoading] = useState(true);

    // Extracting the "placeId" parameter from the URL
    const placeId = useParams().placeId;

    // Using the custom form hook "useForm" to manage the form state and input handling
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false,
        },
        description: {
            value: '',
            isValid: false,
        }
    })

    // Finding the place in the dummy data based on the "placeId" parameter
    const identifiedPlace = DUMMY_PLACE.find(p => p.id === placeId);
    // useEffect hook to set initial form data once the component is mounted
    useEffect(() =>{
        if(identifiedPlace){
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true,
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true,
                }
            }, true);
        }

        // Set loading state to false once the initial form data is set
        setIsLoading(false)
    }, [setFormData, identifiedPlace]);

    // Handler function for the form submission
    const placeUpdateSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs, "<----- formState.inputs in UpdatePlace.js")
    }

    // If the place is not found, show a message indicating it
    if(!identifiedPlace){
        return (
            <div className="center">
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        )
    }

    // If the form data is still loading, show a loading message
    if(isLoading){
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        )
    }
    return(
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id="title" 
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid title"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialIsValid={formState.inputs.title.isValid}
            />    

            <Input 
                id="description" 
                element="textarea" 
                type="text" 
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a valid description (min 5 characters)"
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialIsValid={formState.inputs.description.isValid}
            /> 

            <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
    );
};

export default UpdatePlace;