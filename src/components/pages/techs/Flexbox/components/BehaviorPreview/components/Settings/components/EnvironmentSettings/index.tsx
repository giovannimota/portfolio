// External Libraries
import React, { useState } from 'react'

// Components
import { SettingsList } from './components/SettingsList'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { FLEXBOX_OPTIONS } from './constants'

// Styles
import { Container } from './styles'

export const EnvironmentSettings: React.FC = () => {
  // States
  const [opened, setOpened] = useState('flexDirection')

  // Functions
  function handleAccordionClick(value: string) {
    const newValue = opened === value ? '' : value
    setOpened(newValue)
  }

  return (
    <Container>
      <SettingsList
        title="Flex Direction"
        field="flexDirection"
        isOpen={opened === 'flexDirection'}
        options={FLEXBOX_OPTIONS.flexDirection}
        onAccordionClick={handleAccordionClick}
      />

      <SettingsList
        title="Align Items"
        field="alignItems"
        isOpen={opened === 'alignItems'}
        options={FLEXBOX_OPTIONS.alignItems}
        onAccordionClick={handleAccordionClick}
      />

      <SettingsList
        title="Justify Content"
        field="justifyContent"
        isOpen={opened === 'justifyContent'}
        options={FLEXBOX_OPTIONS.justifyContent}
        onAccordionClick={handleAccordionClick}
      />
    </Container>
  )
}
