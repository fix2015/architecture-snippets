import React from 'react';
import {ModalProvider} from './contexts/modal/index.js';
import Buttons from './components/Buttons/index.js';

const App = () => {
  return (
    <ModalProvider>
      <Buttons />
    </ModalProvider>
  );
};

export default App;
