import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Add from './components/Add/add';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Add} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;