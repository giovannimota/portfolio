// External Libraries
import React from 'react'

// Components
import { Button } from '@components/toolkit/buttons/Button'

// Styles
import { Container } from './styles'
import { useRouter } from 'next/router'

interface Tab {
  label: string
  view: string
  iconSrc: string
}

interface Props {
  // Props
}

export const Tabs: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Constants
  const tabs = [
    {
      label: 'Peoples',
      view: 'peoples',
      iconSrc: ''
    },
    {
      label: 'Planets',
      view: 'planets',
      iconSrc: ''
    },
    {
      label: 'Star Ships',
      view: 'star-ships',
      iconSrc: ''
    }
  ]

  // Hooks
  const { push } = useRouter()

  // Functions
  function handleTabClick(tab: Tab) {
    push({ query: { view: tab.view } })
  }

  return (
    <Container>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          label={tab.label}
          onClick={() => handleTabClick(tab)}
        />
      ))}
    </Container>
  )
}
