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
      <Typography variant="h3">Learn Front-End</Typography>

      <Typography variant="b2">
        In this section I will teach some of my skills as front-end developer
      </Typography>
    </Container>
  )
}
