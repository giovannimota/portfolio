import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 2rem;
  grid-gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`

export const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
`

interface StickyBoxProps {
  $color: string
}

export const StickyBox = styled.div<StickyBoxProps>`
  width: 100%;
  height: 12rem;

  grid-column: span 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;

  position: sticky;
  top: 2rem;
`
