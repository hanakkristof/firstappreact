import React from 'react'
import { todosData } from '../data'
import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheck } from "react-icons/fa";

export const Todo = () => {
  const [todos, setTodos] = useState(todosData)
  console.log(todos);
  const handleDelete=(id)=>{
    console.log(id);

    setTodos(prev=>prev.filter(obj=>obj.id !=id))

    
  }

  return (
    <div style={{width:"100%"}}>
      <ListGroup >
        {todos.map(obj=><ListGroupItem key={obj.id} className='d-flex justify-content-between'>
          <FaCheck  style={{color: obj.done? "green" : "grey", fontSize:"2rem"}}/> 
          <div style={{textDecoration: obj.done? "line-through" : "none"}}> {obj.descr}</div>
          <img onClick={()=>handleDelete(obj.id)} style={{width:"35px", height:"35px"}} src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6212.jpg" alt="" />
        </ListGroupItem>)}
        
      </ListGroup>
    </div>
  )
}

