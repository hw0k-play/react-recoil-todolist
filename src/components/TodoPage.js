import React from 'react';
import { useRecoilValue } from 'recoil';

import filteredTodoListState from '../states/filteredTodoListState';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoRemoveAll from './TodoRemoveAll';
import TodoFilters from './TodoFilters';

function TodoPage() {
  const todos = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoFilters />
      <br />
      <TodoInput />
      <TodoList todos={todos} />
      <TodoRemoveAll />
    </div>
  );
};

export default TodoPage;
