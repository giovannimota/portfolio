import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 4rem);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 282px 1fr;
  gap: 1rem;
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
