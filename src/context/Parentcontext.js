import React, { Component } from 'react';
import { Provider } from "./Context";
import User from "./User"

export default class Parentcontext extends Component {
  state = {
    name:"provider name"
  }

  
  render() {
    console.log(this.state.name)
    return ( 
      <div>
        <Provider value={this.state.name}>
          <User />
        </Provider>
      </div>
    )
  }
}
