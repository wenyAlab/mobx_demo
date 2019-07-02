import React from 'react';
import './App.css';
import AppList from './component/AppList';
import DevTools from 'mobx-react-devtools'
import { Header } from './component/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppList/>
      <DevTools/>
    </div>
  );
}

export default App;
