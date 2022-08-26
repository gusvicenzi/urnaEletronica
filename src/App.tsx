import React, { useEffect, useState } from 'react'
import { Button } from './models/buttons.models'
import { Keyboard } from './components/Keyboard'
import { Screen } from './components/Screen'
import './styles/app.css'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Redux/store/store'
// Reducers
// import { increment } from './Redux/store/Stage/Stage.actions'
import { clearStage, decrement, increment } from './Redux/store/Stage.store'
import {
  addNumber,
  clearNumber,
  setNumber
} from './Redux/store/PresidentNumber.store'
import { LoadingScreen } from './components/screens/Loading'
import { President } from './components/screens/President'
import { EndScreen } from './components/screens/End'

function App() {
  // const [num, setNum] = useState('')
  // const [stage, setStage] = useState(0)

  const dispatch = useDispatch()
  const stage = useSelector<RootState>(state => state.stage.counter) as number
  const num = useSelector<RootState>(
    state => state.presidentNumber.number
  ) as string

  const [isBranco, setIsBranco] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timerFnc, setTimerFnc] = useState<NodeJS.Timer>()
  const clickSound = new Audio(require('./assets/sounds/clickSound.mp3'))

  useEffect(() => {
    if (num.length === 2) {
      if (num !== '--') {
        dispatch(increment())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num])

  useEffect(() => {
    console.log('Estágio ' + stage)
    if (stage === 2) {
      const timer = setInterval(() => {
        setProgress(prevProgress => {
          return prevProgress + 25
        })
      }, 600)
      setTimerFnc(timer)
    } else if (stage === 3) {
      clearInterval(timerFnc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  useEffect(() => {
    if (progress > 100) {
      console.log('Terminou')
      clearInterval(timerFnc)
      dispatch(increment())
      setProgress(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress])

  const getScreenContent = () => {
    if (!isBranco && (stage === 0 || stage === 1)) {
      return <President />
    } else if (stage === 1 && isBranco) {
      setIsBranco(false)
      dispatch(setNumber('--'))
      return <President />
    } else if (stage === 2) {
      return <LoadingScreen value={progress} />
    } else {
      new Audio(require('./assets/sounds/finishedVote.mp3')).play()
      return <EndScreen />
    }
  }

  const handleClickedButton = (button: Button) => {
    console.log(`Botao clicado: ${button.text}`)
    clickSound.play()
    if (
      button.text !== 'BRANCO' &&
      button.text !== 'CORRIGE' &&
      button.text !== 'CONFIRMA'
    ) {
      if (num.length < 2) {
        // setNum(prevNum => prevNum + button.text)
        dispatch(addNumber(button.text))
      }
    } else if (button.text === 'CORRIGE' && (stage === 0 || stage === 1)) {
      dispatch(clearNumber())
      dispatch(decrement())
    } else if (button.text === 'BRANCO' && stage === 0) {
      console.log('Votou em branco')
      setIsBranco(true)
      dispatch(increment())
    } else if (button.text === 'CONFIRMA' && stage === 1) {
      dispatch(increment())
    } else if (
      (button.text === 'BRANCO' ||
        button.text === 'CORRIGE' ||
        button.text === 'CONFIRMA') &&
      stage === 3
    ) {
      dispatch(clearStage())
    }
  }

  return (
    <div className='App'>
      <Screen>{getScreenContent()}</Screen>
      <Keyboard clickedButton={handleClickedButton} />
    </div>
  )
}

export default App

