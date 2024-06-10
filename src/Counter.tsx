import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset,increseByAmount } from './createSlice'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count );
    const dispatch = useDispatch();
    const [amount ,setAmount] = useState<number>(0);
    const resetAll =()=>{
        setAmount(0);
        dispatch(reset());
    }
   

  return (
    <section>

        <p>{count}</p>
        <div>


            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>

        <div>
            <input type='number' value={amount} onChange={(e) =>{setAmount(Number(e.target.value))}}/>
            <button onClick={() =>{
                dispatch(increseByAmount(amount))
            }}>Increase by Amount</button>

            <button onClick={() =>{
                reset()
            }}>reset</button>
        </div>
    </section>
  )
}

export default Counter