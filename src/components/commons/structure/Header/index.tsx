// External Libraries
import React from 'react'

// Components
import { Button } from '@components/toolkit/buttons/Button'
import { Typography } from '@components/toolkit/Typography'

// Styles
import { ButtonsRow, Container } from './styles'
import { useRouter } from 'next/router'

interface Props {
  // Props
}

export const Header: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Constants
  const HEADER_BUTTONS = [
    {
      label: 'About me',
      path: '/'
    },
    {
      label: 'Redux',
      path: '/redux'
    },
    {
      label: 'Animations',
      path: '/animations'
    }
  ]

  // Hooks
  const { push } = useRouter()

  // Functions
  function handleButtonClick(path: string) {
    push(path)
  }

  function renderButtons() {
    return HEADER_BUTTONS.map(button => (
      <Button
        key={button.label}
        label={button.label}
        onClick={() => handleButtonClick(button.path)}
      />
    ))
  }

  return (
    <Container>
      <Typography>Giovanni Mota</Typography>

      <ButtonsRow>{renderButtons()}</ButtonsRow>
    </Container>
  )
}
