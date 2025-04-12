// External Libraries
import React from 'react'

// Components
import { ProfileCard } from './components/ProfileCard'

// Styles
import { Container, Grid, IntroContainer, IntroTitle } from './styles'
import theme from '@globals/theme'
import TextScramble from '@components/toolkit/TextScramble'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  // Props
}

export const Intro: React.FC<Props> = (
  {
    /* Props */
  }
) => {
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
        </IntroContainer>
      </Grid>
    </Container>
  )
}
