import React, { useCallback } from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
  const renderTodos = useCallback((todo) => (
    <Todo key={todo.id} todo={todo} />
  ), []);

  return todos.map(renderTodos);
};

export default TodoList;
