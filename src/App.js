import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import SignUp from './SignUp'

import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <Switch>
        <Route path='/checkout'>    
     <Checkout/>
      </Route>
      <Route path='/SignUp'>
      <SignUp />
      </Route>
      
      <Router path='/'>
      <Home />
      
      </Router>
     
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
