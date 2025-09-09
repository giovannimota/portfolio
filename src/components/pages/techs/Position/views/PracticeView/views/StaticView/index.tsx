// External Libraries
import React from 'react'

// Components
import TextScramble from '@components/toolkit/TextScramble'

// Styles
import { Box, Container } from './styles'

export const StaticView: React.FC = ({}) => {
  return (
    <Container>
      <Box>
        <TextScramble text="Div 1" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 2" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 3" textVariant="h4" />
      </Box>

      <Box>
        <TextScramble text="Div 4" textVariant="h4" />
      </Box>
    </Container>
  )
}
