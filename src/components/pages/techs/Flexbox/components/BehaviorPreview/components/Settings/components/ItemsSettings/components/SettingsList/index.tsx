// External Libraries
import React, { useState } from 'react'

// Components
import { CheckBox } from '@components/toolkit/CheckBox'
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useFlexboxContext } from '@pages/techs/Flexbox/hooks/useFlexboxContext'

// Types
import type { CheckBoxItem } from '@components/toolkit/CheckBox/types'
import type { FlexItemConfig } from '@pages/techs/Flexbox/hooks/useFlexboxContext/types'

// Styles
import { Container } from './styles'

interface Props {
  title: string
  multiple?: boolean
  options: CheckBoxItem[]
  field: keyof FlexItemConfig
}

export const SettingsList: React.FC<Props> = ({
  title,
  field,
  multiple,
  options
}) => {
  // Hooks
  const { flexItemConfig, updateFlexItemConfig } = useFlexboxContext()

  // Functions
  function handleChange(option: CheckBoxItem) {
    const newValue = option.value
    updateFlexItemConfig({ [field]: newValue })
  }

  function renderSettings() {
    return options.map(option => (
      <CheckBox
        key={`item-${option.value}`}
        option={option}
        selected={option.value === flexItemConfig[field]}
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
