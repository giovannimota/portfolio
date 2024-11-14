// External Libraries
import React from 'react'

// Components

// Styles
import { Container, StyledButton } from './styles'

interface Props {
  label: string
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>{label}</StyledButton>
    </Container>
  )
}
