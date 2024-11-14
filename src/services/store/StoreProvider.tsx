import { PropsWithChildren } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}
