// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ProfilePicture } from './styles'

type Props = Record<string, never>

export const ProfileCard: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <ProfilePicture
        width={250}
        height={250}
        priority={false}
        src="/images/giovanni-mota-profile.jpg"
        alt="Giovanni Profile Picture"
      />
    </Container>
  )
}
