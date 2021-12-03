import React, { Suspense, lazy, useState, useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import './fonts/stylesheet.css'
import MainPage from './components/pages/Main/Main'
import GaragePage from './components/pages/Garage/Garage'
import GarageMenuPage from './components/pages/GarageMenu/GarageMenu'
import RacingPage from './components/pages/Racing/Racing'
import TopPage from './components/pages/Top/Top'
import AboutPage from './components/pages/About/About'

// const MainPage = lazy(() => import('./components/pages/Main'))
// const GaragePage = lazy(() => import('./components/pages/Garage'))
// const GarageMenuPage = lazy(() => import('./components/pages/GarageMenu'))
// const RacingPage = lazy(() => import('./components/pages/Racing'))
// const TopPage = lazy(() => import('./components/pages/Top'))
// const AboutPage = lazy(() => import('./components/pages/About'))

function App() {
  const [modal, setModal] = useState(false)
  const [garageMenuInfo, setGarageMenuInfo] = useState({
    title: ''
  })

  const garageMenuInformation = (title) => {
    setGarageMenuInfo({ title: title })
  }
  const [time, setTime] = useState({hours: 23, minutes: 59, seconds: 59});
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if(prev.seconds > 0){
          return {...prev, seconds: prev.seconds - 1};
        }
        else {
          if(prev.minutes > 0){
            return {...prev, seconds: 59, minutes: prev.minutes - 1};
          }
          else{
            if(prev.hours > 0){
              return {...prev, seconds: 59, minutes: 59, hours: prev.hours - 1};
            }
            else{
              clearInterval(interval);
              return {...prev, hours: 0, minutes: 0, seconds: 0};
            }
          }
        }
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route path='/' exact>
          <MainPage modal={modal} setModal={setModal} time={time}/>
        </Route>
        <Route path='/garage'>
          <GaragePage
            modal={modal}
            setModal={setModal}
            onGarageMenuInformation={garageMenuInformation}
            time={time}
          />
        </Route>
        <Route path='/garageMenu/:id'>
          <GarageMenuPage
            modal={modal}
            setModal={setModal}
            garageNumber={garageMenuInfo}
            time={time}
          />
        </Route>
        <Route path='/racing'>
          <RacingPage modal={modal} setModal={setModal} time={time}/>
        </Route>
        <Route path='/top'>
          <TopPage modal={modal} setModal={setModal} time={time}/>
        </Route>
        <Route path='/about'>
          <AboutPage modal={modal} setModal={setModal} time={time}/>
        </Route>
      </Switch>
      {/* </Suspense> */}
    </Router>
  )
}

export default App
