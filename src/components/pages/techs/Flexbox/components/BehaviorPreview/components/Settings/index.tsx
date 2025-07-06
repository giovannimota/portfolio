// External Libraries
import React from 'react'

// Components
import { Selector } from './components/Selector'
import { ItemsSettings } from './components/ItemsSettings'
import { Typography } from '@components/toolkit/Typography'
import { EnvironmentSettings } from './components/EnvironmentSettings'

// Hooks
import { useSettings } from './hooks/useSettings'

// Utils
import { TABS } from './constants'

// Styles
import { Container } from './styles'

export const Settings: React.FC = () => {
  // Hooks
  const { view, handleViewChange } = useSettings()

  // Functions
  function renderView() {
    if (view === 'container') return <EnvironmentSettings />
    if (view === 'items') return <ItemsSettings />
  }

  return (
    <Container>
      <Typography variant="b2">Settings</Typography>

      <Selector tabs={TABS} value={view} onChange={handleViewChange} />

      {renderView()}
    </Container>
  )
}
