import React, {useState, useContext} from "react";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import { AuthContext } from "../../shared/context/auth-context";
import "./styles/Auth.css";

const Auth = () =>{
    const auth = useContext(AuthContext);
    // State to manage whether the user is in login mode or signup mode
    const [isLoginMode, setIsLoginMode] = useState(true);

    // Custom hook 'useForm' to manage the form state and form input validation
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    },false);
    
    // Function to handle switching between login and signup modes
    const switchModeHandler = () =>{
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },false)
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    // Function to handle form submission
    const authSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs, "<--- form submit") // send this to backend
        auth.login();
    }
    return(
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler} className="">
                {/* Render input fields based on the current mode (login or signup) */}
                {
                    !isLoginMode ? 
                        <Input 
                            element="input" 
                            id="name" 
                            type="text" 
                            label="Your Name" 
                            validators={[VALIDATOR_REQUIRE()]} 
                            errorText="Please Enter a Name"
                            onInput={inputHandler}
                        /> : null
                }
                <Input 
                    element="input" 
                    id="email" 
                    type="email"
                    label="E-Mail" 
                    validators={[VALIDATOR_EMAIL()]} 
                    errorText="Please enter a valid Email" 
                    onInput={inputHandler} 
                />

                <Input 
                    element="input" 
                    id="password" 
                    type="password"
                    label="Password" 
                    validators={[VALIDATOR_MINLENGTH(5)]} 
                    errorText="Please enter a valid Password" 
                    onInput={inputHandler} 
                />

                {/* Disable the button if the form is not valid */}
                <Button type="submit" disabled={!formState.isValid}>
                    {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </form>
            {/* Button to switch between login and signup modes */}
            <Button inverse  onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
        </Card>
    )
}

export default Auth;