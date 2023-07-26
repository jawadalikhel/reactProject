import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

import "./Styles/Modal.css";

const ModalOverLay = props =>{
    // The "content" variable represents the content of the modal
    // It contains the header, main content, and footer
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            {/* The "header" section of the modal */}
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>

            {/* The "form" element is used to wrap the content and handle form submissions */}
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                {/* The "modal__content" class represents the main content of the modal */}
                <div className={`modal__content ${props.headerClass}`}>
                    {/* The "props.children" represents the main content inside the modal */}
                    {props.children}
                </div>
                {/* The "modal__footer" class represents the footer section of the modal */}
                <footer className={`modal__footer ${props.footerClass}`}>
                    {/* The "props.footer" represents the content of the modal footer */}
                    {props.footer}
                </footer>
            </form>
        </div>
    )
    // Using "ReactDOM.createPortal()" to render the modal content outside the regular component tree
    // This ensures that the modal is rendered on top of the main content and not affected by the component hierarchy
    return ReactDOM.createPortal(content,document.getElementById("modal-hook"));
}

const Modal = (props) =>{
    // The "Modal" component conditionally renders the backdrop and the modal content
    return(
        <React.Fragment>
            {/* The "Backdrop" component is rendered when the "show" prop is true */}
            {/* It is used to create a semi-transparent background behind the modal */}
            {props.show ? <Backdrop onClick={props.onCancel} /> : null}

            {/* The "CSSTransition" component is used to animate the modal */}
            {/* The "in" prop determines whether the modal should be shown */}
            {/* The "timeout" prop sets the duration of the animation */}
            <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
                {/* The "ModalOverLay" component is the content of the modal */}
                {/* The spread operator "{...props}" passes all the props to the "ModalOverLay" component */}
                <ModalOverLay {...props}/>
            </CSSTransition>
        </React.Fragment>
    )
}

export default Modal;