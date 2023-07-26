import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Styles/SideDrawer.css";

const SideDrawer = props =>{
    return(
        // The "CSSTransition" component from "react-transition-group" is used for animation
        <CSSTransition 
            // The "in" prop controls whether the component should be visible (true) or hidden (false)
            in={props.show} 
            // The "timeout" prop defines the duration of the animation in milliseconds
            timeout={200} 
            classNames="slide-in-left" 
            // The "mountOnEnter" prop specifies that the component should be mounted when entering
            mountOnEnter 
            // The "unmountOnExit" prop specifies that the component should be unmounted when exiting
            unmountOnExit
        >
            {/* The "onClick" prop allows the side drawer to be closed when clicked */}
            <aside className="side-drawer" onClick={props.onClick}>
                {props.children}
            </aside>

        </CSSTransition>
    )
}

export default SideDrawer;