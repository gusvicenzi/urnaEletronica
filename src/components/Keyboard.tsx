import React from 'react'
import { Button } from '../models/buttons.models'
import '../styles/keyboard.css'
import { Key } from './Key'

interface Props {
  clickedButton: (button: Button) => void
}

export const Keyboard: React.FC<React.PropsWithChildren<Props>> = props => {
  const clickedButton = (button: Button) => {
    props.clickedButton(button)
    // console.log(`Botao clicado: ${button}`)
  }

  return (
    <div className='Keyboard'>
      <div className='keysLine'>
        <Key button={{ text: '1' }} clickedButton={clickedButton} />
        <Key button={{ text: '2' }} clickedButton={clickedButton} />
        <Key button={{ text: '3' }} clickedButton={clickedButton} />
      </div>
      <div className='keysLine'>
        <Key button={{ text: '4' }} clickedButton={clickedButton} />
        <Key button={{ text: '5' }} clickedButton={clickedButton} />
        <Key button={{ text: '6' }} clickedButton={clickedButton} />
      </div>
      <div className='keysLine'>
        <Key button={{ text: '7' }} clickedButton={clickedButton} />
        <Key button={{ text: '8' }} clickedButton={clickedButton} />
        <Key button={{ text: '9' }} clickedButton={clickedButton} />
      </div>
      <div className='keysLine'>
        <Key button={{ text: '0' }} clickedButton={clickedButton} />
      </div>
      <div className='keysLine'>
        <Key
          button={{ text: 'BRANCO' }}
          textClasses='extraButtonsText brancoButtonText'
          buttonClasses='brancoButton'
          clickedButton={clickedButton}
        />
        <Key
          button={{ text: 'CORRIGE' }}
          textClasses='extraButtonsText corrigeButtonText'
          buttonClasses='corrigeButton'
          clickedButton={clickedButton}
        />
        <Key
          button={{ text: 'CONFIRMA' }}
          textClasses='extraButtonsText confirmaButtonText'
          buttonClasses='confirmaButton'
          clickedButton={clickedButton}
        />
      </div>
    </div>
  )
}
