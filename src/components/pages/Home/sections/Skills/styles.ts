import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
`

export const Content = styled.div`
  width: fit-width;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.75rem;
  padding: 1rem;
`

export const SkillsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.25rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #106ec7;

  li::marker {
    color: #106ec7;
  }
`
