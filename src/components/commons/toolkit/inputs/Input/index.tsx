// External Libraries
import React from 'react'

// Components

// Styles
import { Container, StyledInput } from './styles'

interface Props {
  value: string
  onChange: (value: string) => void
}

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Container>
      <StyledInput value={value} onChange={v => onChange(v.target.value)} />
    </Container>
  )
}
