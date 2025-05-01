// External Libraries
import { signIn, signOut, useSession } from 'next-auth/react'

// Types
import { UseLoginParams } from './types'

export function useLogin() {
  // States
  // Hooks
  const { data } = useSession()

  // Functions
  function handleSignIn() {
    signIn('google')
  }

  return { session: data, signIn: handleSignIn, signOut }
}
