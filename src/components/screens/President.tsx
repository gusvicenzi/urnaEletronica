import React from 'react'
import '../../styles/president.css'

interface Props {
  number: string
}

export const President: React.FC<React.PropsWithChildren<Props>> = props => {
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
