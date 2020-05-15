import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import todoListState from '../states/todoListState';

import { replaceItemAtIndex, removeItemAtIndex } from '../utils/array.util';

function Todo({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState);
  const index = todos.findIndex(item => item === todo);

  const handleEditText = useCallback(({ target: { value } }) => {
    const newTodos = replaceItemAtIndex(todos, index, {
      ...todo,
      text: value,
    });

    setTodos(newTodos);
  }, [todos, index, todo, setTodos]);

  const handleToggleCompletion = useCallback(() => {
    const newTodos = replaceItemAtIndex(todos, index, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });

    setTodos(newTodos);
  }, [todos, index, todo, setTodos]);

  const handleRemove = useCallback(() => {
    const newTodos = removeItemAtIndex(todos, index);

    setTodos(newTodos);
  }, [todos, index, setTodos]);

  return (
    <div>
      <input type="text" value={todo.text} onChange={handleEditText} />
      <input type="checkbox" checked={todo.isCompleted} onChange={handleToggleCompletion} />
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Todo;
