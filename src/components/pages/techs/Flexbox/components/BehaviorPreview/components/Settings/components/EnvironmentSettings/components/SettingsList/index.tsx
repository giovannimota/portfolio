// External Libraries
import React, { useState } from 'react'

// Components
import { CheckBox } from '@components/toolkit/CheckBox'
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useFlexboxContext } from '@pages/techs/Flexbox/hooks/useFlexboxContext'

// Types
import type { CheckBoxItem } from '@components/toolkit/CheckBox/types'
import type { FlexboxConfig } from '@pages/techs/Flexbox/hooks/useFlexboxContext/types'

// Styles
import { Container } from './styles'

interface Props {
  title: string
  multiple?: boolean
  options: CheckBoxItem[]
  field: keyof FlexboxConfig
}

export const SettingsList: React.FC<Props> = ({
  title,
  field,
  multiple,
  options
}) => {
  // Hooks
  const { flexboxConfig, updateFlexboxConfig } = useFlexboxContext()

  // Functions
  function handleChange(option: CheckBoxItem) {
    const newValue = option.value
    updateFlexboxConfig({ [field]: newValue })
  }

  function renderSettings() {
    return options.map(option => (
      <CheckBox
        key={`item-${option.value}`}
        option={option}
        selected={option.value === flexboxConfig[field]}
        onChange={() => handleChange(option)}
      />
    ))
  }

  return (
    <Container>
      <Typography variant="b1">{title}</Typography>

      {renderSettings()}
    </Container>
  )
}
