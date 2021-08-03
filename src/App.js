import React, { Suspense, lazy, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './fonts/stylesheet.css';

const MainPage = lazy(() => import('./components/pages/Main'));
const GaragePage = lazy(() => import('./components/pages/Garage'));
const GarageMenuPage = lazy(() => import('./components/pages/GarageMenu'));
const RacingPage = lazy(() => import('./components/pages/Racing'));

function App() {
  const [modal, setModal] = useState();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <MainPage modal={modal} setModal={setModal} />
          </Route>
          <Route path="/garage">
            <GaragePage modal={modal} setModal={setModal} />
          </Route>
          <Route path="/garageMenu">
            <GarageMenuPage modal={modal} setModal={setModal} />
          </Route>
          <Route path="/racing">
            <RacingPage modal={modal} setModal={setModal} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
