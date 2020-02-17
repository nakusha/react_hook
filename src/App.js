import React from 'react';
import Screen from "./Screen";
import TScreen from './TScreen';
import UserContextProvider from './context';
import Lang from './translateContext';
import translations from './translation';


function App() {
  return (
    <>
      <UserContextProvider>
        <Screen/>
      </UserContextProvider>
      <Lang defaultLang="en" translations={translations}>
        <TScreen/>
      </Lang>
    </>
  );
}

export default App;
