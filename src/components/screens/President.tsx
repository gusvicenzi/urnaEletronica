import React, { useEffect } from 'react'
import '../../styles/president.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store/store'
// Reducers
import { clearNumber } from '../../Redux/store/PresidentNumber.store'

interface Props {
  number: string
}

export const President: React.FC<React.PropsWithChildren<Props>> = props => {
  const dispatch = useDispatch()
  const stage = useSelector<RootState>(state => state.stage.counter)

  useEffect(() => {
    if (stage === 0) {
      const items = document.querySelectorAll('.dummy')
      items?.forEach(node => node.classList.add('hide'))
      console.log(items)
      dispatch(clearNumber())
    } else if (stage === 1) {
      const items = document.querySelectorAll('.hide')
      items.forEach(node => node.classList.remove('hide'))
      items.forEach(node => node.classList.add('dummy'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  return (
    <div className='President'>
      <h2 className='hide'>SEU VOTO PARA</h2>
      <h1 id='title' className='hide'>
        Presidente
      </h1>
      <section>
        <ul>
          <li>
            <h2>Número:</h2>
            <div className='numbersSection'>
              <div className='number'>
                <h1>{props.number[0]}</h1>
              </div>
              <div className='number'>
                <h1>{props.number[1]}</h1>
              </div>
            </div>
          </li>
          <li className='hide'>
            <h2>Nome:</h2>
            <h1>Teste</h1>
          </li>
          <li className='hide'>
            <h2>Partido:</h2>
            <h1>Partido Partido</h1>
          </li>
          <li className='hide'>
            <h2>Vice-Presidente:</h2>
            <h1>Teste Teste</h1>
          </li>
        </ul>
        <div className='imagesSection hide'>
          <img src='https://picsum.photos/200' alt='president' />
          <img src='https://picsum.photos/200' alt='vide-president' />
        </div>
      </section>
      <hr className='hide' />
      <footer className='hide'>
        <h2>Aperte a tecla:</h2>
        <h2>VERDE para CONFIRMAR este voto</h2>
        <h2>VERMELHA para REINICIAR este voto</h2>
      </footer>
    </div>
  )
}
