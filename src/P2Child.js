import React,{useContext} from 'react'
import CounterContext from './CounterContext'
const P2Child=()=>{
    const counterVal = useContext(CounterContext)
    return(
        <h4> default value of CounterContext : {counterVal}</h4>
    )
}

export default P2Child;