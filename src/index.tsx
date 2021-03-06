import React from 'react';
import ReactDOM from 'react-dom';
import{ Home, Dashboard, Singin } from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title = {'Car inventory'}/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>

        <Route path='/singin'>
          <Singin/>
        </Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
