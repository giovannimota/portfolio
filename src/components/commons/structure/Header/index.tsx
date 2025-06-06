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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    </Container>
  )
}
