// External Libraries
import React from 'react'

// Components
import { PeopleCard } from './components/PeopleCard'

// Hooks
import { useSWPeoples } from './hooks/useSWPeoples'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const PeoplesView: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Hooks
  const { peoples } = useSWPeoples()

  // Functions
  function renderPeoples() {
    if (!peoples) return <div>No results</div>

    return peoples.map((people, index) => (
      <PeopleCard key={index} data={people} />
    ))
  }

  return <Container>{renderPeoples()}</Container>
}
