// react
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Header from './components/Header';
import Homepage from './components/Homepage';
import People from './components/People';


import './style.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/people" component={People} />
      </Switch>
    </div>
  );
}

export default App;
