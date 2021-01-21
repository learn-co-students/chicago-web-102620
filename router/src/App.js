
import React from 'react';
import Navbar from './Navbar';
import About from './About';
import PaintingList from './PaintingList';
import Login from './Login';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />

      <Switch>

        <Route component={About} path={'/about'} />
        <Route component={Dashboard} path={'/dashboard/:username'} />
        <Route component={Login} path={'/login'} />
    
        <Route component={PaintingList} path={'/'} />
      </Switch>
    </div>
  );
};

export default App;





