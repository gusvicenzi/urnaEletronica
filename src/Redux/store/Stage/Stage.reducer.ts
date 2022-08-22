// import { AnyAction } from 'redux'
import { actions } from './Stage.actions'

interface Action {
  type: keyof typeof actions
  payload?: any
}

const initialState: number = 0

const reducer = (state = initialState, action: Action) => {
  const { type } = action

  switch (type) {
    case actions.INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default reducer
