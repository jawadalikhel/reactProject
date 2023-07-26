import React, {useRef, useEffect} from "react";

import "./Styles/Map.css";

const Map = (props) =>{
    // Creating a reference to the map div using the "useRef" hook
    const mapRef = useRef();

    // Destructuring the "center" and "zoom" props from the "props" object
    const {center, zoom} = props;

    // The "useEffect" hook is used to perform side effects when the component renders or updates
    useEffect(() =>{
        // Inside the "useEffect" hook, we create a new Google Map instance using the "google.maps.Map" constructor
        // We pass the "mapRef.current" as the DOM element where the map should be rendered
        // The "center" and "zoom" props are used to set the initial center and zoom level of the map
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom:  zoom
        });
    
        // We also add a marker to the map using the "google.maps.Marker" constructor
        // The marker is placed at the "center" position and added to the map using the "map" property
        new window.google.maps.Marker({position: center, map: map});
    },[center, zoom]);

   
    // The "Map" component renders a div element with the CSS class "map"
    // The "ref" prop is set to "mapRef", which is the reference to the map div element
    return(
        <div 
            ref={mapRef} 
            className={`map ${props.className}`} 
            Style={props.style}
        >
        </div>
    )
};

export default Map;