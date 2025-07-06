// External Libraries
import { useState } from 'react'

// Types
import { UseSettingsParams } from './types'

export function useSettings() {
  // States
  const [view, setView] = useState('container')

  // Functions

  return { view, handleViewChange: setView }
}
