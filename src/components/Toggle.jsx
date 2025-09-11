import React from 'react'
import { Button } from 'reactstrap'
import { FaRegSadCry } from 'react-icons/fa'
import { FaRegSmile } from 'react-icons/fa'
import { useState } from 'react'
import { Dice } from './Dice'
export const Toggle = () => {
  const [ishappy,setishappy] = useState(true);

  return (
      

    <div >
      <Button outline onClick={()=>setishappy(!ishappy)}>Are you happy?</Button>
      <div className='d-flex justify-content-center'>
       { ishappy? <FaRegSmile style={{color:"Green",fontSize:"3rem"}}/>:
        <FaRegSadCry style={{color:"Grey",fontSize:"3rem"}}/>
  }
      </div>

      <Dice/>
    </div>
  )
}

