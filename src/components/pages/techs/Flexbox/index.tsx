// External Libraries
import React from 'react'

// Components
import { PageHeader } from './components/PageHeader'
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'
import { BehaviorPreview } from './components/BehaviorPreview'

// Hooks
import { FlexboxContextProvider } from './hooks/useFlexboxContext'

// Styles
import { Container, PageContent } from './styles'

export const Flexbox: React.FC = () => {
  return (
    <FlexboxContextProvider>
      <Container>
        <Header title="Learn Front-End | Flexbox" />

        <Navigation />

        <PageContent>
          <PageHeader />

          <BehaviorPreview />
        </PageContent>
      </Container>
    </FlexboxContextProvider>
  )
}
