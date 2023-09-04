import { useState } from 'react'
import './App.css'
import Home from './components/OnBoarding/Home'
import AppLayout from './components/Layout/AppLayout'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);


  return (
    <>
      <Provider store={store}>
        {isAuthenticated ? <AppLayout /> : <Home />}
      </Provider>
    </>
  )
}

export default App
