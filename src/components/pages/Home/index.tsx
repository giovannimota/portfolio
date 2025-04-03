// External Libraries
import React from 'react'

// Components
import { Skills } from './sections/Skills'
import { Languages } from './sections/Languages'
import { Header } from '@components/structure/Header'
import { ProfileCard } from './components/ProfileCard'

// Styles
import { Container, Content, Grid, IntroContainer, IntroTitle } from './styles'

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

      <Content>
        <Grid>
          <ProfileCard />

          <IntroContainer>
            <IntroTitle>
              <h3>I'm</h3>
              <h3 style={{ color: '#106ec7' }}>Giovanni</h3>
            </IntroTitle>

            <p>I'm a front-end developer, from Brazil.</p>
          </IntroContainer>
        </Grid>

        <Languages />

        <Skills />
      </Content>
    </Container>
  )
}
