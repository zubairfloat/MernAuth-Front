import React from 'react';
import Header from './Components/navbar';
import Login from './Components/login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={'/'} Component={Login} />
      </Switch>
    </Router>
  );
}
export default App;
