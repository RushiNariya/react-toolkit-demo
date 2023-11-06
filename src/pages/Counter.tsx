import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  multiply,
} from '../features/counter/counterSlice';

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(multiply(2))}>*2</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <h6>Counter {count}</h6>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
    </div>
  );
}

export default Counter;
