import React, { Component } from "react";
import classes from './Login-window.module.css';
import bg from './bg.jpg';
import Modal from "./Login-modal/Login-modal";

const Background = (props) => {
    const image = bg;
    const alt = "background";
    return (
        <div className={classes.bground}>   
            <img src={image} alt={alt}/>
        </div>
    )
}

export default class LoginWindow extends Component {
    render () {
        return (
            <div className={classes.wrapper}>
                <Background />
                <Modal />
            </div>
        )
    }
}