import React, { useReducer, useState } from 'react'
import CounterReducer from './CounterReducer'
const Child2 =()=>{
    const counter1 = {count:1}
    const counter2 = {count:11}
    let [state,dispatch] = useReducer(CounterReducer,[counter1,counter2])

    return(
        <div>
        <h2>CounterReducer state for counter1 is {state[0].count} </h2>
        <h2>CounterReducer state for counter2 is {state[1].count} </h2>
        <button onClick={()=>dispatch('INC1')}>Reducer Increment counter1</button>
        <button onClick={()=>dispatch('INC2')} >Reducer Increment counter2</button>
        </div>
    )
}

export default Child2;