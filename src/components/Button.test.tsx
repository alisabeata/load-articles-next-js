import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
  it('renders the button', () => {
    const { getByRole } = render(
      <Button onClick={() => {}} setIsLoaded={() => {}} isLoaded={false}>
        Load Data
      </Button>,
    )
    expect(getByRole('button')).toHaveTextContent('Load Data')
  })

  it('disables and enables the button correctly', async () => {
    jest.useFakeTimers()
    const mockOnClick = jest.fn()
    const mockSetIsLoaded = jest.fn()

    const { getByRole } = render(
      <Button
        onClick={mockOnClick}
        setIsLoaded={mockSetIsLoaded}
        isLoaded={false}
      >
        Load Data
      </Button>,
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(button).toBeDisabled()
    expect(mockOnClick).toHaveBeenCalled()

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(2100)
    })

    expect(button).not.toBeDisabled()
    expect(mockSetIsLoaded).toHaveBeenCalledWith(false)

    jest.useRealTimers()
  })

  it('does not disable the button if already loaded', () => {
    const { getByRole } = render(
      <Button onClick={() => {}} setIsLoaded={() => {}} isLoaded={true}>
        Load Data
      </Button>,
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(button).not.toBeDisabled()
  })
})
