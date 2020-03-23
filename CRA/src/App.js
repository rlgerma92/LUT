import React, { setState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  setState = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit <code>src/App.js</code> and save to reload.
            </a>
            <Welcome text="Welcome to using props" />
          </p>
          {this.state.toggle && <p>This should show and hide</p>}
          <button onClick={this.toggle}>Show / hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
