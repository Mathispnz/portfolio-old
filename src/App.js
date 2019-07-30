import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/home/Header';
import Cv from './components/Cv';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={Header} />
        <Route path="/cv" component={Cv} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
