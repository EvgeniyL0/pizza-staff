import React from 'react';
import { Route, Switch } from "react-router-dom";
import Results from './Results/Results';
import Employee from './Employee/Employee';
import './App.scss';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Results />
        </Route>
        <Route exact path="/employees/:id">
          <Employee />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
