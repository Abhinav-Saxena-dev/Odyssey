import React from 'react';

import SessionPage from './Pages/Session-Page/session-page.component';
import LandingPage from './Pages/Landing-Page/landingpage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/session' component={SessionPage}/>
      </Switch>
    </div>
  );
}

export default App;
