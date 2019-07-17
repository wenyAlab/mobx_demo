import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import { Header } from './component/Header';
import Main from './routes';
import './App.css';

@withRouter
@inject('books')
@observer
class App extends React.Component{
  render(){
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
    )
  }
}

export default App;
