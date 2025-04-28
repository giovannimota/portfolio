// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'
import { ContactTag } from './components/ContactTag'

// Utils
import { CONTACT_OPTIONS } from './constants'

// Styles
import { Container, Content } from './styles'

interface Props {
  // Props
}

export const Contact: React.FC = () => {
  // Functions
  function renderContent() {
    return CONTACT_OPTIONS.map(item => (
      <ContactTag key={`tag-${item.label}`} data={item} />
    ))
  }

  return (
    <Container>
      <Typography variant="h2">Contact</Typography>

      <Content>{renderContent()}</Content>
    </Container>
  )
}
