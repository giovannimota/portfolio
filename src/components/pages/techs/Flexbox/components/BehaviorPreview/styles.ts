import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  gap: 1rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`
