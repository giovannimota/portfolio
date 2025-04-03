// External Libraries
import React from 'react'
import { useRouter } from 'next/router'

// Components
import { Button } from '@components/toolkit/buttons/Button'

// Styles
import { ButtonsRow, Container } from './styles'

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
      label: 'Star Wars API',
      path: '/star-wars'
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
      <h1>Giovanni Mota</h1>

      <ButtonsRow>{renderButtons()}</ButtonsRow>
    </Container>
  )
}
