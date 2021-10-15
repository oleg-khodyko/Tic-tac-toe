import React, { Component } from "react";
import classes from './Login-modal.module.css';
import ModalContent from "./Modal-content/Modal-content";

export default class Modal extends Component {

    render () {
        return (
            <div className={classes.wrapper}>
                <ModalContent />
            </div>
        )
    }
}