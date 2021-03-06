// react
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Header from './components/Header';
import Homepage from './components/Homepage';
import People from './components/People';
import Planet from './components/Planet';
import Starship from './components/Starship';


import './style.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/people" component={People} />
        <Route exact path="/planet" component={Planet} />
        <Route exact path="/starship" component={Starship} />
      </Switch>
    </div>
  );
}

export default App;
