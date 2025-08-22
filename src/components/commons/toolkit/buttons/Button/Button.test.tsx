import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '.'

describe('Button component', () => {
  it('should render the label correctly', () => {
    render(<Button label="Click me" />)

    // garante que o texto foi renderizado
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button label="Click me" onClick={handleClick} />)

    fireEvent.click(screen.getByText('Click me'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
