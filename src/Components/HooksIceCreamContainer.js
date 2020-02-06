import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyIceCream} from '../redux'
function HooksIceCreamContainer() {
  const numofIceCreams=useSelector(state=>state.iceCream.numOfIceCreams)
  const dispatch=useDispatch()
  return (
    <div>
        <h1>Number of ice Cream-{numofIceCreams} </h1>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
   
  );
}

export default HooksIceCreamContainer;