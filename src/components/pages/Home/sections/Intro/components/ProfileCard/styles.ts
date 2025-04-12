import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  border-radius: 1rem;
`

export const ProfilePicture = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
`
