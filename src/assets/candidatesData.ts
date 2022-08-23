import bolsonaroImg from './images/candidates/bolsonaro.jpg'
import lulaImg from './images/candidates/lula.jpg'
import ciroImg from './images/candidates/ciro.jpg'
import simoneImg from './images/candidates/simone.jpg'
import eymaelImg from './images/candidates/eymael.jpg'
import leonardoImg from './images/candidates/leonardo.jpeg'
import davilaImg from './images/candidates/davila.jpeg'
import sofiaImg from './images/candidates/sofia.png'
import veraImg from './images/candidates/veralucia.jpg'
import sorayaImg from './images/candidates/soraya.jpg'
import marcalImg from './images/candidates/marcal.jpg'
import robertoImg from './images/candidates/roberto.jpg'

export interface Candidate {
  number: string
  name: string
  party: string
  vice: string
  presImg?: string
}

export const candidates: Candidate[] = [
  {
    number: '22',
    name: 'Jair Messias Bolsonaro',
    party: 'Partido Liberal',
    vice: 'Braga Netto',
    presImg: bolsonaroImg
  },
  {
    number: '13',
    name: 'Luiz Inácio Lula da Silva',
    party: 'Partido dos Trabalhadores',
    vice: 'Geraldo Alckmin',
    presImg: lulaImg
  },
  {
    number: '12',
    name: 'Ciro Ferreira Gomes',
    party: 'Partido Democrático Trabalhista',
    vice: 'Ana Paula Matos',
    presImg: ciroImg
  },
  {
    number: '45',
    name: 'Simone Nassar Tebet',
    party: 'Movimento Democrático Brasileiro',
    vice: 'Mara Gabrilli',
    presImg: simoneImg
  },
  {
    number: '27',
    name: 'José Maria Eymael',
    party: 'Cemocracia Cristã',
    vice: 'João Barbosa Bravo',
    presImg: eymaelImg
  },
  {
    number: '80',
    name: 'Leonardo Péricles Vieira Roque',
    party: 'Unidade Popular pelo Socialismo',
    vice: 'Samara Martins',
    presImg: leonardoImg
  },
  {
    number: '30',
    name: "Luiz Felipe Chaves d'Avila",
    party: 'Novo',
    vice: 'Tiago Mitraud',
    presImg: davilaImg
  },
  {
    number: '21',
    name: 'Sofia Padua Manzano',
    party: 'Partido Comunista Brasileiro',
    vice: 'Antônio Alves',
    presImg: sofiaImg
  },
  {
    number: '16',
    name: 'Vera Lúcia Pereira da Silva Salgado',
    party: 'Partido Socialista dos Trabalhadores Unificado',
    vice: 'Raquel Tremembé',
    presImg: veraImg
  },
  {
    number: '44',
    name: 'Soraya Vieira Thronicke',
    party: 'União Brasil',
    vice: 'Marcos Cintra',
    presImg: sorayaImg
  },
  {
    number: '90',
    name: 'Pablo Marçal',
    party: 'Partido Republicano da Ordem Social',
    vice: 'Fátima Pérola Neggra',
    presImg: marcalImg
  },
  {
    number: '14',
    name: 'Roberto Jefferson',
    party: 'Partido Trabalhista Brasileiro',
    vice: 'Padre Kelmon',
    presImg: robertoImg
  }
]
