// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ProfilePicture } from './styles'

interface Props {
  // Props
}

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
        src="/images/me.jpeg"
        alt="Giovanni Profile Picture"
      />
    </Container>
  )
}
