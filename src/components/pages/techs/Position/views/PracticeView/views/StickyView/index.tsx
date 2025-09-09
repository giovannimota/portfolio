// External Libraries
import React from 'react'

// Components
import TextScramble from '@components/toolkit/TextScramble'

// Styles
import { Box, Container, StickyBox } from './styles'

export const StickyView: React.FC = () => {
  return (
    <Container>
      <StickyBox $color="#1273CE">
        <TextScramble text="Div with Sticky 1" textVariant="h4" />
      </StickyBox>

      <Box>
        <TextScramble text="Div 1" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 2" textVariant="h4" />
      </Box>

      <StickyBox $color="#0c5497">
        <TextScramble text="Div with Sticky 2" textVariant="h4" />
      </StickyBox>

      <Box>
        <TextScramble text="Div 3" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 4" textVariant="h4" />
      </Box>

      <StickyBox $color="#08345E">
        <TextScramble text="Div with Sticky 3" textVariant="h4" />
      </StickyBox>

      <Box>
        <TextScramble text="Div 5" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 6" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 7" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 8" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 9" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 10" textVariant="h4" />
      </Box>
    </Container>
  )
}
