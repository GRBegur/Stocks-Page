import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import Quote from './components/Quote'
import './style/App.css'

function App() {

  return (
    <React.Fragment>
      
      <Route path="/quote/:symbol" component={Quote} />
      <Route path="/" exact component={Home} /> 

    </React.Fragment>
  );
}

export default App;
