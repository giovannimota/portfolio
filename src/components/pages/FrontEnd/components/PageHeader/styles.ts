import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.25rem;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`
