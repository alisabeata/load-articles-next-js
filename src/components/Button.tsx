import React, { useState, useEffect } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  setIsLoaded: (p: boolean) => void
  isLoaded: boolean
}

// Functional component Button that takes in ButtonProps
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  setIsLoaded,
  isLoaded,
}) => {
  const [isDisabled, setIsDisabled] = useState(false)

  // Event handler for when the button is clicked
  const handleClick = () => {
    setIsLoaded(false)
    if (!isLoaded) {
      setIsDisabled(true) // Disable the button
      onClick() // Handle click
      setTimeout(() => {
        setIsDisabled(false)
        setIsLoaded(true)
      }, 2000) // Re-enable the button in 2 seconds
    }
  }

  useEffect(() => {
    if (isLoaded) {
      setIsDisabled(false) // Re-enable if loaded
    }
  }, [isLoaded])

  return (
    <button disabled={isDisabled} onClick={handleClick}>
      {children}
    </button>
  )
}

export { Button }
