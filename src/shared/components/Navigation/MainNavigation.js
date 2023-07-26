import React, {useState} from "react";
import {Link} from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import "./Styles/MainNavigation.css";

const MainNavigation = (props) =>{
    // Using the "useState" hook to manage the state of the side drawer (open/closed)
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    // Handler function to open the side drawer
    const openDrawerHandler = () =>{
        setDrawerIsOpen(true);
    }

    // Handler function to close the side drawer
    const closeDrawerHandler = () =>{
        setDrawerIsOpen(false);
    }
    return(
        <React.Fragment>

            {/* The "Backdrop" component is conditionally rendered based on "drawerIsOpen" state */}
            {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler}/> : null}

            {/* The "SideDrawer" component is conditionally rendered based on "drawerIsOpen" state */}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation_drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            {/* The "MainHeader" component contains the main header content */}
            <MainHeader>
                {/* The "button" element serves as a menu button to open the side drawer */}
                <button className="main-navigation_menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                    
                <h1 className="main-navigation_title">
                    <Link to="/">YourPlaces</Link> 
                </h1>

                {/* The main navigation links */}
                <nav className="main-navigation_header-nav">
                    <NavLinks />
                </nav>
                
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;