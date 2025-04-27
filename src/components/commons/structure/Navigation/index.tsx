// External Libraries
import React, { useState } from 'react'
import { useRouter } from 'next/router'

// Components
import { Button } from '@components/toolkit/buttons/Button'
import { NavButton } from './components/NavButton'

// Styles
import {
  ButtonsRow,
  Container,
  MenuTabsDropdown,
  TitleContainer
} from './styles'
import { SandwichButton } from './components/SandwichButton'
import Image from 'next/image'

interface Props {
  // Props
}

export const Navigation: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // States
  const [isOpen, setIsOpen] = useState(false)

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
      <TitleContainer>
        <Image
          width={24}
          height={24}
          alt="Logo"
          src="/images/portfolio-logo.png"
        />

        <h2>Giovanni Mota</h2>
      </TitleContainer>

      <ButtonsRow>{renderButtons()}</ButtonsRow>

      <SandwichButton
        isOpen={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      />

      <MenuTabsDropdown $isOpen={isOpen}>{renderButtons()}</MenuTabsDropdown>
    </Container>
  )
}
