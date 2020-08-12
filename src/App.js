import React, {Component} from 'react';
import './App.css';
import photographer from "./images/girl.png";
import formatNumber from "format-number";
import store from "./store";
import dispatchBtnAction from "./actions";

class App extends Component {

    render() {
        const {totalAmount, username} = store.getState();

        return (

            <div className="App">
                <img className="App__userpic" src={photographer} alt="user"/>
                <p className="App__username"> Hello, {username}! </p>

                <div className="App__amount">
                    {formatNumber({prefix: "$"})(totalAmount)}
                    <p className="App__amount--info">Total Amount</p>
                </div>

                <section className="App__buttons">

                    <button data-amount="10000"
                        onClick={dispatchBtnAction}>WITHDRAW $10,000</button>
                    <button data-amount="5000"
                            onClick={dispatchBtnAction}
                    >WITHDRAW $5,000</button>
                </section>

                <p className="App__giveaway">Give away all your cash to charity</p>
            </div>

        );
    }
}

export default App;
