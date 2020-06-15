import React from 'react'
import CounterContext from './CounterContext'
import P2Child from './P2Child'
function Parent2(){
    return(
        <div>
            <h3>I am Parent2 Component and I am outside of the Context Umberalla <br/>with child Component 'P2Child'  having innerContent :-
            <i><P2Child/> </i>
            </h3>
            
        </div>
    )
}

export default Parent2;