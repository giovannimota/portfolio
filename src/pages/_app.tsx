// External Libraries
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Services
import { StoreProvider } from '@services/store/StoreProvider'

// Styles
import '../styles/globals.css'
import theme from '@globals/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  )
}
