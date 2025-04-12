// External Libraries
import React from 'react'

// Components
import { Intro } from './sections/Intro'
import { Skills } from './sections/Skills'
import { Languages } from './sections/Languages'
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Container, Content } from './styles'

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

      <Navigation />

      <Content>
        <Intro />

        <Languages />

        <Skills />
      </Content>
    </Container>
  )
}
