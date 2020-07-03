import React, { Suspense } from 'react';
import { render as RouterDomRender } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { hot } from 'react-hot-loader/root';

const browserHistory = createBrowserHistory();
const App = React.lazy(() => import('./App'));

function render(Component){
  const root = document.getElementById('root');
  
  Component = module.hot ? hot( Component ) : Component;
  
  RouterDomRender(
    <Router history={ browserHistory }>
      <Suspense fallback={<div>Loading...</div>}>
        <Component/>
      </Suspense>
    </Router>
    , root
  );
}

render( App );