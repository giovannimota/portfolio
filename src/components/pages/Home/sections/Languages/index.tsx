// External Libraries
import React from 'react'

// Components
import { Language } from './components/Language'

// Utils
import { MY_LANGUAGES } from './constants'

// Styles
import { Container, LanguagesContainer } from './styles'
import { Typography } from '@components/toolkit/Typography'

type Props = Record<string, never>

export const Languages: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Functions
  function renderLanguages() {
    return MY_LANGUAGES.map(item => (
      <Language key={item.title} src={item.img} title={item.title} />
    ))
  }

  return (
    <Container>
      <Typography variant="h2">Languages</Typography>

      <LanguagesContainer>{renderLanguages()}</LanguagesContainer>
    </Container>
  )
}
