import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detail from '../component/Detail';
import About from '../component/About';
import MainContent from '../component/MainContent';

const Main = () => (
  <Switch>
    <Route exact path="/" render={(props) => (<MainContent {...props}/>)}/>
    <Route path='/detail/:id' render={(props)=> (<Detail {...props}/>)}/>
    <Route path="/about" component={About}/>
    <Route render={()=>(<h3>they can't all be winners!</h3>)}/>
  </Switch>
)

export default Main;