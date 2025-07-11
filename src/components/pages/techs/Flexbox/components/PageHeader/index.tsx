// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const PageHeader: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Typography variant="h3">Learn Flexbox</Typography>

      <Typography variant="b2">
        In this section I will teach how to use CSS Flexbox to create flexible
        and responsive layouts
      </Typography>
    </Container>
  )
}
