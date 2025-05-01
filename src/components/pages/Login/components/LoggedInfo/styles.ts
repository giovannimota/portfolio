import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.borders.default};
  border-radius: 0.5rem;
`

export const RowInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 0.25rem;
`
