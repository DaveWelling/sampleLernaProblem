import { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    let someThing = {name: 'booya'};
    this.state = {
      name: 'pocNeut',
      ...someThing,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Login Bitches {this.state.name}</h1>
      </div>
    );
  }
}
