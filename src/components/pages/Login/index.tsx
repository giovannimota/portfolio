// External Libraries
import React from 'react'

// Components
import { LoggedInfo } from './components/LoggedInfo'
import { Header } from '@components/structure/Header'
import { Button } from '@components/toolkit/buttons/Button'
import { Typography } from '@components/toolkit/Typography'
import { Navigation } from '@components/structure/Navigation'

// Hooks
import { useLogin } from './hooks/useLogin'

// Styles
import { Container, Content } from './styles'

export const Login: React.FC = () => {
  // Hooks
  const { session, signIn, signOut } = useLogin()

  return (
    <Container>
      <Header title="Google Auth" />

      <Navigation />

      <Content>
        <Typography variant="h3">Google Auth</Typography>

        {!!session ? <LoggedInfo session={session} /> : null}

        {!!session ? (
          <Button label="Logout" onClick={signOut} />
        ) : (
          <Button label="Login" onClick={signIn} />
        )}
      </Content>
    </Container>
  )
}
