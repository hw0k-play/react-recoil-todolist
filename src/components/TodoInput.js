import React, { useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import todoListState from '../states/todoListState';

let id = 0;
function getId() {
  return id++;
}

function TodoInput() {
  const setTodos = useSetRecoilState(todoListState);
  const [text, setText] = useState('');

  const handleTextChange = useCallback(({ target: { value }}) => {
    setText(value);
  }, [setText]);

  const handleAdd = useCallback(() => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: getId(),
        text,
        isCompleted: false,
      }
    ]);

    setText('');
  }, [setTodos, text, setText]);

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default TodoInput;
