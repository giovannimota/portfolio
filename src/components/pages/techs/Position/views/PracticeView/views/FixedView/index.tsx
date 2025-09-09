// External Libraries
import React from 'react'

// Components
import TextScramble from '@components/toolkit/TextScramble'

// Styles
import { Box, Container, FixedBox } from './styles'

export const FixedView: React.FC = () => {
  return (
    <Container>
      <FixedBox>
        <Box>
          <TextScramble text="Div with Fixed" textVariant="h4" />
        </Box>
      </FixedBox>

      <Box>
        <TextScramble text="Div 1" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 2" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 3" textVariant="h4" />
      </Box>
    </Container>
  )
}
