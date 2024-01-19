import React from 'react'

// Define Types
export interface DataProps {
  body: string
  id: number
  title: string
  userId: number
}

export type DataType = DataProps[] | null

interface ItemProps {
  children: React.ReactNode
}

interface DataViewProps {
  data: DataType
}

// Functional component Item takes in ItemProps and returns an article element
const Item: React.FC<ItemProps> = ({ children }) => {
  return <article className="article">{children}</article>
}

// Functional component DataView takes in DataViewProps, conditionally renders a section if data is not null
const DataView: React.FC<DataViewProps> = ({ data }) => {
  return (
    <>
      {data && (
        <section className="articles">
          {/* Map through the data array and render each item  */}
          {data.map((cur: DataProps) => (
            <Item key={cur.id}>
              <h5 className="article__title">{cur.title}</h5>
              <p className="article__text">{cur.body}</p>
            </Item>
          ))}
        </section>
      )}
    </>
  )
}

export { DataView }
