import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 20rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
`
