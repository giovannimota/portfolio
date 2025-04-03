// External Libraries
import React from 'react'

// Components
import { Header } from '@components/structure/Header'

// Styles
import { Container, Content } from './styles'
import { Tabs } from './components/Tabs'
import { useRouter } from 'next/router'
import { PeoplesView } from './views/PeoplesView'
import { PlanetsView } from './views/PlanetsView'

interface Props {
  // Props
}

export const StarWars: React.FC<Props> = (
  {
    /* Props */
  }
) => {
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

      <Tabs />

      <Content>{renderView()}</Content>
    </Container>
  )
}
