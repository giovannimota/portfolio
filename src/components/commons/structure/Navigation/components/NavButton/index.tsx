// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'

interface Props {
  label: string
  href?: string
  isActive?: boolean
}

export const NavButton: React.FC<Props> = ({ href, label, isActive }) => {
  return (
    <Container href={href || '#'} $isActive={isActive}>
      {label}
    </Container>
  )
}
