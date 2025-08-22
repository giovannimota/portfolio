// External Libraries
import React, { useState } from 'react'

// Components
import { TheoryView } from './views/TheoryView'
import { PracticeView } from './views/PracticeView'
import { Header } from '@components/structure/Header'
import { PageHeader } from '@components/structure/PageHeader'
import { Navigation } from '@components/structure/Navigation'
import { PositionSelector } from './components/PositionSelector'

// Utils
import { POSITION_TABS, VIEW_TABS } from './constants'

// Styles
import { Container, PageContent } from './styles'

export const Position: React.FC = () => {
  // States
  const [view, setView] = useState('theory')
  const [selectedPosition, setSelectedPosition] = useState('static')

  // Functions
  function renderContent() {
    if (view === 'practice')
      return <PracticeView position={selectedPosition as any} />
    return <TheoryView position={selectedPosition as any} />
  }

  return (
    <Container>
      <Header title="Learn Front-End | Flexbox" />

      <Navigation />

      <PageContent>
        <PageHeader title="Position" />

        <PositionSelector
          tabs={POSITION_TABS}
          value={selectedPosition}
          onChange={setSelectedPosition}
        />

        <PositionSelector tabs={VIEW_TABS} value={view} onChange={setView} />

        {renderContent()}
      </PageContent>
    </Container>
  )
}
