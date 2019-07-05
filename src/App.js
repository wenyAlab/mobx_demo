import React from 'react';
import './App.css';
import {  Image} from 'semantic-ui-react';
import AppList from './component/AppList';
import DevTools from 'mobx-react-devtools'
import { Header } from './component/Header';


function App() {
  return (
    <div className="layout">
    <Header/>
      <div className="App">
        <Image
          style={{margin: '20px 0'}}
          src='https://img3.doubanio.com/view/dale-online/dale_ad/public/a1625c1f4873822.jpg'
        />
        <AppList/>
        <DevTools/>
      </div>
    </div>
  );
}

export default App;
