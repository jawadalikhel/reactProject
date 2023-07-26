import React from "react";
import { NavLink } from "react-router-dom";

import "./Styles/NavLinks.css";

const NavLinks = () =>{
    return(
        <ul className="nav-links">
            {/* The "NavLink" component is a special version of the "Link" component from "react-router-dom" */}
            {/* It automatically applies the "active" class to the link when the current URL matches the "to" prop */}
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;