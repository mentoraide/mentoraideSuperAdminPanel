import { useState } from 'react'
import './App.css'
import Home from './components/OnBoarding/Home'
import AppLayout from './components/Layout/AppLayout'
import { Provider } from 'react-redux'
import store from './store'
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);


  return (
    <>
      {/* <Provider store={store}>
        {isAuthenticated ? <AppLayout /> : <Home />}
      </Provider> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
