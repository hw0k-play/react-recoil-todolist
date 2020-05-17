import { selector } from 'recoil';
import todoListState from './todoListState';

const todoStatState = selector({
  key: 'todoStatState',
  get: ({ get }) => {
    const todos = get(todoListState);

    const totalLength = todos.length;
    const completedLength = todos.filter(todo => todo.isCompleted).length;

    const uncompletedLength = totalLength - completedLength;

    const completedRatio = (completedLength === 0 || totalLength === 0) ? 0 : (completedLength / totalLength);
    return {
      totalLength,
      completedLength,
      uncompletedLength,
      completedRatio,
    };
  },
});

export default todoStatState;
