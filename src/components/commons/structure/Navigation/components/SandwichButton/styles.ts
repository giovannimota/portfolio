import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.button`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`

interface BarProps {
  $isOpen: boolean
}

export const Bar = styled.span<BarProps>`
  position: absolute;
  width: 28px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(45deg)' : 'translateY(-10px)'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(-45deg)' : 'translateY(10px)'};
  }
`
