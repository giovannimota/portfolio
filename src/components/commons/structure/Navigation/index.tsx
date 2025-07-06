// External Libraries
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

// Components
import { NavButton } from './components/NavButton'
import { SandwichButton } from './components/SandwichButton'

// Styles
import {
  ButtonsRow,
  Container,
  MenuTabsDropdown,
  TitleContainer
} from './styles'

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
      label: 'Front-End',
      path: '/front-end'
    }
  ]

  // Hooks
  const { pathname } = useRouter()

  // Functions
  function checkIsActive(path: string) {
    if (path === '/') return pathname === '/'

    return pathname.includes(path)
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
