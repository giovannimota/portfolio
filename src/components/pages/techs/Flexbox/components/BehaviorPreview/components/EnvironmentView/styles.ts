import { breakpoints } from '@styles/breakpoints'
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface ContainerProps {
  $flexDirection: string
  $alignItems: string
  $justifyContent: string
}

export const Container = styled(motion.div)<ContainerProps>`
  width: 100%;
  min-height: 5rem;
  height: 100%;

  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};

  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => `${theme.colors.primary}20`};

  @media (max-width: ${breakpoints.tablet}) {
    height: 40rem;
  }
`

interface ItemProps {
  $width?: string
  $height?: string
  $backgroundColor?: string
}

export const FlexItem = styled(motion.div)<ItemProps>`
  ${({ $width }) => $width === '100%' && 'flex-grow: 1;'}
  width: ${({ $width }) => ($width !== '100%' && $width) || '5rem'};
  height: ${({ $height }) => $height || '5rem'};

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.colors.primary};
`
