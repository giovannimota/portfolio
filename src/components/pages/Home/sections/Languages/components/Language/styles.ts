import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  border: 1px solid #3b3b3b;
  background-color: #fff;
`

export const Icon = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
`
