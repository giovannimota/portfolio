// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

type Props = Record<string, never>

export const Rendering: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Typography variant="body">Section in development</Typography>
    </Container>
  )
}
