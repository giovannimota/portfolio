// External Libraries
import React from 'react'

// Components
import { ProfileCard } from './components/ProfileCard'
import TextScramble from '@components/toolkit/TextScramble'
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container, Grid, IntroContainer, IntroTitle } from './styles'
import theme from '@globals/theme'

export const Intro: React.FC = () => {
  return (
    <Container>
      <Grid>
        <ProfileCard />

        <IntroContainer>
          <IntroTitle>
            <TextScramble text="I'm" textVariant="h4" />

            <TextScramble
              text="Giovanni Mota"
              textVariant="h4"
              textColor={theme.colors.primary}
            />
          </IntroTitle>

          <Typography>I'm a front-end developer, from Brazil.</Typography>

          <Typography>
            I have a little bit more than 4 years of experience. I develop web
            and mobile applications, i have knowledge in React, React Native,
            NextJS and Figma.
          </Typography>

          <Typography>
            I am also develop some projects with SwiftUI, NodeJS (Express) and
            Java (Spring Boot).
          </Typography>

          <Typography>So, welcome to my portfolio!</Typography>

          <Typography>
            Scroll down to know more about me and feel free to explore the other
            tabs.
          </Typography>
        </IntroContainer>
      </Grid>
    </Container>
  )
}
