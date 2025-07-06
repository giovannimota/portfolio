export interface FlexboxContextData {
  flexboxConfig: FlexboxConfig
  flexItemConfig: FlexItemConfig
  updateFlexboxConfig: (newConfig: Partial<FlexboxConfig>) => void
  updateFlexItemConfig: (newConfig: Partial<FlexItemConfig>) => void
}

export interface FlexboxConfig {
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch'
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

export interface FlexItemConfig {
  width?: string
  height?: string
  backgroundColor?: string
}
