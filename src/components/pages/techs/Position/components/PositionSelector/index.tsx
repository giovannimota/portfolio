// External Libraries
import React from 'react'

// Components

// Types
import type { TabOption } from './types'

// Styles
import { Container, Tab } from './styles'

interface Props {
  value: string
  tabs: TabOption[]
  onChange: (value: string) => void
}

export const PositionSelector: React.FC<Props> = ({
  tabs,
  value,
  onChange
}) => {
  // Functions
  function renderTabs() {
    return tabs.map(item => (
      <Tab
        key={item.value}
        $selected={item.value === value}
        onClick={() => onChange(item.value)}
      >
        {item.title}
      </Tab>
    ))
  }

  return <Container>{renderTabs()}</Container>
}
