// External Libraries
import React from 'react'

// Components
import { TechsGrid } from './components/TechsGrid'
import { PageHeader } from './components/PageHeader'
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Container, PageContent } from './styles'

export const FrontEnd: React.FC = () => {
  return (
    <Container>
      <Header title="Learn Front-End" />

      <Navigation />

      <PageContent>
        <PageHeader />

        <TechsGrid />
      </PageContent>
    </Container>
  )
}
