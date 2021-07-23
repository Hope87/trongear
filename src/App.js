import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './fonts/stylesheet.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const GaragePage = lazy(() => import('./pages/GaragePage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/garage">
            <GaragePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
