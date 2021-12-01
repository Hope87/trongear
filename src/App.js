import React, { Suspense, lazy, useState } from 'react'
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

  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route path='/' exact>
          <MainPage modal={modal} setModal={setModal} />
        </Route>
        <Route path='/garage'>
          <GaragePage
            modal={modal}
            setModal={setModal}
            onGarageMenuInformation={garageMenuInformation}
          />
        </Route>
        <Route path='/garageMenu/:id'>
          <GarageMenuPage
            modal={modal}
            setModal={setModal}
            garageNumber={garageMenuInfo}
          />
        </Route>
        <Route path='/racing'>
          <RacingPage modal={modal} setModal={setModal} />
        </Route>
        <Route path='/top'>
          <TopPage modal={modal} setModal={setModal} />
        </Route>
        <Route path='/about'>
          <AboutPage modal={modal} setModal={setModal} />
        </Route>
      </Switch>
      {/* </Suspense> */}
    </Router>
  )
}

export default App
