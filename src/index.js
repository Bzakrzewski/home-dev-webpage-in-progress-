import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';


import Main from './components/Main';
import About from './components/About';
import Offer from './components/Offer';
import Contact from './components/Contact';



browserHistory.push('/Main');

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Router path="/Main" component={Main} />
    <Router path="/About" component={About} />
    <Router path="/Offer" component={Offer} />
    <Router path="/Contact" component={Contact} />
  </Router>, document.getElementById('root')
)
