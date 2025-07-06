// External Libraries
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState
} from 'react'

// Utils
import { makeInitialConfig, makeInitialItemConfig } from './utils'

// Types
import { FlexboxConfig, FlexboxContextData, FlexItemConfig } from './types'

const FlexboxContext = createContext<FlexboxContextData>(
  {} as FlexboxContextData
)

const FlexboxContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // States
  const [flexboxConfig, setFlexboxConfig] = useState(makeInitialConfig)
  const [flexItemConfig, setFlexItemConfig] = useState(makeInitialItemConfig)

  // Functions
  function updateFlexboxConfig(newConfig: Partial<FlexboxConfig>) {
    setFlexboxConfig(prevConfig => ({
      ...prevConfig,
      ...newConfig
    }))
  }

  function updateFlexItemConfig(newConfig: Partial<FlexItemConfig>) {
    setFlexItemConfig(prevConfig => ({
      ...prevConfig,
      ...newConfig
    }))
  }

  return (
    <FlexboxContext.Provider
      value={{
        flexboxConfig,
        flexItemConfig,
        updateFlexboxConfig,
        updateFlexItemConfig
      }}
    >
      {children}
    </FlexboxContext.Provider>
  )
}

function useFlexboxContext(): FlexboxContextData {
  const context = useContext(FlexboxContext)

  if (!Object.keys(context)?.length) {
    throw new Error('useFlexboxContext must be within a ContextProvider')
  }

  return context
}

export { FlexboxContextProvider, useFlexboxContext }
