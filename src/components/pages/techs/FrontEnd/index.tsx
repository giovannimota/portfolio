// External Libraries
import React from 'react'

// Components
import { TechsGrid } from './components/TechsGrid'
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'
import { PageHeader } from '@components/structure/PageHeader'

// Styles
import { Container, PageContent } from './styles'

export const FrontEnd: React.FC = () => {
  return (
    <Container>
      <Header title="Learn Front-End" />

      <Navigation />

      <PageContent>
        <PageHeader
          title="Learn Front-End"
          description="In this section I will teach some of my skills as front-end developer"
        />

        <TechsGrid />
      </PageContent>
    </Container>
  )
}
