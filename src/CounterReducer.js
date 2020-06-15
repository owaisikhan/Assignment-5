const CounterReducer = (state,action)=>{
  console.log(state)
  switch(action){
    case'INC1':
      return [{count: state[0].count + 1},{count: state[1].count}]
    case'INC2':
      return [{count: state[0].count }, {count: state[1].count + 1}]
  }
}

export default CounterReducer;