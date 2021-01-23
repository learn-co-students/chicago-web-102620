
import React from 'react';
import Navbar from './components/Navbar';
import PaintingList from './components/PaintingList';
import About from './components/About';
import { Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Switch>
        <Route path={'/about'} component={About} />
        <Route exact path={'/paintings'} component={PaintingList} />
      </Switch>
    </div>
  );
};

export default App;




