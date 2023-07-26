import React from "react";
import { Link } from "react-router-dom";
import "./styles/UserItem.css"
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) =>{
    return(
        <li className="user-item">
            {/* Card component for styling */}
            <Card className="user-item_content">
                {/* Link to the user's places */}
                <Link to={`/${props.id}/places`}>
                    {/* Avatar component to display the user's image */}
                    <div className="user-item_image">
                        <Avatar image={props.image} alt={props.name}/>
                    </div>
                    <div className="user-item_info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserItem;