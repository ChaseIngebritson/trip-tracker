import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grommet } from 'grommet';

import './App.css';
import theme from './theme'
import Home from './views/home/Home'
import Viewer from './views/viewer/Viewer'

function App() {
  return (
    <Grommet theme={theme} full>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewer" exact component={Viewer} />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
