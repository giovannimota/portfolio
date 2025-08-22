// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  title: string
  description?: string
}

export const PageHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Typography variant="h3">{title}</Typography>

      {description ? <Typography variant="b2">{description}</Typography> : null}
    </Container>
  )
}
