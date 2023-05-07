import React, { Component } from 'react';
import { Consumer } from './Context';

export default class Childcontext extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            data=> <h2>{data}</h2> 
          }
        </Consumer>
      </div>
    )
  }
}
