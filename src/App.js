import React from "react";
import logo from "./logo.svg";

import Skills from "./components/Skills";

import "./App.css";

class App extends React.Component {
  state = {
    logo: false,
    title: "Welcome to my React JS Playground",
  };

  toggleLogo = () => {
    this.setState({ logo: !this.state.logo });
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2 className="mb-5">Welcome to my React Playground</h2>
        </header>

        <body className="app-body">
          <h1 className="mb-5">Body of React playground</h1>

          <button className="btn btn-primary mb-3" onClick={this.toggleLogo}>
            Toggle React logo
          </button>

          {this.state.logo ? (
            <img src={logo} className="app-logo" alt="logo" />
          ) : null}

          <p>
            <code>{this.state.title}</code>
          </p>

          <kbd>
            <a
              className="app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </kbd>

          <hr />

          <Skills />
        </body>

        <footer className="app-footer">
          <code className="text-light mb-5 mr-5">
            Adrián Aguirre, all rights reserved &#169;
          </code>
        </footer>
      </div>
    );
  }
}

export default App;
