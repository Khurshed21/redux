import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer