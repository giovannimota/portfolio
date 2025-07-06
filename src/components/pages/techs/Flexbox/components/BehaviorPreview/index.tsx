// External Libraries
import React from 'react'

// Components
import { ItemsSettings } from './components/ItemsSettings'
import { EnvironmentView } from './components/EnvironmentView'
import { EnvironmentSettings } from './components/EnvironmentSettings'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const BehaviorPreview: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <EnvironmentView />

      <EnvironmentSettings />

      <ItemsSettings />
    </Container>
  )
}
