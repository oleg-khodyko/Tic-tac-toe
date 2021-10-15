import React, { Component } from "react";
import classes from './Modal-content.module.css';

const Input = (props) => {
    return (
        <input className={classes.input} placeholder={props.text}></input>
    )
}

const Button = (props) => {
    return (
        <button className={classes.button}>{props.name}</button>
    )
}

export default class ModalContent extends Component {
    render () {
        return (
            <div className={classes.wrapper}>
                <p className={classes.title}>Заполните поля для входа в игру:</p>
                <Input text="Введите имя"/>
                <Input text="Введите пароль"/>
                <Button name="Войти"/>
            </div>
        )
    }
}