import { createSlice } from '@reduxjs/toolkit'

export interface TodoTask {
  id: number
  name: string
}

function getNewId(tasks: TodoTask[]) {
  let newId = 0

  tasks.forEach(task => {
    if (task.id === newId) {
      newId = task.id + 1
    }
  })

  return newId
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    tasks: [] as TodoTask[]
  },
  reducers: {
    addTask: state => {
      const newId = getNewId(state.tasks)

      state.tasks.push({ id: newId, name: '' })
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return { id: action.payload.id, name: action.payload.name }
        }
        return task
      })
    },
    duplicateTask: (state, action) => {
      const newId = getNewId(state.tasks)

      state.tasks.push({ id: newId, name: action.payload })
    },
    clearTasks: state => {
      state.tasks = []
    }
  }
})

export const { addTask, removeTask, editTask, duplicateTask, clearTasks } =
  todoListSlice.actions

export default todoListSlice.reducer
