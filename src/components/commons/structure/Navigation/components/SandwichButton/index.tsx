// External Libraries
import React from 'react'

// Styles
import { Bar, Container } from './styles'

interface Props {
  isOpen: boolean
  onClick: () => void
}

export const SandwichButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Bar $isOpen={isOpen} />
      <Bar $isOpen={isOpen} />
      <Bar $isOpen={isOpen} />
    </Container>
  )
}
