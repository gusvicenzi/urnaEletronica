import React from 'react'
import '../styles/key.css'

interface Props {
  buttonText: string
  style?: {
    textClasses: string
    buttonClasses: string
  }
  textClasses?: string
  buttonClasses?: string
}

export const Key: React.FC<React.PropsWithChildren<Props>> = props => {
  return (
    <button
      className={'Key ' + props.buttonClasses}
      onClick={() => console.log(props.buttonText)}>
      <p className={'buttonText ' + props.textClasses}>{props.buttonText}</p>
    </button>
  )
}
