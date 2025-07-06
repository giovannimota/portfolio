import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}20`};
  }
`
