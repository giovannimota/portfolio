// External Libraries
import React from 'react'
import { useRouter } from 'next/router'

// Components
import { Tabs } from './components/Tabs'
import { PeoplesView } from './views/PeoplesView'
import { PlanetsView } from './views/PlanetsView'
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Container, Content } from './styles'

export const StarWars: React.FC = () => {
  // Hooks
  const { query } = useRouter()

  // Functions
  function renderView() {
    if (query.view === 'peoples') return <PeoplesView />
    if (query.view === 'planets') return <PlanetsView />
    if (query.view === 'star-ships') return <div>Star Ships</div>

    return null
  }

  return (
    <Container>
      <Header />

      <Navigation />

      <Tabs />

      <Content>{renderView()}</Content>
    </Container>
  )
}
