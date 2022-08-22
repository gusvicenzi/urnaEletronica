import React, { useEffect } from 'react'
import { Button } from './models/buttons.models'
import { Keyboard } from './components/Keyboard'
import { Screen } from './components/Screen'
import './styles/app.css'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Redux/store/store'
// Reducers
// import { increment } from './Redux/store/Stage/Stage.actions'
import { decrement, increment } from './Redux/store/Stage.store'
import { addNumber } from './Redux/store/PresidentNumber.store'

function App() {
  // const [num, setNum] = useState('')
  // const [stage, setStage] = useState(0)

  const dispatch = useDispatch()
  const stage = useSelector<RootState>(state => state.stage.counter)
  const num = useSelector<RootState>(
    state => state.presidentNumber.number
  ) as string

  const handleClickedButton = (button: Button) => {
    console.log(`Botao clicado: ${button.text}`)

    if (
      button.text !== 'BRANCO' &&
      button.text !== 'CORRIGE' &&
      button.text !== 'CONFIRMA'
    ) {
      if (num.length < 2) {
        // setNum(prevNum => prevNum + button.text)
        dispatch(addNumber(button.text))
      }
    } else if (button.text === 'CORRIGE') {
      dispatch(decrement())
    }
  }

  useEffect(() => {
    checkStage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num])

  useEffect(() => {
    console.log('Estágio ' + stage)
  }, [stage])

  const checkStage = () => {
    if (num.length === 2) {
      console.log('completo ' + num.length)
      // setStage(prevStage => prevStage + 1)
      dispatch(increment())
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

