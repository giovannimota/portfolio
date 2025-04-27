import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  border-bottom: 1px solid #3b3b3b;
  position: relative;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`

export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

interface MenuTabsDropdownProps {
  $isOpen: boolean
}

export const MenuTabsDropdown = styled.div<MenuTabsDropdownProps>`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: ${({ $isOpen }) => ($isOpen ? 'auto' : '0')};

    display: flex;
    flex-direction: column;

    gap: 1rem;
    padding: ${({ $isOpen }) => ($isOpen ? '1rem' : '0 1rem')};
    border-top: 1px solid #3b3b3b;
    border-bottom: 1px solid #3b3b3b;
    background-color: ${({ theme }) => theme.colors.black};
    transition:
      height 0.3s ease,
      padding 0.3s ease;
    overflow: hidden;

    position: absolute;
    top: 100%;
    left: 0;
  }
`
