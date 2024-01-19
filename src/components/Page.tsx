'use client'

import React, { useState, useCallback } from 'react'
import { Button } from '@/components/Button'
import { DataView, DataType } from '@/components/DataView'

const Page: React.FC = () => {
  const [data, setData] = useState<DataType>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchData = async () => {
    try {
      // Load the data using fetch
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        // Error handler
        throw new Error('Failed to fetch data')
      }
      const jsonData = await response.json()
      setData(jsonData)
      setIsLoaded(true)
    } catch (error) {
      console.warn('Failed to fetch data')
    }
  }

  return (
    <>
      <Button onClick={fetchData} isLoaded={isLoaded} setIsLoaded={setIsLoaded}>
        Load Data
      </Button>
      <DataView data={data} />
    </>
  )
}

export default Page
