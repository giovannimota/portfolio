import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import todoListReducer from './todoList'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
