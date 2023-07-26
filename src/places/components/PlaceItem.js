// Importing necessary modules from React and custom components
import React, {useState} from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

// Importing CSS styles for the component
import "./styles/PlaceItem.css"

//component "PlaceItem" takes props as input
const PlaceItem = (props) =>{
    // Using the React Hook "useState" to create two state variables: "showMap" and "showConfirmModal"
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // Handler function to open the map modal
    const openMapHandler = () =>{
        setShowMap(true);
    }

    // Handler function to close the map modal
    const closeMapHandler = () =>{
        setShowMap(false);
    }

    // Handler function to show the delete confirmation modal
    const showDeleteWarningHandler = () =>{
        setShowConfirmModal(true);
    }

    // Handler function to cancel the delete action and hide the confirmation modal
    const cancelDeleteHandler = () =>{
        setShowConfirmModal(false);
    }

    // Handler function to confirm the delete action, hide the confirmation modal, and...
    const confirmDeleteHandler = () =>{
        setShowConfirmModal(false);
        console.log("DELETING")
    }

    // The component's JSX code starts here
    return(
        <React.Fragment>
            {/* Modal for displaying the map */}
            <Modal 
                show={showMap} 
                onCancl={closeMapHandler} 
                header={props.address} 
                contentClass="place-item__modal-content" 
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    {/* Displaying the map using the Map component with the coordinates provided */}
                    <Map center={props.coordinates} zoom={16}/>
                </div>
            </Modal>

            {/* Modal for displaying the delete confirmation */}
            <Modal 
                show={showConfirmModal}
                onCancl={cancelDeleteHandler}
                header="Are You Sure?" 
                footerClass="place-item__modal-actions" 
                footer={
                    <React.Fragment>
                        {/* Buttons to cancel or confirm the delete action */}
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                    </React.Fragment>
                }
            >
                <p>You want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
            </Modal>

            {/* The main content of the component */}
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
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                    </div>
                </Card>
            </li>
            
        </React.Fragment>
    )
}

// Exporting the component to be used in other parts of the application
export default PlaceItem;