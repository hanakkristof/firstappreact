import React from 'react'
import { useState } from 'react'

export const TodoSummary = ({todos}) => {
  const hossz = todos.length
  const doneHossz = todos.filter(obj=>!obj.done)
  console.log(hossz, doneHossz.length);
  
  return (
    <div className='d-flex justify-content-between gap-5'>
       <p> Összes tennivalo: {hossz} </p> <p> Elvégzetlen: {doneHossz.length}</p>
    </div>
  )
}

