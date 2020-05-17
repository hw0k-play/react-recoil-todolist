import { selector } from 'recoil';
import todoFilterState from './todoFilterState';
import todoListState from './todoListState';
import FilterState from '../constants/FilterState';

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FilterState.COMPLETED:
        return list.filter(item => item.isCompleted);
      case FilterState.UNCOMPLETED:
        return list.filter(item => !item.isCompleted);
      default:
        return list;
    }
  }
});

export default filteredTodoListState;
