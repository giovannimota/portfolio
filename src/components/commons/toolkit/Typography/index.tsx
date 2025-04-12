// External Libraries
import React, { PropsWithChildren } from 'react'

// Types
import { TypographyVariants } from './types'

// Styles
import { StyledTypography } from './styles'

interface Props extends PropsWithChildren {
  color?: string
  as?: React.ElementType
  variant?: TypographyVariants
}

export const Typography: React.FC<Props> = ({
  children,
  color,
  as = 'span',
  variant = 'body'
}) => {
  return (
    <StyledTypography as={as} $color={color} $variant={variant}>
      {children}
    </StyledTypography>
  )
}
