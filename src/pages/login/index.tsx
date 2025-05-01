import { Login } from '@pages/Login'
import { SessionProvider } from 'next-auth/react'

export default function LoginPage() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  )
}
