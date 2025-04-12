// External Libraries
import React from 'react'
import Head from 'next/head'

// Components

// Styles
import { Container } from './styles'

interface Props {
  title?: string
}

export const Header: React.FC<Props> = ({ title = 'Giovanni Mota' }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
    </Container>
  )
}
