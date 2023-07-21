import React from "react";
import Button from "../../shared/components/FormElements/Button";
import "./styles/PlaceItem.css"

import Card from "../../shared/components/UIElements/Card";
const PlaceItem = (props) =>{
    return(
        <li className="place-item">
            <Card className="place-item_content">
                <div className="place-item_imge">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="place-item_info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item_actions">
                    <Button inverse>VIEW ON MAP</Button>
                    <Button to={`/places/${props.id}`}>EDIT</Button>
                    <Button danger>DELETE</Button>
                </div>
            </Card>
        </li>
    )
}

export default PlaceItem;