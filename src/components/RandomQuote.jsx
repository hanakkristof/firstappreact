import React from 'react'
import { quotesFromDatabase } from '../quotes'
import { useState } from 'react'
import { Button } from 'reactstrap'


export const RandomQuote = () => {
    const [quote, setQuote] = useState("")
    console.log(quote);
    
    const selectQuote =()=>{
        const randomNumber = Math.abs(Math.round(Math.random()*quotesFromDatabase.length)-1)
        console.log(randomNumber);


        setQuote(quotesFromDatabase[randomNumber])

 
        
        
    }
    
  return (
    <div className='d-flex flex-column align-items-center'>
      <Button onClick={selectQuote} style={{marginBottom:10}}>Idézet</Button>
      <p>{quote}</p>
    </div>
  )
}
