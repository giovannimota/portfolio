// External Libraries
import React from 'react'

// Components
import { Settings } from './components/Settings'
import { EnvironmentView } from './components/EnvironmentView'

// Styles
import { Container } from './styles'

export const BehaviorPreview: React.FC = () => {
  return (
    <Container>
      <EnvironmentView />

      <Settings />
    </Container>
  )
}
