// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { CheckBoxItem } from './types'

// Styles
import { Container, CheckMarkContainer, CheckMark } from './styles'
import theme from '@globals/theme'

interface Props {
  selected: boolean
  disabled?: boolean
  option: CheckBoxItem
  onChange: (value: CheckBoxItem) => void
}

export const CheckBox: React.FC<Props> = ({
  option,
  selected,
  disabled,
  onChange
}) => {
  // Constants
  const textColor = selected
    ? theme.colors.text.primary
    : theme.colors.text.secondary

  // Functions
  function handleClick() {
    onChange(option)
  }

  return (
    <Container disabled={disabled} onClick={handleClick}>
      <CheckMarkContainer>
        <CheckMark $active={selected} />
      </CheckMarkContainer>

      <Typography variant="b1" color={textColor}>
        {option.label}
      </Typography>
    </Container>
  )
}
