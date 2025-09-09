// External Libraries
import React from 'react'

// Components
import { CodeView } from './components/CodeView'

// Types
import { Content } from './types'

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'

interface Props {
  content: Content[]
}

export const ContentSection: React.FC<Props> = ({ content }) => {
  if (!content?.length) return null

  function renderContent() {
    return content.map(item => {
      if (item.id === 'title') {
        return (
          <Typography key={item.id} variant="h3">
            {item.text}
          </Typography>
        )
      }

      if (item.id === 'description') {
        return (
          <Typography key={item.id} variant="body">
            {item.text}
          </Typography>
        )
      }

      if (item.id === 'code') return <CodeView key={item.id} code={item.code} />

      return null
    })
  }

  return <Container>{renderContent()}</Container>
}
