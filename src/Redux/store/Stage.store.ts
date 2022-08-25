import { createSlice } from '@reduxjs/toolkit'

const stage = createSlice({
  name: 'stage',
  initialState: {
    counter: 0
  },
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter -= 1
      }
    },
    clearStage(state) {
      state.counter = 0
    }
  }
})

export const { decrement, increment, clearStage } = stage.actions
export default stage.reducer
