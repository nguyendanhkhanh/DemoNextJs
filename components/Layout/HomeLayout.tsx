import React from 'react'

interface Props {
  children: any
}

const HomeLayout = (props: Props) =>  {
  const {children} = props
  return (
    <div>
      <h1>Main Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default HomeLayout
