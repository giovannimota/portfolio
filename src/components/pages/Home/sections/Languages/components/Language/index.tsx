// External Libraries
import React from 'react'

// Components

// Styles
import { Container, Icon } from './styles'

interface Props {
  src: string
  title: string
}

export const Language: React.FC<Props> = ({ src, title }) => {
  return (
    <Container>
      <Icon src={src} alt={title} priority={false} width={64} height={64} />
    </Container>
  )
}
