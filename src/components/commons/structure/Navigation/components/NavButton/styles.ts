import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints } from '@styles/breakpoints'

interface ContainerProps {
  $isActive?: boolean
}

export const Container = styled(Link)<ContainerProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#5c5c5c')};

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: ${({ $isActive }) =>
    $isActive ? '1px solid #106ec7' : '1px solid transparent'};

  transition:
    color 0.5s ease,
    border 0.5s ease;

  &:hover {
    color: #fff;
    border: 1px solid #106ec7;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem 2rem;
  }
`
