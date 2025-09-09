import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export const NewTodo = () => {
    const [descr,setDescr]=useState("")

    const handleAdd=()=>{

    }
  return (
    <div>
      <Form className='d-flex align-items-center flex-column gap-1' style={{maxWidth:"600px"}}>
  <FormGroup style={{flex:1}}>
    <Input
      placeholder="New item"
      type="text"
      value={descr}
      onChange={(e)=>setDescr(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Button onClick={handleAdd}>
        Add
    </Button>
  </FormGroup>
  </Form>
    </div>
  )
}

