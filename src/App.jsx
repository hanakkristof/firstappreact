import { Button } from 'reactstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './components/Counter';
import { useState } from 'react';
import { Toggle } from './components/Toggle';
import { Todo } from './components/Todo';

function App() {

  const [selected,setSelected]=useState(null)
  


  return (
    <>
      <div className='app'>
        <h1 style={{textAlign:"center"}}>First reactjs app</h1>
      
      <div className='d-flex gap-2 mb-3 justify-content-center'>
        <Button onClick={()=>setSelected("counter")}
          color="primary"
          outline={selected =="counter"? false:true}
        >
          Counter
        </Button>
        {' '}
        <Button onClick={()=>setSelected("toggle")} outline={selected =="toggle"? false:true}>
          Toggle
        </Button>
        {' '}
        <Button onClick={()=>setSelected("todo")}
          color="success"
          outline={selected =="todo"? false:true}
        >
          Todo  
        </Button>
      </div>
      
      {selected == "counter" && <Counter/>}
      {selected == "toggle" && <Toggle/>}
      {selected == "todo" && <Todo/>}
      </div>
    </>
  )
}

export default App
