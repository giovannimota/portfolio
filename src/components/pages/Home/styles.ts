import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
`

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 282px 1fr;
  gap: 1rem;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const IntroTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
