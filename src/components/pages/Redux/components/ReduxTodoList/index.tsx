// External Libraries
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { Task } from './components/Task'
import { SectionCard } from '../SectionCard'
import { Button } from '@components/toolkit/buttons/Button'

// Utils
import { addTask, clearTasks } from '@services/store/todoList'

// Types
import { RootState } from '@services/store/store'

// Styles
import { Container, TasksContainer } from './styles'

export const ReduxTodoList: React.FC = () => {
  // Hooks
  const dispatch = useDispatch()
  const todoList = useSelector((state: RootState) => state.todoList)

  // Functions
  function handleAddTask() {
    dispatch(addTask())
  }

  function handleClearTasks() {
    dispatch(clearTasks())
  }

  return (
    <SectionCard>
      <Container>
        <h3>Redux To Do List</h3>

        <TasksContainer>
          {todoList.tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </TasksContainer>

        <Button label="Adicionar novo" onClick={handleAddTask} />
        <Button label="Limpar tudo" onClick={handleClearTasks} />
      </Container>
    </SectionCard>
  )
}
