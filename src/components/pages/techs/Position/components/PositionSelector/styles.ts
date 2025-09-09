import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

interface TabProps {
  $selected: boolean
}

export const Tab = styled.button<TabProps>`
  min-width: 10rem;

  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`
