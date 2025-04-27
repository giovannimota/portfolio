import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@styles/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  border-radius: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const ProfilePicture = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
