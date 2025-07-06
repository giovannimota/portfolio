import { FlexboxConfig } from '../types'

export function makeInitialConfig(): FlexboxConfig {
  return {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
}
