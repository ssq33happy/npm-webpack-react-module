import React, { Component } from 'react';
import './styles.css';

class MyComponent extends Component {
  render() {
    const { value} = this.props
    return <h1>{value}</h1>
  }
}

export default MyComponent;