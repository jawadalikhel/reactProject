import React from "react";


import "./Styles/MainHeader.css";

const MainHeader = (props) =>{
    return(
        // The content of the header is provided using the "props.children" prop, which allows
        // other components to pass content (child elements) to be rendered inside this header.
        // This allows for dynamic content within the header.
        <header className="main-header">
            {props.children} 
        </header>
    )
}

export default MainHeader;