import React, { useReducer, useEffect } from "react";
import {validate} from "../../util/validators";

import "./styles/Input.css";

// Reducer function for managing the state of the input component
const inputReducer = (state, action) =>{
    switch (action.type){
        case 'CHANGE':
            return{
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators) // Validate the input value with the provided validators
            };
        case 'TOUCH':
            return{
                ...state,
                isTouch: true //Set "isTouch" to true when the input field is blurred (touched)
            }
        default:
            return state;
    }
}

const Input = (props) =>{
    // Using the "useReducer" hook to manage the state of the input component
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '', 
        isTouch: false,
        isValid: props.initialIsValid
    });

    const {id, onInput} = props;
    const {value, isValid} = inputState;
    // useEffect hook to handle changes in the input state and call the "onInput" prop function
    useEffect(() =>{
        onInput(id, value, isValid);
    },[id, value, isValid, onInput]); // whenever on of these: id, value, isValid, onInput changes
                                      // we the useEffect function will call the onInput function and
                                      // wii pass the id, value, isValid through it, AND also will 
                                      // render/call the NewPlace.js page

    // Handler function for input value change
    const changeHandler = (event) =>{
        dispatch({
            type: 'CHANGE', 
            val: event.target.value, 
            validators: props.validators
        });
    }

    // Handler function for input touch (blur)
    const touchHandler = () =>{
        dispatch({
            type: 'TOUCH'
        })
    }

    // Determine the element to render based on the "element" prop (input or textarea)
    const element = props.element === 'input' 
        ? ( <input 
                id={props.id} 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
           ) 
        : ( <textarea 
                id={props.id} 
                rows={props.rows || 3} 
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
          )
    return(
        <div className={`form-control ${!inputState.isValid && inputState.isTouch ? 'form-control--invalid' : null}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouch ? <p>{props.errorText}</p> : null}
        </div>
    )
}

export default Input;