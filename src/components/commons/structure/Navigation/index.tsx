// External Libraries
import React from 'react'
import { useRouter } from 'next/router'

// Components
import { Button } from '@components/toolkit/buttons/Button'

// Styles
import { ButtonsRow, Container } from './styles'
import { NavButton } from './components/NavButton'

interface Props {
  // Props
}

export const Navigation: React.FC<Props> = (
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
  const { pathname } = useRouter()

  // Functions
  function checkIsActive(path: string) {
    return path === pathname
  }

  function renderButtons() {
    return HEADER_BUTTONS.map(button => (
      <NavButton
        key={button.label}
        href={button.path}
        label={button.label}
        isActive={checkIsActive(button.path)}
      />
    ))
  }

  return (
    <Container>
      <h2>Giovanni Mota</h2>

      <ButtonsRow>{renderButtons()}</ButtonsRow>
    </Container>
  )
}
