// External Libraries
import React from 'react'

// Components
import { Header } from '@components/structure/Header'
import { ReduxCounter } from './components/ReduxCounter'
import { ReduxTodoList } from './components/ReduxTodoList'

// Styles
import { Container, Content, PageContent } from './styles'

interface Props {
  // Props
}

export const Redux: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Header />

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
