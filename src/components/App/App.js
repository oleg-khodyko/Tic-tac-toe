import React, { Component } from 'react';
import Game from '../Game/Game';
import LoginWindow from '../Login-window/Login-window';
import classes from './App.module.css';

export default class App extends Component {
    render () {
        return (
            <div className={classes.wrapper}>
                <LoginWindow />
                <Game />
            </div>
        )
    }
}
