import React from 'react';

import './App.css';
import TextComponent from './Components/TextComponent/TextComponent';
import AnotherComponent from './Components/AnotherComponent/AnotherComponent';

function App() {
  return (
    <div className="App">
      <h2>Clase de CSS Modules</h2>
      <div>
        <p>Algo de texto ejemplo aquí para darle algo de forma a la clase de hoy.</p>
      </div>
      <TextComponent />
      <AnotherComponent />
    </div>
  );
}

export default App;
