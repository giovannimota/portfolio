import { TypographyVariants } from '../types'

// Keep the legacy typography scale as plain, typed CSS so styled-components can
// compose it without losing the component's transient prop types.
export const variantStyles: Record<TypographyVariants, string> = {
  h1: 'font-size:3rem;font-weight:700;line-height:1.2;color:#FFFFFF;',
  h2: 'font-size:2.5rem;font-weight:700;line-height:1.3;color:#FFFFFF;',
  h3: 'font-size:2rem;font-weight:600;line-height:1.4;color:#FFFFFF;',
  h4: 'font-size:1.5rem;font-weight:600;color:#FFFFFF;',
  h5: 'font-size:1.25rem;font-weight:500;color:#FFFFFF;',
  h6: 'font-size:1rem;font-weight:500;color:#FFFFFF;',
  body: 'font-size:1rem;font-weight:400;color:#EDEDED;',
  b1: 'font-size:1rem;font-weight:600;color:#FFFFFF;',
  b2: 'font-size:1rem;font-weight:600;color:#999999;'
}
