import React from 'react'
//import { todosData } from '../data'
import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheck } from "react-icons/fa";
import { NewTodo } from './NewTodo';
import { TodoSummary } from './TodoSummary.jsx';
import { useEffect } from 'react';
import { addTodo, deleteTodo, getTodos, haveCompleted, removeEverything } from '../Utils.js';


export const Todo = () => {
  const [todos, setTodos] = useState(null)
  

  useEffect(()=>{
    getTodos(setTodos)
  },[])
/*

  const handleDelete=(id)=>{
    console.log(id);

    setTodos(prev=>prev.filter(obj=>obj.id !=id))

    
  }
  const handleDone = (id) =>{
    console.log("Handledone", id);
    const ujAttributum = "valami"
    setTodos(prev=>prev.map(obj=>obj.id==id ? {...obj, done:!obj.done, ujAttributum}:obj))

  }
  
    const handleAdd=(descr)=>{
        const newTodo={
          id:Date.now(),
          descr,
          done:false
        }
        setTodos(prev=>[...prev,newTodo])
    }

  const handleDeleteAll=()=> {
    setTodos(prev=>prev.filter(obj=>obj.done == false))
  }
*/
const handleDeleteAll=async()=> {
  await removeEverything()
  getTodos(setTodos)
}
 const handleAdd=async (descr)=>{
    await addTodo(descr)
    getTodos(setTodos)
 }
 const handleDone= async(id) =>{
  await haveCompleted(id)
  getTodos(setTodos)
 }
 const handleDelete=async(id)=>{
  await deleteTodo(id)//az adatbázisban megtörténik a módosítás
  getTodos(setTodos)
 }
  return (
    <div style={{maxWidth:"600px", padding:"1rem"}}>
      <NewTodo handleAdd={handleAdd}/>
      <ListGroup >
        {todos && todos.map(obj=><ListGroupItem key={obj.id} className='d-flex justify-content-between'>
          <FaCheck onClick={()=>handleDone(obj.id)}  style={{color: obj.done? "green" : "grey", fontSize:"2rem"}}/> 
          <div style={{textDecoration: obj.done? "line-through" : "none"}}> {obj.descr}</div>
          <img onClick={()=>handleDelete(obj.id)} style={{width:"35px", height:"35px"}} src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6212.jpg" alt="" />
        </ListGroupItem>)}
        
      </ListGroup>
          <div className='d-flex justify-content-center'>
          <img onClick={()=>handleDeleteAll()} style={{width:"80px", height:"80px", margin:"10px"}} src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/6212.jpg" alt="" />
          </div>
          <div>
          {/*<TodoSummary todos={todos}/>*/}
          </div>
    </div>
  )
}

