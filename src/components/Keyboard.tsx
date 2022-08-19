import React from 'react'
import '../styles/keyboard.css'
import { Key } from './Key'

interface Props {}

export const Keyboard: React.FC<React.PropsWithChildren<Props>> = props => {
  return (
    <div className='Keyboard'>
      <div className='keysLine'>
        <Key buttonText='1' />
        <Key buttonText='2' />
        <Key buttonText='3' />
      </div>
      <div className='keysLine'>
        <Key buttonText='4' />
        <Key buttonText='5' />
        <Key buttonText='6' />
      </div>
      <div className='keysLine'>
        <Key buttonText='7' />
        <Key buttonText='8' />
        <Key buttonText='9' />
      </div>
      <div className='keysLine'>
        <Key buttonText='0' />
      </div>
      <div className='keysLine'>
        <Key
          buttonText='BRANCO'
          textClasses='extraButtonsText brancoButtonText'
          buttonClasses='brancoButton'
        />
        <Key
          buttonText='CORRIGE'
          textClasses='extraButtonsText'
          buttonClasses=''
        />
        <Key
          buttonText='CONFIRMA'
          textClasses='extraButtonsText'
          buttonClasses=''
        />
      </div>
    </div>
  )
}
