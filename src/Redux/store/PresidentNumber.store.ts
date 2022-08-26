import { createSlice } from '@reduxjs/toolkit'

const presidentNumber = createSlice({
  name: 'presidentNumber',
  initialState: {
    number: ''
  },
  reducers: {
    addNumber(state, { payload }) {
      state.number += payload
    },
    clearNumber(state) {
      state.number = ''
    },
    setNumber(state, { payload }) {
      state.number = payload
    }
  }
})

export const { clearNumber, addNumber, setNumber } = presidentNumber.actions
export default presidentNumber.reducer
