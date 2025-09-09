import React from 'react'
import { useState } from 'react';
import { Spinner } from 'reactstrap';

export const Myimg = ({nr,loading, setLoading}) => {
    console.log(nr);  
   // const [loading, setLoading]=useState(true)
    const url = `https://picsum.photos/id/${nr}/400`
    if (nr==50) {
        return <div className='d-flex justify-content-center'> {loading &&
            <Spinner>
                Loading...
            </Spinner>
            }<img src="https://i.redd.it/287jcq1f9jqe1.png" alt="" onLoad={()=>setLoading(false) }/></div>
        
    }
    else{
       
    return <div className='d-flex justify-content-center'> {loading &&
        <Spinner>
            Loading...
        </Spinner>
        }<img src={url} alt=""  onLoad={()=>setLoading(false)}/></div>}
  
}

 
