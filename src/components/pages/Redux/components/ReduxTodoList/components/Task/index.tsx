// External Libraries
import React from 'react'
import { useDispatch } from 'react-redux'

// Components
import { Input } from '@components/toolkit/inputs/Input'
import { Button } from '@components/toolkit/buttons/Button'

// Types
import {
  duplicateTask,
  editTask,
  removeTask,
  TodoTask
} from '@services/store/todoList'

// Styles
import { ButtonsContainer, Container } from './styles'

interface Props {
  task: TodoTask
}

export const Task: React.FC<Props> = ({ task }) => {
  // Hooks
  const dispatch = useDispatch()

  // Functions
  function handleEditTask(id: number, name: string) {
    dispatch(editTask({ id, name }))
  }

  function handleRemoveTask(id: number) {
    dispatch(removeTask(id))
  }

  function handleDuplicateTask(task: TodoTask) {
    dispatch(duplicateTask(task.name))
  }

  return (
    <Container>
      <Input value={task.name} onChange={v => handleEditTask(task.id, v)} />

      <ButtonsContainer>
        <Button label="Duplicar" onClick={() => handleDuplicateTask(task)} />
        <Button label="Excluir" onClick={() => handleRemoveTask(task.id)} />
      </ButtonsContainer>
    </Container>
  )
}
