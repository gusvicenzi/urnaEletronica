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
    }
  }
})

export const { clearNumber, addNumber } = presidentNumber.actions
export default presidentNumber.reducer
