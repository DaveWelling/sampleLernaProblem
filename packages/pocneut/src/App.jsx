import { Component } from 'react';
import './App.css';
import Socks from 'a_pocdep/ragnarok/argyleSocks';
export default class App extends Component {
  state = {
    name: 'pocNeut',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        I really like my {new Socks().getPremium().cotton ? 'cotton' : 'crumby'} socks.
      </div>
    );
  }
}
