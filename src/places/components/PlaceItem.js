import React, {useState} from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";

import "./styles/PlaceItem.css"

const PlaceItem = (props) =>{
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () =>{
        setShowMap(true);
    }

    const closeMapHandler = () =>{
        setShowMap(false);
    }
    return(
        <React.Fragment>
            <Modal 
                show={showMap} 
                onCancl={closeMapHandler} 
                header={props.address} 
                contentClass="place-item__modal-content" 
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <h2>THE MAP!</h2>
                </div>
            </Modal>
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
                            <Button danger>DELETE</Button>
                        </div>
                    </Card>
                </li>
            
        </React.Fragment>
    )
}

export default PlaceItem;