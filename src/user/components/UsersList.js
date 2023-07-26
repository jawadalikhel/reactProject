import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import "./styles/UsersList.css";

const UsersList = (props) =>{
    // Check if the list of users is empty
    if(props.items.length === 0){
        return(
            <div className="center">
                {/* Display a card with a message if no users are found */}
                <Card>
                    <h2>No Users Found.</h2>
                </Card>
            </div>
        )
    }

    return(
        <ul className="users-list">
            {/* Map through the list of users and render a UserItem component for each user */}
            {props.items.map((user) =>{
                return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>
            })}
        </ul>
    )
}

export default UsersList;