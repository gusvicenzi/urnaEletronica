import React, { useEffect, useState } from 'react'
import { Button } from './models/buttons.models'
import { Keyboard } from './components/Keyboard'
import { Screen } from './components/Screen'
import './styles/app.css'

function App() {
  const [num, setNum] = useState('')
  const [stage, setStage] = useState(0)

  const handleClickedButton = (button: Button) => {
    console.log(`Botao clicado: ${button.text}`)
    if (
      button.text !== 'BRANCO' &&
      button.text !== 'CORRIGE' &&
      button.text !== 'CONFIRMA'
    ) {
      setNum(prevNum => prevNum + button.text)
    }
  }

  useEffect(() => {
    checkStage()
  }, [num])

  useEffect(() => {
    console.log(stage)
  }, [stage])

  const checkStage = () => {
    if (num.length === 2) {
      console.log('completo ' + num.length)
      setStage(prevStage => prevStage + 1)
    }
  }

  return (
    <div className='App'>
      <Screen number={num} />
      <Keyboard clickedButton={handleClickedButton} />
    </div>
  )
}

export default App

