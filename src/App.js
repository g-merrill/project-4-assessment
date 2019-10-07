import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

class App extends Component {

  state = {
    circles: [1, 2, 3, 4],
    selected: 1
  };

  handleSelect = circleValue => {
    this.setState({ selected: circleValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circles={this.state.circles}
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
          <Circles 
            circles={this.state.circles}
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
        </main>
      </div>
    );
  }
}

export default App;