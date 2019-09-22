import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';

import './style.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
