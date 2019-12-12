import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');

    const { onIncrement, onDelete, onReset } = this.props;

    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
