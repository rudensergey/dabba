import React from "react";
import "./buttonOrange.css";
import "./buttonBlue.css";


export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            orange: "button__orange",
            blue: "button__blue"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleFunction();
    }

    render() {
        return (
            <button
                className={
                    this.styles[this.props.elementStyle] +
                    " " +
                    this.props.addClasses
                }
                onClick={this.handleClick}
            >
                {this.props.name}
            </button>
        );
    }
}
