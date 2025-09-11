import React from 'react'
import { useState } from 'react'
import { FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo } from 'react-icons/fa'
import { Button } from 'reactstrap'

const dices={
        1:<FaDiceOne size={100}/>,
        2:<FaDiceTwo size={100}/>,
        3:<FaDiceThree size={100}/>,
        4:<FaDiceFour size={100}/>,
        5:<FaDiceFive size={100}/>,
        6:<FaDiceSix size={100}/>
}
export const Dice = () => {
    const [cube, setCube] = useState(dices[1])

    const rollDice =()=>{
        const randomNumber = Math.abs(Math.floor(Math.random()*6))
        console.log(randomNumber);
        setCube(dices[randomNumber+1])
        
    }


  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Dice roller</h1>
      <div>{cube}</div>
      <Button onClick={rollDice} style={{marginBottom:15}}>Roll the Dice</Button>
    </div>
  )
}

