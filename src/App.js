import React from 'react';
import './App.css';
import {  Image} from 'semantic-ui-react';
import MainContent from './component/MainContent';
import DevTools from 'mobx-react-devtools'
import { Header } from './component/Header';
import Main from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Image
          style={{margin: '20px 0'}}
          src='https://img1.doubanio.com/view/dale-online/dale_ad/public/85c94bdcb60f377.jpg'
        />
        <Main/>
        <DevTools/>
      </div>
    </div>
  );
}

export default App;
