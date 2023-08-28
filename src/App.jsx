import { useState } from 'react'
import './App.css'
import Home from './components/OnBoarding/Home'
import AppLayout from './components/Layout/AppLayout'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);


  return (
    <>
      {isAuthenticated ? <AppLayout /> : <Home />}
    </>
  )
}

export default App
