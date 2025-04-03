// External Libraries
import React from 'react'

// Components

// Types
import { People } from '@services/api/starWars/people.get/response'

// Styles
import { Container } from './styles'

interface Props {
  data: People
}

export const PeopleCard: React.FC<Props> = ({ data }) => {
  return <Container>{data.name}</Container>
}
