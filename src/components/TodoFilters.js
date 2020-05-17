import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import FilterState from '../constants/FilterState';
import todoFilterState from '../states/todoFilterState';

function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  const states = Object.keys(FilterState);

  const handleFilterChange = useCallback(({ target: { value } }) => {
    setFilter(value);
  }, [setFilter]);

  return (
    <div>
      Filter:
      <select value={filter} onChange={handleFilterChange}>
        {states.map(state => (
          <option key={state} value={FilterState[state]}>{FilterState[state]}</option>
        ))}
      </select>
    </div>
  );
}

export default TodoFilters;
