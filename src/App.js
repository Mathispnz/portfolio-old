import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/home/Header';
import Cv from './components/Cv';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';

// import {CSSTransition, TransitionGroup} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition 
          key={location.key}
          timeout={450}
          classNames="fade"
        > */}
          <Switch>
            <Route path="/home" component={Header} />
            <Route path="/cv" component={Cv} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path='/contact' component={Contact} />
          </Switch>
        {/* </CSSTransition>
      </TransitionGroup>
      )} /> */}
    </div>
  );
}

export default App;
