// External Libraries
import React from 'react'
import Image from 'next/image'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import { ContactOption } from '../../types'

// Styles
import { Container } from './styles'

interface Props {
  data: ContactOption
}

export const ContactTag: React.FC<Props> = ({ data }) => {
  return (
    <Container href={data.url}>
      <Image
        width={64}
        height={64}
        src={data.iconPath}
        alt={`${data.label}-icon`}
      />

      <Typography variant="b1">{data.label}</Typography>
    </Container>
  )
}
