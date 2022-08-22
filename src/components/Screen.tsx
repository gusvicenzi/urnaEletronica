import React from 'react'
import '../styles/screen.css'
import { President } from './screens/President'

interface Props {
  number: string
}

export const Screen: React.FC<React.PropsWithChildren<Props>> = props => {
  return (
    <div className='Screen'>
      <President number={props.number} />
    </div>
  )
}
