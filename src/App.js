import React from 'react';
import Wizard from './components/Wizard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-5">Gift Selection Wizard</h1>
      <Wizard />
    </div>
  );
};

export default App;
