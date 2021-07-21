import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import GameDetail from './pages/gameDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/game:id" component={GameDetail} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
