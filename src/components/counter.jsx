import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // Ajax call and get new data form server
    // }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');

    const { counter, onIncrement, onDelete } = this.props;

    return (
      <div>
        <h4>Counter #{counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const { counter } = this.props;

    let classes = 'badge m-2 badge-';
    classes += counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { counter } = this.props;

    const { value: count } = counter;
    return counter.value === 0 ? 'Zero' : count;
  }
}

export default Counter;
