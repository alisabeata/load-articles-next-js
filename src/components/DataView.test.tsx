import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DataView } from './DataView'

describe('DataView Component', () => {
  const mockData = [
    { id: 1, title: 'Test Title 1', body: 'Test body 1', userId: 1 },
    { id: 2, title: 'Test Title 2', body: 'Test body 2', userId: 2 },
  ]

  test('renders nothing when data is null', () => {
    const { container } = render(<DataView data={null} />)
    const articles = container.querySelector('.articles')
    expect(articles).not.toBeInTheDocument()
  })

  test('renders articles correctly when data is provided', () => {
    const { container } = render(<DataView data={mockData} />)
    const articles = container.querySelectorAll('.article')
    expect(articles.length).toBe(mockData.length)
    mockData.forEach((item, index) => {
      expect(articles[index]).toHaveTextContent(item.title)
      expect(articles[index]).toHaveTextContent(item.body)
    })
  })
})
