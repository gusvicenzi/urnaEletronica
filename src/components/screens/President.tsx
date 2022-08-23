import React, { useEffect, useState } from 'react'
import '../../styles/president.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store/store'
// Reducers
import { clearNumber } from '../../Redux/store/PresidentNumber.store'

// Data
import { candidates, Candidate } from '../../assets/candidatesData'

interface Props {
  number: string
}

const initialState: Candidate = {
  number: '00',
  name: 'NOME',
  party: 'PARTIDO',
  vice: 'VICE',
  presImg: 'https://picsum.photos/200/300'
}

export const President: React.FC<React.PropsWithChildren<Props>> = props => {
  const [currentCandidate, setCurrentCandidate] = useState<
    Candidate | undefined
  >(initialState)

  const dispatch = useDispatch()
  const stage = useSelector<RootState>(state => state.stage.counter)
  const currentNumber = useSelector<RootState>(
    state => state.presidentNumber.number
  ) as string

  useEffect(() => {
    if (stage === 0) {
      const items = document.querySelectorAll('.dummy')
      items.forEach(node => node.classList.add('hide'))
      console.log(items)
      dispatch(clearNumber())
    } else if (stage === 1) {
      getCandidateData()
      setTimeout(() => {
        const items = document.querySelectorAll('.hide')
        items.forEach(node => node.classList.remove('hide'))
        items.forEach(node => node.classList.add('dummy'))
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  const getCandidateData = () => {
    const selectedCandidate = candidates.find(
      candidate => candidate.number === currentNumber
    )
    setCurrentCandidate(selectedCandidate)
  }

  return (
    <div className='President'>
      <h2 className='hide'>SEU VOTO PARA</h2>
      <section>
        <ul>
          <h1 id='title' className='hide'>
            Presidente
          </h1>
          <li>
            <h2>Número:</h2>
            <div className='numbersSection'>
              <div className='number'>
                <h1>{currentNumber[0]}</h1>
              </div>
              <div className='number'>
                <h1>{currentNumber[1]}</h1>
              </div>
            </div>
          </li>
          <li className='hide'>
            <h2>Nome:</h2>
            <h1>
              {currentCandidate?.name
                ? currentCandidate.name
                : initialState.name}
            </h1>
          </li>
          <li className='hide'>
            <h2>Partido:</h2>
            <h1>
              {currentCandidate?.party
                ? currentCandidate.party
                : initialState.party}
            </h1>
          </li>
          <li className='hide'>
            <h2>Vice-Presidente:</h2>
            <h1>
              {currentCandidate?.vice
                ? currentCandidate.vice
                : initialState.vice}
            </h1>
          </li>
        </ul>
        <div className='imagesSection hide'>
          <div className='presidentImageItem'>
            <img
              id='presidentPicture'
              src={
                currentCandidate?.presImg
                  ? currentCandidate.presImg
                  : initialState.presImg
              }
              alt='president'
            />
            <label htmlFor='presidentPicture'>Presidente</label>
          </div>
          <div className='viceImageItem'>
            <img
              id='vice-presidentPicture'
              src='https://picsum.photos/200'
              alt='vide-president'
            />
            <label htmlFor='vice-presidentPicture'>Vice-Presidente</label>
          </div>
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
