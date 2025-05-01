// External Libraries
import React from 'react'
import Image from 'next/image'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Session } from 'next-auth'

// Styles
import { Container, RowInfo } from './styles'

interface Props {
  session: Session
}

export const LoggedInfo: React.FC<Props> = ({ session }) => {
  return (
    <Container>
      <Typography variant="b1">
        Welcome, {session.user?.name?.split(' ')[0]}!
      </Typography>

      <Image
        src={session.user?.image || ''}
        alt="User profile picture"
        width={128}
        height={128}
      />

      <RowInfo>
        <Typography variant="b1">Name:</Typography>
        <Typography>{session.user?.name}</Typography>
      </RowInfo>

      <RowInfo>
        <Typography variant="b1">Email:</Typography>
        <Typography>{session.user?.email}</Typography>
      </RowInfo>
    </Container>
  )
}
