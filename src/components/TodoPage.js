import React from 'react';
import { useRecoilValue } from 'recoil';

import todoListState from '../states/todoListState';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoRemoveAll from './TodoRemoveAll';

function TodoPage() {
  const todos = useRecoilValue(todoListState);

  return (
    <div>
      <TodoInput />
      <TodoList todos={todos} />
      <TodoRemoveAll />
    </div>
  );
};

export default TodoPage;
