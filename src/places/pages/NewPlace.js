// Importing necessary modules, components, and custom validators
import React from "react";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
// Importing CSS styles for the component
import "./styles/PlaceForm.css";

const NewPlace = () =>{
    // Using the custom form hook "useForm" to manage the form state and input handling
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        },
    }, false)

    // Handler function for the form submission
    const placeSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs, "<--- form submit") // send this to backend
    };

    return(
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input 
                id="title"
                element="input" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]} // here we want to check the value the user entered is not empty .1
                errorText="Please enter a valid title"
                onInput={inputHandler}
            />
             <Input 
                id="description"
                element="textarea" 
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]} // here we want to check the value the user entered is not empty .1
                errorText="Please enter a valid description (at leat 5 characters)"
                onInput={inputHandler}
            />

            <Input 
                id="address"
                element="input" 
                label="Address" 
                validators={[VALIDATOR_REQUIRE()]} // here we want to check the value the user entered is not empty .1
                errorText="Please enter a valid address."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    )
}

export default NewPlace;

// .1: when we enter something in the input field the red color and the errorText disapears
//     but when we remove all the text from the input the red color and errorText apears again