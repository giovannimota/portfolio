import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 2rem;
  grid-gap: 2rem;
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

export const FixedBox = styled.div`
  width: 18rem;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary}90;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;

  position: fixed;
  top: 10rem;
  right: 1rem;
  z-index: 1;
`
