import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import MainPart from "./mainPart";
import Bin from "./Bin";
import "./index.css";

// пример реального объекта с бекэнда

const restaurant = {
    address: "Красногвардейская 16",
    closeTime: "20:00",
    contactPhone: "8(999) 420 11 11",
    dishes: [
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Маргарита",
            pictureUrl: "string",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
    ],
    email: "dodo@fmail.com",
    id: 0,
    kitchenType: "RUSSIAN",
    logoUrl: "string",
    name: "Додо пицца",
    openTime: "8:00",
    serviceRadius: 10,
};

function Success(){
    const success = document.createElement("div");
    success.className = "success";
    success.innerText = "Success";
    success.onclick = function(){document.body.removeChild(this);}
    document.body.append(success);

    const location = new URL(window.location);
    setTimeout(()=>{window.location = location.host + "/addDishes";}, 1000);
}


window.restaurant = restaurant;


class App extends React.Component {
    render() {
        return (
            <div className="page">
                <MainPart data={this.props.data} />
                <Bin />
            </div>
        );
    }
}

// объект с бэкенда помещается в пропсы компонента App в виде
// объекта

ReactDOM.render(<App data={restaurant} />, document.getElementById("root"));

serviceWorker.unregister();
