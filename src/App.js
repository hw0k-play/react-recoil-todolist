import React from 'react';
import { RecoilRoot } from 'recoil';

import TodoPage from './components/TodoPage';

function App() {
  return (
    <RecoilRoot>
      <TodoPage />
    </RecoilRoot>
  );
}

export default App;
