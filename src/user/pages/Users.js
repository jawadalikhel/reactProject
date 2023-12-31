import React from "react";
import UsersList from "../components/UsersList";

const Users = () =>{
    const USERS = [
        {
            id: "u1", 
            name:"Dawaj", 
            image:"https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg", 
            places:3
        }
    ]
    return(
        // Render the UsersList component and pass the USERS array as the items prop
        <UsersList items={USERS}/>
    )
}

export default Users;