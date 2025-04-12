import { css } from 'styled-components'
import { TypographyVariants } from '../types'

export const variantStyles: Record<TypographyVariants, any> = {
  h1: css`
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  h2: css`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  h3: css`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  h4: css`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  h5: css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  h6: css`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  body: css`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.primary};
  `,
  b1: css`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.title};
  `,
  b2: css`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.secondary};
  `
}
