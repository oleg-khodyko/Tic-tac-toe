import React, { Component } from "react"; 
import classes from './Square.module.css';

export default class Square extends Component {
    render () {
        return (
            <div className={classes.wrapper}>
                <button className={classes.square} 
                        onClick={() => this.props.onClick()}
                >
                        {this.props.value}
                </button>
            </div>
        )
    }
}