import { breakpoints } from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 5rem);

  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 1rem;
  }
`

export const Grid = styled.div`
  display: grid;

  align-items: center;
  grid-template-columns: 282px 1fr;
  gap: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
  }
`

export const IntroContainer = styled.div`
  max-width: 20rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const IntroTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
