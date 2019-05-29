import React from 'react';
import './App.css';
import AppList from './component/AppList';
import DevTools from 'mobx-react-devtools'

function App() {
  return (
    <div className="App">
      <AppList/>
      <DevTools/>
    </div>
  );
}

export default App;
