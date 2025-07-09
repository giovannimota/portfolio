// External Libraries
import React, { useState } from 'react'

// Components
import { SettingsList } from './components/SettingsList'

// Utils
import { FLEX_ITEM_OPTIONS } from './constants'

// Styles
import { Container } from './styles'

export const ItemsSettings: React.FC = () => {
  // States
  const [opened, setOpened] = useState('width')

  // Functions
  function handleAccordionClick(value: string) {
    const newValue = opened === value ? '' : value
    setOpened(newValue)
  }

  return (
    <Container>
      <SettingsList
        title="Width"
        field="width"
        isOpen={opened === 'width'}
        options={FLEX_ITEM_OPTIONS.width}
        onAccordionClick={handleAccordionClick}
      />

      <SettingsList
        title="Height"
        field="height"
        isOpen={opened === 'height'}
        options={FLEX_ITEM_OPTIONS.height}
        onAccordionClick={handleAccordionClick}
      />
    </Container>
  )
}
