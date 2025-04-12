import styled from 'styled-components'
import { TypographyVariants } from './types'
import { variantStyles } from './utils/variantStyles'

interface Props {
  $color?: string
  $variant: TypographyVariants
}

export const StyledTypography = styled.span<Props>`
  ${({ $variant }) => variantStyles[$variant]};

  margin: 0;
  color: ${({ $color }) => $color};
`
