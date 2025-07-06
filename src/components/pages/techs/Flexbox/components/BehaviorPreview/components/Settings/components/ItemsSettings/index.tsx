// External Libraries
import React from 'react'

// Components
import { SettingsList } from './components/SettingsList'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { FLEX_ITEM_OPTIONS } from './constants'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const ItemsSettings: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <SettingsList
        title="Width"
        field="width"
        options={FLEX_ITEM_OPTIONS.width}
      />

      <SettingsList
        title="Height"
        field="height"
        options={FLEX_ITEM_OPTIONS.height}
      />
    </Container>
  )
}
