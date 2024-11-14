import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const PageContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  padding: 1rem;
`

export const Content = styled.div`
  width: 50rem;

  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`
