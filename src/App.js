import React, {Component} from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import ButtonGroup from "./ButtonGroup"
import store from "./store";

class App extends Component {

    render() {
        return (
            <div>
                <HelloWorld tech={store.getState().tech}/>
                <ButtonGroup technologies={["React", "Elm", "React-Redux"]}/>
            </div>
        );
    }
}

export default App;
