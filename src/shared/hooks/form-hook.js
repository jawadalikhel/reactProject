// useCallback hook: is used to memoize a function, which means it returns a memoized 
// version of the function that only changes if one of its dependencies has changed. 
// This optimization is helpful when passing callbacks to child components to prevent unnecessary re-renders.

// useReducer hook: is used to manage complex state logic in React applications. 
// It is an alternative to the more commonly used useState hook, but it's more suitable 
// when state updates depend on the previous state or when multiple state variables 
// need to be updated together based on a single action.
import { useCallback, useReducer } from "react";

// Reducer function for managing form state and validation
const formReducer = (state, action) =>{
    switch(action.type){
        // When an input value changes, this case is triggered with action.type set to 'INPUT_CHANGE'
        // We need to update the value and validity of the specific input identified by action.inputId
        // We also need to check the validity of all form inputs to determine the overall form validity
        case 'INPUT_CHANGE':
            // Initialize a variable to track the overall form validity
            let formIsValid = true;

            // Loop through all form inputs to check their validity
            for(const inputId in state.inputs){
                if(!state.inputs[inputId]){
                    continue;
                }
                // If the current inputId matches the inputId in the action, update its validity with action.isValid
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                }else{
                    // If the current inputId is different, update its validity based on the existing state.inputs[inputId].isValid
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            // Return the updated form state with the new input value and validity,
            // and the updated overall form validity
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
        // When setting the initial form data, this case is triggered with action.type set to 'SET_DATA'
        // We need to set the initial input values and the overall form validity
        case 'SET_DATA':
            // Return the form state with the initial inputs and form validity
            return{
                inputs: action.inputs,
                isValid: action.formIsValid

            }
        // If none of the recognized actions are provided, return the existing state as is
        default:
            return state;
    }
}

// Custom hook "useForm" for managing form state and validation
export const useForm = (initialInputs, initialFormValidity) => {
    // Using the "useReducer" hook to manage form state with the "formReducer" function
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    // The "inputHandler" function updates the form state when input values change
    const inputHandler = useCallback((id, value, isValid) =>{
        dispatch({
            type: 'INPUT_CHANGE',
            value: value, 
            isValid: isValid, 
            inputId: id
        })
    },[]); // The "useCallback" hook is used for better performance and avoids unnecessary re-renders

    // The "setFormData" function sets the initial form data and validity
    const setFormData = useCallback((inputData, formValidity) =>{
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        });
    }, []);

    // Return the form state, input handler, and set form data function
    return [formState, inputHandler, setFormData];
};