import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  padding: 2rem;
  grid-gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`

export const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 18rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
`
