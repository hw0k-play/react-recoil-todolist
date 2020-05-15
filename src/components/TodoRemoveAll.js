import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../states/todoListState';

function TodoRemoveAll() {
  const setTodos = useSetRecoilState(todoListState);

  const handleRemoveAll = useCallback(() => {
    setTodos([]);
  }, [setTodos]);

  return (
    <button onClick={handleRemoveAll}>XXX</button>
  );
};

export default TodoRemoveAll;
