import React, { Component } from "react";
import Board from "./Board/Board";
import classes from './Game.module.css';

export default class Game extends Component {
    render () {
        return (
            <div className={classes.wrapper}>
                <div className={classes.board}>
                    <Board />
                </div>
                <div className={classes.info}>
                    <div>{/* status */}</div>
                     <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}