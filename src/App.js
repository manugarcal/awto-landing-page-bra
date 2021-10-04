import React from 'react'
import './App.css'
import injectContext from './store/appContext'
import Home from './views/Home'
import 'tachyons'

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default injectContext(App)
