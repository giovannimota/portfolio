// External Libraries
import React from 'react'

// Components
import { Header } from '@components/structure/Header'
import { ReduxCounter } from './components/ReduxCounter'
import { ReduxTodoList } from './components/ReduxTodoList'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Container, Content, PageContent } from './styles'

export const Redux: React.FC = () => {
  return (
    <Container>
      <Header />

      <Navigation />

      <PageContent>
        <h1>Redux</h1>

        <Content>
          <ReduxCounter />

          <ReduxTodoList />
        </Content>
      </PageContent>
    </Container>
  )
}
