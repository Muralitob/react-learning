import React, { Component } from 'react';
import './general/css/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
