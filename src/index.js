import React from 'react';
import { render as RouterDomRender } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import { hot } from 'react-hot-loader/root';

import App from './App';

import './style.css'

const browserHistory = createBrowserHistory();

function render(Component){
  const root = document.getElementById('root');

	Component = module.hot ? hot( Component ) : Component;
  
	RouterDomRender(
    <Router history={ browserHistory }>
      <Component/>
    </Router>
    , root
  );
}

render( App );