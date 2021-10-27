import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './fonts/stylesheet.css';

const MainPage = lazy(() => import('./components/pages/Main'));
const GaragePage = lazy(() => import('./components/pages/Garage'));
const GarageMenuPage = lazy(() => import('./components/pages/GarageMenu'));
const RacingPage = lazy(() => import('./components/pages/Racing'));
const TopPage = lazy(() => import('./components/pages/Top'));
const AboutPage = lazy(() => import('./components/pages/About'));

function App({isLogin, setIsLogin}) {

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(window.tronWeb && window.tronWeb.defaultAddress.base58);
    }, 5000);
  })

  const [modal, setModal] = useState(false);
  const [garageMenuInfo, setGarageMenuInfo] = useState({
    title: '',
  });
    
  const garageMenuInformation = (title) => {
    setGarageMenuInfo({ title: title });
  };
   
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      {/* {isLogin ? ( */}
        <Switch>
              <Route path="/" exact>
                <MainPage modal={modal} setModal={setModal} />
              </Route>
              <Route path="/garage">
                <GaragePage
                  modal={modal}
                  setModal={setModal}
                  onGarageMenuInformation={garageMenuInformation}
                />
              </Route>
              <Route path="/garageMenu/:id">
                <GarageMenuPage
                  modal={modal}
                  setModal={setModal}
                  garageNumber={garageMenuInfo}
                />
              </Route>
              <Route path="/racing">
                <RacingPage modal={modal} setModal={setModal} />
              </Route>
              <Route path="/top">
                <TopPage modal={modal} setModal={setModal} />
              </Route>
              <Route path="/about">
                <AboutPage modal={modal} setModal={setModal} />
              </Route>
        </Switch>
        {/* )
        : (
          <h1>Вы не авторизованы на TronLink. Пожалуйста, установите соответствующее расширение и авторизуйтесь!</h1>
        )
      } */}
      </Suspense>
    </Router>
  );
}

export default App;
