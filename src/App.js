import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
// import Counter from './components/counter';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 42 },
      { id: 2, value: 18 },
      { id: 3, value: 0 },
      { id: 4, value: 9 }
    ]
  };

  constructor(props) {
    super(props);
    console.log('App - Constructor');
    // this.state = this.props.something;
  }

  componentDidMount() {
    // Ajax call
    console.log('App - Mounted');
  }

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
