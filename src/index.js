import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route, hashHistory } from 'react-router-dom';

import App from './App';
import QueryList from './components/QueryList';
import { Race } from './types';
const Test = () => <QueryList options={Object.keys(Race).filter((key) => !Number(key))} />

var appElement = document.createElement('div');
appElement.id = 'app';
document.body.append(appElement);

render((
  <Router>
    <App>
      <Route path="/" component={Test} />
    </App>
  </Router>
), document.getElementById('app'));
