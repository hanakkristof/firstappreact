import React from 'react'
import { Button, Spinner } from 'reactstrap'
import { CgAdd } from "react-icons/cg";
import { CgArrowDownR } from "react-icons/cg";
import { useState } from 'react';
import { Myimg } from './Myimg';

export const Counter = () => {

    const [nr, setNr] = useState(0);
    const [loading, setLoading]=useState(true)


    return (
        <div>
            <div>
                <Button
                    color="primary"
                    onClick={() => {setNr(nr - 1), setLoading(true)}}

                >
                    <CgArrowDownR />
                </Button>

                <Button
                    color={nr >= 0 ? "primary" : "danger"}


                >
                    {nr}
                </Button>

                <Button
                    color="secondary"
                    onClick={() => {setNr(nr + 1), setLoading(true)}}
                >
                    <CgAdd />
                </Button>

            </div>
            <div>
                {/*itt jelenjen meg egy kép, aminek az indexét a nr adja meg, de csak ha pozitív picsum*/}
                
                {nr > 0 && <Myimg nr={nr} loading={loading} setLoading={setLoading}/>}
            </div>
        </div>
    )
}


