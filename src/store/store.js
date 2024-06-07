import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from '../reducer/todolist/todolistSlice'

export const store = configureStore({
  reducer: {
    todoSlice:todoSlice
  },
})