import React from 'react';
import { RecoilRoot } from 'recoil';

import TodoPage from './TodoPage';

function App() {
  return (
    <RecoilRoot>
      <TodoPage />
    </RecoilRoot>
  );
}

export default App;
