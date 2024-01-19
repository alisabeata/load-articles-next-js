import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Page from './Page'
import '@testing-library/jest-dom'

test('displays data', async () => {
  // If component is rendered
  render(<Page />)

  // Simulate a click on the button
  fireEvent.click(screen.getByRole('button', { name: /Load Data/i }))
})
