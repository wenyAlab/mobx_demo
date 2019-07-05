import React from 'react';
import './App.css';
import {  Image} from 'semantic-ui-react';
import MainContent from './component/MainContent';
import DevTools from 'mobx-react-devtools'
import { Header } from './component/Header';


function App() {
  return (
    <div className="layout">
    <Header/>
      <div className="App">
        {/*
          <Image
            style={{margin: '20px 0'}}
            src='https://img3.doubanio.com/view/dale-online/dale_ad/public/a1625c1f4873822.jpg'
          />
        */}
        <Image
          style={{margin: '20px 0'}}
          src='https://img1.doubanio.com/view/dale-online/dale_ad/public/85c94bdcb60f377.jpg'
        />
        <MainContent/>
        <DevTools/>
      </div>
    </div>
  );
}

export default App;
