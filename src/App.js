import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component, useState } from 'react'
import Listitem from './components/Listitem'

const App = () => {

  const [list,setList] = useState({items : [],text : ""})
  const [edit,setEdit] = useState(false)
  const[ editVal,setEditVal] = useState("")
  const [editId,setEditId] = useState(null)
  const [completed,setCompleted] = useState(false)
  const [active,setActive] = useState(false)
  console.log(list)
  const handleChange = e => {
    setList({...list,text : e.target.value})
  }

  const handleAdd = (e) =>{
    if(list.text !== "") {
      if (edit) {
        setList((prevState) => {
          const updatedItems = prevState.items.map((item) => {
            if (item.id === editId) {
              return { ...item, value: list.text };
            }
            return item;
          });
          return { ...prevState, items: updatedItems, text: "" };
        });
        setEdit(false)
       } else {
      const item = {id: new Date().getTime().toString(),value: list.text,active: true,completed:false};
      setList({...list,items: [...list.items,item],text: ""})
      }
    }
  }



  const handleDelete = (id) => {
    console.log(id)
    const oldItems = [...list.items]
    const newItems = oldItems.filter((item)=>{
      return item.id !== id;
    })
    setList({...list,items: newItems})
  }

  const handleEdit = (value,id) => {
    setEdit(true)
    setEditVal(value)
    setEditId(id)
    setList({...list,text:value})
    setList((prevState) => {
      const updatedItems = list.items.map((item) => {
        if(item.id === id) {
          return {...item,completed: false}
        }
        return item
      })
      return {...prevState,items: updatedItems,text: value}
    })
  }

  const handleStatus = (id) => {
    setList((prevState) => {
      const updatedItems = list.items.map((item) => {
        if(item.id === id) {
          return {...item,completed: true}
        }
        return item
      })
      return {...prevState,items: updatedItems,text: ""}
    })
    console.log(list)
  }


  const defaultArr = [];
  defaultArr.push(...list.items); /* default data */
  
  if (completed) {
    const filteredArr = defaultArr.filter(e => e.completed);
    
    defaultArr.length = 0; /* clear array for filtered data */
    defaultArr.push(...filteredArr);
  }

  if (active) {
    const filteredArr = defaultArr.filter(e => e.completed === false);
    
    defaultArr.length = 0; /* clear array for filtered data */
    defaultArr.push(...filteredArr);
  }

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
            <input type="text" className='form-control' placeholder='Write here' value={list.text} onChange={handleChange} />
          </div>
          <div className="col-3 m-auto">
            <button className='text-bg-warning pd-3 fw-bold' onClick={handleAdd}>{edit ? "Edit" : "Add"}</button>
          </div>
          <div className="container-fluid">
            <button className='bg-success text-white col-sm-3 m-2' onClick={()=>{setCompleted(true);setActive(false)}}>Show completed</button>
            <button className='bg-warning text-black col-sm-3 m-2' onClick={()=>{setCompleted(false);setActive(true)}}>Show active</button>
            <button className='bg-secondary text-white col-sm-3 m-2' onClick={()=>{setCompleted(false);setActive(false)}}>Show all</button>
          </div>
          <div className="container-fluid">
            <ul className="list-unstyled">
              {
                defaultArr.map((item)=>{
                     return <Listitem key={item.id} value={item.value} id={item.id} handleDelete={handleDelete} handleEdit={handleEdit} handleStatus={handleStatus} completed={item.completed} />
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

export default App;
