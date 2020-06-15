
import React, { useState } from 'react';
import Parent from './Parent'
import CounterContext from './CounterContext'
import Parent2 from './Parent2'
function App(){
  const counter = useState(4)  // counter =[count, setCount]
  return(
    <div>
      <CounterContext.Provider value={counter}>
        <Parent count={counter[0]}/>
      </CounterContext.Provider>
      <Parent2/>
    </div>
  )
}

export default App;