// External Libraries
import React, { PropsWithChildren } from 'react'

// Components

// Styles
import { Container } from './styles'

interface Props extends PropsWithChildren {
  // Props
}

export const Typography: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}
