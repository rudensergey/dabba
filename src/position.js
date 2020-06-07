import React from "react";
import { Button } from "./components";
import "./style/position.css";

export default class Position extends React.Component {
    render() {
        const {
            name = "empty value",
            link = "empty value",
            ingridients = "empty value",
            cost = "empty value",
            id = "empty value",
            weight = "empty value",
        } = this.props;

        return (
            <div className="position">
                <div
                    className="position__image"
                    style={{
                        backgroundImage: link
                            ? `url(${link})`
                            : `url(./default.png)`,
                    }}
                ></div>
                <h5 className="position__name">{name}</h5>
                <p className="position__ingridients">{ingridients}</p>
                <div className="position__wc">
                    <p className="position__weight">{weight + "гр."}</p>
                    <p className="position__cost">{cost + "р."}</p>
                </div>

                <Button
                    style="orange"
                    classNames="position__button"
                    onClick={() => {
                        window.cart && window.cart.addPos(id);
                    }}
                >
                    Выбрать
                </Button>
            </div>
        );
    }
}
