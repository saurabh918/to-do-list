import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Listitem from './components/Listitem'

export default class App extends Component {
  state = {
    items : [],
    text : ""
  }

  handleChange = e => {
    this.setState({text : e.target.value})
  }

  handleAdd = (e) =>{
    if(this.state.text !== "") {
      const item = [...this.state.items , this.state.text];
      this.setState({items : item , text : ""})
    }
  }

  handleDelete = (id) => {
    console.log(id)
    const oldItems = [...this.state.items]
    const newItems = oldItems.filter((item,i)=>{
      return i !== id;
    })
    this.setState({items: newItems})
    console.log(this.state.items)
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row ">
          <h1 className="col-sm-6 text-center shadow-lg mx-auto text-white py-2">
            To Do List
          </h1>
        </div>
        <div className="row my-4">
          <div className="col-5 mx-auto">
            <div className="row">
            <div className="col-9">
            <input type="text" className='form-control' placeholder='Write here' value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className="col-3 m-auto">
            <button className='text-bg-warning pd-3 fw-bold' onClick={this.handleAdd}>Add</button>
          </div>
          <div className="container-fluid">
            <ul className="list-unstyled">
              {
                this.state.items.map((value,i)=>{
                     return <Listitem key={i} value={value} id={i} handleDelete={this.handleDelete}/>
                }

                )
              }
            </ul>
          </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}


