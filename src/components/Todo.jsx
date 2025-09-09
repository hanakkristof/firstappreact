import React from 'react'
import { todosData } from '../data'
import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheck } from "react-icons/fa";
import { NewTodo } from './NewTodo';

export const Todo = () => {
  const [todos, setTodos] = useState(todosData)
  console.log(todos);
  const handleDelete=(id)=>{
    console.log(id);

    setTodos(prev=>prev.filter(obj=>obj.id !=id))

    
  }
  const handleDone = (id) =>{
    console.log("Handledone", id);
    const ujAttributum = "valami"
    setTodos(prev=>prev.map(obj=>obj.id==id ? {...obj, done:!obj.done, ujAttributum}:obj))

    
    
  }

  return (
    <div style={{maxWidth:"600px", padding:"1rem"}}>
      <NewTodo/>
      <ListGroup >
        {todos.map(obj=><ListGroupItem key={obj.id} className='d-flex justify-content-between'>
          <FaCheck onClick={()=>handleDone(obj.id)}  style={{color: obj.done? "green" : "grey", fontSize:"2rem"}}/> 
          <div style={{textDecoration: obj.done? "line-through" : "none"}}> {obj.descr}</div>
          <img onClick={()=>handleDelete(obj.id)} style={{width:"35px", height:"35px"}} src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6212.jpg" alt="" />
        </ListGroupItem>)}
        
      </ListGroup>
    </div>
  )
}

