import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './components/Home';
import Quote from './components/Quote'
import { Provider } from './context/Context';
import './style/App.css'

function App() {

  return (
    <React.Fragment>
    
      <Provider>
        <Route path="/quote/:symbol" component={Quote} />
      </Provider>
      <Route path="/" exact component={Home} />
  
    </React.Fragment>
  );
}

export default App;
