import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/emloyess/employeesSlice';
import Results from './Results/Results';
import Employee from './Employee/Employee';
import './App.scss';
import arrayOfEmployees from '../assets/eployees.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const copy = JSON.parse(localStorage.getItem("copy"));

    if (copy) {
      copy.forEach(item => {
        dispatch(addEmployee(item));
      });
    } else {
      arrayOfEmployees.forEach(item => {
        dispatch(addEmployee(item));
      });
    }

  }, []);

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
