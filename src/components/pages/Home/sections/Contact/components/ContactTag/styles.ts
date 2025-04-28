import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  width: 15rem;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`
