// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Tech } from '@dtos/front-end'

// Styles
import { Container } from './styles'

interface Props {
  techInfo: Tech
}

export const TechCard: React.FC<Props> = ({ techInfo }) => {
  return (
    <Container href={`/front-end/${techInfo.path}`}>
      <Typography variant="b1">{techInfo.title}</Typography>

      <Typography variant="b2" as="p">
        {techInfo.description}
      </Typography>
    </Container>
  )
}
