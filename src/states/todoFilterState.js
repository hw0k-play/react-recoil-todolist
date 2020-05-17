import { atom } from 'recoil';
import FilterState from '../constants/FilterState';

const todoFilterState = atom({
  key: 'todoFilterState',
  default: FilterState.SHOW_ALL,
});

export default todoFilterState;
