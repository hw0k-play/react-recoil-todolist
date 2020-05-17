import React from 'react';
import { useRecoilValue } from 'recoil';
import todoStatState from '../states/todoStatState';

function getTodosSuffix(length) {
  return Math.abs(length) === 1 ? 'todo' : 'todos';
}

function TodoStats() {
  const {
    totalLength,
    completedLength,
    uncompletedLength,
    completedRatio,
  } = useRecoilValue(todoStatState);

  const completedPercent = Math.round(completedRatio * 100);

  return (
    <div>
      Status of Todos
      <ul>
        <li>Total: {totalLength} {getTodosSuffix(totalLength)}</li>
        <li>Completed: {completedLength} {getTodosSuffix(completedLength)}</li>
        <li>Uncompleted: {uncompletedLength} {getTodosSuffix(uncompletedLength)}</li>
        <li>Completed: {completedPercent}%</li>
      </ul>
    </div>
  );
}

export default TodoStats;
