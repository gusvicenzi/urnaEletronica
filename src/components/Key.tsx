import React from 'react'
import { Button } from '../models/buttons.models'
import '../styles/key.css'

interface Props {
  button: Button
  clickedButton: (button: Button) => void
  style?: {
    textClasses: string
    buttonClasses: string
  }
  textClasses?: string
  buttonClasses?: string
}

export const Key: React.FC<React.PropsWithChildren<Props>> = props => {
  const buttonAnimation = () => {
    document
      .getElementsByClassName(props.button.text)[0]
      .classList.add('pressed')
    setTimeout(() => {
      document
        .getElementsByClassName(props.button.text)[0]
        .classList.remove('pressed')
    }, 100)

    props.clickedButton({ text: props.button.text })
  }

  return (
    <button
      className={`Key ${props.button.text} ${props.buttonClasses ?? ''} `}
      onClick={buttonAnimation}>
      <p className={'buttonText ' + props.textClasses}>{props.button.text}</p>
    </button>
  )
}
