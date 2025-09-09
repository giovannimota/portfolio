// External Libraries
import React from 'react'

// Components
import { Header } from '@components/structure/Header'
import { ContentSection } from './components/ContentSection'
import { Navigation } from '@components/structure/Navigation'
import { PageHeader } from '@components/structure/PageHeader'

// Utils
import {
  USE_REDUCER_CONTENT,
  USE_STATE_CONTENT
} from './components/ContentSection/constants'

// Styles
import { Container, PageContent } from './styles'

export const Hooks: React.FC = () => {
  return (
    <Container>
      <Header title="Learn Front-End | Hooks" />

      <Navigation />

      <PageContent>
        <PageHeader title="Hooks" />

        <ContentSection content={USE_STATE_CONTENT} />

        <ContentSection content={USE_REDUCER_CONTENT} />
      </PageContent>
    </Container>
  )
}
