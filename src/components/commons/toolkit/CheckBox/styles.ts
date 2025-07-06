import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  gap: 0.25rem;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  background-color: transparent;

  /* &:not(:disabled) {
    &:hover {
      background-color: ${({ theme }) => `${theme.colors.primary}20`};
    }
  }

  &:focus {
    background-color: ${({ theme }) => `${theme.colors.primary}20`};
  } */

  &:disabled {
    cursor: not-allowed;
    filter: opacity(0.5);
  }
`

export const CheckMarkContainer = styled.div`
  width: 1.75rem;
  height: 1.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem;
  border-radius: 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

interface CheckMarkProps {
  $active: boolean
}

export const CheckMark = styled(motion.div)<CheckMarkProps>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.15rem;
  transition: all 0.15s ease-in-out;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : 'transparent'};
`
