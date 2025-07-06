// External Libraries
import React from 'react'

// Components
import { SettingsList } from './components/SettingsList'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { FLEXBOX_OPTIONS } from './constants'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const EnvironmentSettings: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <SettingsList
        title="Flex Direction"
        field="flexDirection"
        options={FLEXBOX_OPTIONS.flexDirection}
      />

      <SettingsList
        title="Align Items"
        field="alignItems"
        options={FLEXBOX_OPTIONS.alignItems}
      />

      <SettingsList
        title="Justify Content"
        field="justifyContent"
        options={FLEXBOX_OPTIONS.justifyContent}
      />
    </Container>
  )
}
