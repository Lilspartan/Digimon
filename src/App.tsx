import { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gauge from './Pages/Gauge'
import Home from './Pages/HomePage'
import Client from './Pages/Client'
import PlayerSelect from './Pages/PlayerSelect';
import {SocketContext, socket} from './context/socket';
import NewClient from './Pages/NewClient';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
          <Route path='/' exact component = {PlayerSelect} />
					<Route path='/home' exact component = {Home} />
					<Route path='/newClient' exact component = {NewClient} />
          <Route path='/gauge' exact component = {Gauge} />
          <Route path='/:player' component = {Client} />
        </Switch>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
