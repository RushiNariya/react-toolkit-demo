/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addTodo } from '../features/todo/todoSlice';

function Todo() {
  const [todo, setTodo] = useState('');
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo);
  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="todo"
          placeholder="todo type here..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">submit</button>
      </form>

      <br />

      <div>
        {todos.map((todo) => {
          return <div>{todo.text}</div>;
        })}
      </div>
    </div>
  );
}

export default Todo;
