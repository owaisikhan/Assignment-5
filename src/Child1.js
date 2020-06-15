import React,{useContext} from 'react'
import CounterContext from './CounterContext'

function Child1(){
    let counterVal = useContext(CounterContext)
    return(
        <div>
        <h1>Counter value using Context API is {counterVal[0]}</h1>
        <button onClick={()=>counterVal[1](++counterVal[0])}>Context Increment</button>
        </div>
    )
}

export default Child1;