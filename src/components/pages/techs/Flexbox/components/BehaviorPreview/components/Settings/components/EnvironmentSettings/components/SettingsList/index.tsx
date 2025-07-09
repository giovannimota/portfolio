// External Libraries
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { CheckBox } from '@components/toolkit/CheckBox'
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useFlexboxContext } from '@pages/techs/Flexbox/hooks/useFlexboxContext'

// Utils
import { ACCORDION_ANIMATION } from '@utils/animations'

// Types
import type { CheckBoxItem } from '@components/toolkit/CheckBox/types'
import type { FlexboxConfig } from '@pages/techs/Flexbox/hooks/useFlexboxContext/types'

// Styles
import { Container, ExpandButton, ListContainer } from './styles'

interface Props {
  title: string
  isOpen?: boolean
  multiple?: boolean
  options: CheckBoxItem[]
  field: keyof FlexboxConfig
  onAccordionClick: (value: string) => void
}

export const SettingsList: React.FC<Props> = ({
  title,
  field,
  isOpen,
  options,
  multiple,
  onAccordionClick
}) => {
  // Hooks
  const { flexboxConfig, updateFlexboxConfig } = useFlexboxContext()

  // Functions
  function handleChange(option: CheckBoxItem) {
    const newValue = option.value
    updateFlexboxConfig({ [field]: newValue })
  }

  function toggleOpen() {
    onAccordionClick(field)
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
      <ExpandButton onClick={toggleOpen}>
        <Typography variant="b1">{title}</Typography>
      </ExpandButton>

      <AnimatePresence initial={false}>
        {isOpen && (
          <ListContainer {...ACCORDION_ANIMATION}>
            {renderSettings()}
          </ListContainer>
        )}
      </AnimatePresence>
    </Container>
  )
}
