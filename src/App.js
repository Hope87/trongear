import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const GaragePage = lazy(() => import('./pages/GaragePage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <GaragePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
