import { useState } from "react"
import "./style.css"

export default function App() {
  const [newItem , SetNewTtem] = useState("")
 // const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    // setTodos(currentTodos =>{
    //   return [
    //     ...currentTodos,
    //     {id: crypto.randamUUID(), title: newItem, completed: false },
    //   ]
    // })
   
  }
 
  return (
    <>
    
    <form onSubmit={handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'> New Item </label>
      <input 
      value={newItem} 
      onChange={e => SetNewTtem(e.target.value)}
      type="text" 
      id="item"/>
      <button className="btn">Add</button>
    </div>
    </form>
    <h1 className="header"> To Do </h1>
    <ul className="list">
    
      
        <li >
        <label> <input type="checkbox" /> title </label>
        <button  className="btn btn-danger"> Delete </button>
      </li>
       
      
     
     
    </ul>
    </>
  )
  
}

