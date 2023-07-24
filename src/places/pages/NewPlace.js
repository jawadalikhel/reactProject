import React, {useCallback, useReducer} from "react";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import "./styles/NewPlace.css";

const formReducer = (state, action) =>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs){
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                }else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return{
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
}
const NewPlace = () =>{

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) =>{
        dispatch({
            type: 'INPUT_CHANGE',
            value: value, 
            isValid: isValid, 
            inputId: id
        })
    },[]); // useCallback is a react Hook

    return(
        <form className="place-form">
            <Input 
                id="title"
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]} // here we want to check the value the user entered is not empty .1
                errorText="Please enter a valid title"
                onInput={inputHandler}
            />
             <Input 
                id="description"
                element="textarea" 
                type="textarea" 
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]} // here we want to check the value the user entered is not empty .1
                errorText="Please enter a valid description (at leat 5 characters)"
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    )
}

export default NewPlace;

// .1: when we enter something in the input field the red color and the errorText disapears
//     but when we remove all the text from the input the red color and errorText apears again