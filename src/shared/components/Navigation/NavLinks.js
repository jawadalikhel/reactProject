import React, {useContext, useState, useCallback} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

import "./Styles/NavLinks.css";

const NavLinks = () =>{
    const auth = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const login = useCallback(( ) =>{
        setIsLoggedIn(true);
      },[])
    
      const logout = useCallback(( ) =>{
        setIsLoggedIn(false);
      },[])

    return(
        <ul className="nav-links">
            {/* The "NavLink" component is a special version of the "Link" component from "react-router-dom" */}
            {/* It automatically applies the "active" class to the link when the current URL matches the "to" prop */}
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
            {auth.isLoggedIn ? <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li> : null}
            
            {auth.isLoggedIn ? <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li> : null}

            {!auth.isLoggedIn ? <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li> : null}

            {auth.isLoggedIn ? <li>
                <button onClick={auth.logout}>LOGOUT</button>
            </li> : null}
        </ul>
    )
}

export default NavLinks;