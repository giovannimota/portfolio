import { render, screen } from '@testing-library/react'
import React from 'react'

describe('App', () => {
  it('renders a heading', () => {
    render(<h1>Hello World</h1>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
