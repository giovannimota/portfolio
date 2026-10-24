import 'styled-components'
import theme from './index'

declare module 'styled-components' {
  type ThemeType = typeof theme

  // styled-components requires interface extension to augment its theme type.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
