import React from "react";
import "./Styles/Card.css";

const Card = (props) =>{
    return(
         // The "style" prop allows inline styles to be applied to the "card" div
        <div className={`card ${props.className}`} style={props.style}>
            {/* The "props.children" represents the content inside the "Card" component */}
            {/* This allows the "Card" component to wrap other elements, such as text, images, or other components */}
            {props.children}
        </div>
    )
}

export default Card;