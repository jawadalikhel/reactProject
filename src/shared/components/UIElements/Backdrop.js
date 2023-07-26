import React from "react";
import ReactDOM from "react-dom";

import "./Styles/Backdrop.css";

const Backdrop = (props) =>{
    // The component uses "ReactDOM.createPortal()" to render the backdrop outside the regular component tree
    // This allows the backdrop to be rendered at a different location in the DOM hierarchy
    // It is commonly used for modal dialogs, popovers, or other overlays that should appear on top of the main content
    // the createPortal() accepts 2 arguments 1st: what we want to render and 2nd where we want to render it
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onClick}></div>, 
        // The second argument to "createPortal()" is the target container where the backdrop will be rendered
        // In this case, the backdrop will be rendered inside the element with the ID "backdrop-hook"
        document.getElementById('backdrop-hook')
    )
}

export default Backdrop;