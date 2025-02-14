import './App.css';
import NavBar from "./components/navbar"
import Counters from './components/counters';
import React, { Component } from 'react';


class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0, values: []},
        {id: 2, value: 0, values: []},
        {id: 3, value: 0, values: []},
        {id: 4, value: 0, values: []}
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    counters[index].values = [...counters[index].values, counters[index].value + ","]
    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    counters[index].values = [...counters[index].values, counters[index].value + ","]
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        c.values = [];
        return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render(){
    console.log("App - Rendered" );
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
          <main className="container">
            <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            />
          </main>
      </React.Fragment>
    );
  }
}

export default App;
