import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './fonts/stylesheet.css';

const MainPage = lazy(() => import('./components/pages/Main'));
const GaragePage = lazy(() => import('./components/pages/Garage'));
const GarageMenuPage = lazy(() => import('./components/pages/GarageMenu'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/garage">
            <GaragePage />
          </Route>
          <Route path="/garageMenu">
            <GarageMenuPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
