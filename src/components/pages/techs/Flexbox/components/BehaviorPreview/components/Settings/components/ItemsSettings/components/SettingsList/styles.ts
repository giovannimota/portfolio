import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const ExpandButton = styled.button`
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
`

export const ListContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`
