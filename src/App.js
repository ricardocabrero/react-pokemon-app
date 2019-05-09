import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/detail/:pokemon' component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
