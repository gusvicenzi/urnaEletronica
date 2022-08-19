import React from 'react'
// import { Key } from './components/Key'
import { Keyboard } from './components/Keyboard'
import { Screen } from './components/Screen'
import './styles/app.css'

function App() {
  return (
    <div className='App'>
      <Screen />
      <Keyboard />
    </div>
  )
}

export default App

