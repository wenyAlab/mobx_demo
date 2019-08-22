import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Detail from '../pages/detail';
import Music from '../pages/music';
import MainContent from '../pages';

const Main = () => (
  <Switch>
    <Route exact path="/" render={(props) => (<MainContent {...props}/>)}/>
    <Route path='/detail/:id' render={(props)=> (<Detail {...props}/>)}/>
    <Route path="/music" component={Music}/>
    <Route render={()=>(<h3>they can't all be winners!</h3>)}/>
  </Switch>
)

export default Main;