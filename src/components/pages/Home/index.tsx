// External Libraries
import React from 'react'

// Components
import { Header } from '@components/structure/Header'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const Home: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Header />

      <p>Body</p>
    </Container>
  )
}
