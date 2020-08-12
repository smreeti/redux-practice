import React, {Component} from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import {createStore} from "redux";
import reducer from "./reducers"

const initialState = {tech: "React"};
const store = createStore(reducer, initialState);

class App extends Component {

    render() {
        return (
            <div>
                <HelloWorld tech={store.getState().tech}/>
            </div>
        );
    }
}

export default App;
