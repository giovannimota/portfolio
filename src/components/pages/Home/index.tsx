// External Libraries
import React from 'react'

// Components
import { Intro } from './sections/Intro'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Languages } from './sections/Languages'
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Container, Content } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Navigation />

      <Content>
        <Intro />

        {/* <Languages /> */}

        <Skills />

        <Contact />
      </Content>
    </Container>
  )
}
