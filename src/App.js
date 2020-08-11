import React, {Component} from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";

class App extends Component {
    constructor() {
        super();
        this.state = {
            tech: "React"
        }
    }

  render() {
    return (
        <div>
          <HelloWorld tech ={this.state.tech}/>
        </div>
    );
  }
}

export default App;
