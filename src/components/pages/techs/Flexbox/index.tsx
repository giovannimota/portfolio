// External Libraries
import React from 'react'

// Components
import { Header } from '@components/structure/Header'
import { Navigation } from '@components/structure/Navigation'
import { PageHeader } from '@components/structure/PageHeader'
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
          <PageHeader
            title="Learn Flexbox"
            description="In this section I will teach how to use CSS Flexbox to create flexible
        and responsive layouts"
          />

          <BehaviorPreview />
        </PageContent>
      </Container>
    </FlexboxContextProvider>
  )
}
